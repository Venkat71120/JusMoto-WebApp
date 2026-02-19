import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-media-library',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="page-header">
      <h1 class="page-title">Media Library</h1>
      <div class="header-actions">
        <input type="text" class="search-box" placeholder="Search media..." [(ngModel)]="search" (input)="loadMedia()">
        <label class="btn-primary upload-btn">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
          Upload
          <input type="file" accept="image/*" (change)="uploadFile($event)" style="display:none" multiple>
        </label>
      </div>
    </div>

    <div class="upload-zone" *ngIf="uploading()">
      <div class="spinner"></div>
      <p>Uploading...</p>
    </div>

    <div class="loading-center" *ngIf="loading()"><div class="spinner"></div></div>

    <div class="media-grid" *ngIf="!loading()">
      <div class="media-card" *ngFor="let item of media()" (click)="selectMedia(item)" [class.selected]="selectedId() === item.id">
        <div class="media-thumb">
          <img [src]="getThumbUrl(item)" [alt]="item.alt || item.title" loading="lazy">
        </div>
        <div class="media-info">
          <span class="media-title">{{ item.title }}</span>
          <span class="media-size">{{ formatSize(item.size) }}</span>
        </div>
        <button class="delete-btn" (click)="deleteMedia(item, $event)" title="Delete">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>
        </button>
      </div>
    </div>

    <div class="empty-state" *ngIf="!loading() && media().length === 0">
      <p>No media files found. Upload your first image!</p>
    </div>

    <div class="pagination" *ngIf="totalPages() > 1">
      <button class="page-btn" *ngFor="let p of pages()" [class.active]="p === page()" (click)="goToPage(p)">{{ p }}</button>
    </div>
  `,
  styles: [`
    .page-header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; flex-wrap:wrap; gap:16px; }
    .page-title { font-size:24px; font-weight:700; color:#1a1a2e; margin:0; }
    .header-actions { display:flex; gap:12px; align-items:center; }
    .search-box { padding:10px 16px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; width:250px; }
    .btn-primary { background:#e31b23; color:#fff; border:none; padding:10px 20px; border-radius:8px; font-weight:600; cursor:pointer; display:inline-flex; align-items:center; gap:8px; }
    .btn-primary:hover { background:#b11218; }
    .upload-btn { position:relative; }
    .upload-zone { display:flex; align-items:center; gap:12px; justify-content:center; padding:20px; background:#fff; border-radius:12px; margin-bottom:20px; }
    .loading-center { display:flex; justify-content:center; padding:60px; }
    .spinner { width:36px; height:36px; border:3px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }
    .media-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:16px; }
    .media-card { background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08); cursor:pointer; position:relative; transition:all 0.2s; }
    .media-card:hover { box-shadow:0 4px 12px rgba(0,0,0,0.15); transform:translateY(-2px); }
    .media-card.selected { outline:3px solid #e31b23; }
    .media-thumb { width:100%; height:150px; overflow:hidden; background:#f8f9fa; display:flex; align-items:center; justify-content:center; }
    .media-thumb img { width:100%; height:100%; object-fit:cover; }
    .media-info { padding:10px 12px; }
    .media-title { display:block; font-size:13px; font-weight:500; color:#334155; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .media-size { font-size:11px; color:#94a3b8; }
    .delete-btn { position:absolute; top:8px; right:8px; background:rgba(255,255,255,0.9); border:none; border-radius:6px; padding:6px; cursor:pointer; color:#dc2626; opacity:0; transition:opacity 0.2s; }
    .media-card:hover .delete-btn { opacity:1; }
    .empty-state { text-align:center; padding:60px; color:#94a3b8; }
    .pagination { display:flex; gap:8px; justify-content:center; margin-top:24px; }
    .page-btn { padding:8px 14px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; }
    .page-btn.active { background:#e31b23; color:#fff; border-color:#e31b23; }
  `]
})
export class MediaLibraryComponent implements OnInit {
  media = signal<any[]>([]);
  loading = signal(true);
  uploading = signal(false);
  search = '';
  page = signal(1);
  totalPages = signal(1);
  selectedId = signal<number | null>(null);

  constructor(private http: HttpClient) {}

  ngOnInit() { this.loadMedia(); }

  loadMedia() {
    this.loading.set(true);
    const params: any = { page: this.page(), limit: 30 };
    if (this.search) params.search = this.search;
    this.http.get<any>(`${environment.apiUrl}/admin/media`, { params }).subscribe({
      next: (res) => {
        this.media.set(res.data || []);
        this.totalPages.set(res.pagination?.totalPages || 1);
      },
      error: () => this.media.set([]),
      complete: () => this.loading.set(false)
    });
  }

  uploadFile(event: any) {
    const files = event.target.files;
    if (!files.length) return;
    this.uploading.set(true);
    let completed = 0;
    for (let i = 0; i < files.length; i++) {
      const fd = new FormData();
      fd.append('file', files[i]);
      this.http.post<any>(`${environment.apiUrl}/admin/media/upload`, fd).subscribe({
        next: () => { completed++; if (completed === files.length) { this.uploading.set(false); this.loadMedia(); } },
        error: () => { completed++; if (completed === files.length) { this.uploading.set(false); this.loadMedia(); } }
      });
    }
    event.target.value = '';
  }

  deleteMedia(item: any, event: Event) {
    event.stopPropagation();
    if (!confirm('Delete this media file?')) return;
    this.http.delete(`${environment.apiUrl}/admin/media/${item.id}`).subscribe(() => this.loadMedia());
  }

  selectMedia(item: any) {
    this.selectedId.set(this.selectedId() === item.id ? null : item.id);
  }

  getThumbUrl(item: any): string {
    if (!item.path) return '';
    const filename = item.path.replace('media/', '');
    return `${environment.apiUrl.replace('/api/v1', '')}/uploads/media/thumb/${filename}`;
  }

  formatSize(size: string): string {
    const bytes = parseInt(size);
    if (!bytes) return '';
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  }

  pages(): number[] {
    const arr = [];
    for (let i = 1; i <= this.totalPages(); i++) arr.push(i);
    return arr;
  }

  goToPage(p: number) { this.page.set(p); this.loadMedia(); }
}
