import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-media-picker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Preview / Trigger -->
    <div class="picker-trigger" (click)="openModal()">
      <div class="preview" *ngIf="previewUrl()">
        <img [src]="previewUrl()" alt="Selected image">
        <button class="remove-btn" (click)="removeImage($event)" title="Remove">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="placeholder" *ngIf="!previewUrl()">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>{{ label || 'Select Image' }}</span>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal-overlay" *ngIf="modalOpen()" (click)="closeModal()">
      <div class="modal" (click)="$event.stopPropagation()">
        <div class="modal-header">
          <h3>Media Library</h3>
          <button class="modal-close" (click)="closeModal()">&times;</button>
        </div>

        <div class="modal-tabs">
          <button [class.active]="tab() === 'library'" (click)="tab.set('library')">Library</button>
          <button [class.active]="tab() === 'upload'" (click)="tab.set('upload')">Upload New</button>
        </div>

        <!-- Upload Tab -->
        <div class="upload-tab" *ngIf="tab() === 'upload'">
          <label class="drop-zone" [class.dragging]="dragging()">
            <input type="file" accept="image/*" (change)="handleUpload($event)" style="display:none">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
            <p>Click or drag image to upload</p>
            <span class="hint">Max 10MB, JPEG/PNG/WebP</span>
          </label>
          <div class="upload-progress" *ngIf="uploading()">
            <div class="spinner-small"></div>
            <span>Uploading...</span>
          </div>
        </div>

        <!-- Library Tab -->
        <div class="library-tab" *ngIf="tab() === 'library'">
          <input type="text" class="lib-search" placeholder="Search images..." [(ngModel)]="searchQuery" (input)="loadLibrary()">
          <div class="lib-loading" *ngIf="libLoading()"><div class="spinner-small"></div></div>
          <div class="lib-grid" *ngIf="!libLoading()">
            <div class="lib-item" *ngFor="let item of libraryItems()" (click)="selectFromLibrary(item)" [class.selected]="selectedLibItem()?.id === item.id">
              <img [src]="getThumbUrl(item)" [alt]="item.title" loading="lazy">
              <span class="lib-item-name">{{ item.title }}</span>
            </div>
          </div>
          <div class="lib-empty" *ngIf="!libLoading() && libraryItems().length === 0">
            <p>No images found. Upload one first.</p>
          </div>
          <div class="lib-pagination" *ngIf="libTotalPages() > 1">
            <button *ngFor="let p of libPages()" [class.active]="p === libPage()" (click)="libPage.set(p); loadLibrary()">{{ p }}</button>
          </div>
        </div>

        <div class="modal-footer" *ngIf="tab() === 'library'">
          <button class="btn-cancel" (click)="closeModal()">Cancel</button>
          <button class="btn-select" [disabled]="!selectedLibItem()" (click)="confirmSelection()">Select Image</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .picker-trigger { cursor:pointer; border:2px dashed #e5e7eb; border-radius:12px; overflow:hidden; transition:all 0.2s; display:inline-block; }
    .picker-trigger:hover { border-color:#e31b23; }
    .preview { position:relative; width:160px; height:120px; }
    .preview img { width:100%; height:100%; object-fit:cover; }
    .remove-btn { position:absolute; top:6px; right:6px; background:rgba(255,255,255,0.9); border:none; border-radius:50%; width:24px; height:24px; display:flex; align-items:center; justify-content:center; cursor:pointer; color:#dc2626; }
    .placeholder { width:160px; height:120px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; color:#94a3b8; }
    .placeholder span { font-size:13px; font-weight:500; }

    .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.6); z-index:9999; display:flex; align-items:center; justify-content:center; }
    .modal { background:#fff; border-radius:16px; width:90vw; max-width:800px; max-height:85vh; display:flex; flex-direction:column; overflow:hidden; }
    .modal-header { display:flex; justify-content:space-between; align-items:center; padding:20px 24px; border-bottom:1px solid #e5e7eb; }
    .modal-header h3 { margin:0; font-size:18px; font-weight:700; color:#1a1a2e; }
    .modal-close { background:none; border:none; font-size:28px; cursor:pointer; color:#64748b; line-height:1; }
    .modal-tabs { display:flex; border-bottom:1px solid #e5e7eb; padding:0 24px; }
    .modal-tabs button { padding:12px 20px; border:none; background:none; font-weight:600; color:#64748b; cursor:pointer; border-bottom:2px solid transparent; }
    .modal-tabs button.active { color:#e31b23; border-bottom-color:#e31b23; }

    .upload-tab { padding:40px 24px; display:flex; flex-direction:column; align-items:center; }
    .drop-zone { display:flex; flex-direction:column; align-items:center; gap:12px; padding:40px 60px; border:2px dashed #d1d5db; border-radius:12px; cursor:pointer; color:#64748b; transition:all 0.2s; }
    .drop-zone:hover, .drop-zone.dragging { border-color:#e31b23; background:#fff5f5; }
    .drop-zone p { margin:0; font-weight:600; }
    .hint { font-size:12px; color:#94a3b8; }
    .upload-progress { display:flex; align-items:center; gap:10px; margin-top:16px; }

    .library-tab { padding:16px 24px; flex:1; overflow-y:auto; max-height:50vh; }
    .lib-search { width:100%; padding:10px 14px; border:1px solid #e5e7eb; border-radius:8px; font-size:14px; margin-bottom:16px; }
    .lib-search:focus { outline:none; border-color:#e31b23; }
    .lib-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(120px, 1fr)); gap:12px; }
    .lib-item { border-radius:8px; overflow:hidden; cursor:pointer; border:2px solid transparent; transition:all 0.2s; background:#f8f9fa; }
    .lib-item:hover { border-color:#fca5a5; }
    .lib-item.selected { border-color:#e31b23; box-shadow:0 0 0 2px rgba(227,27,35,0.2); }
    .lib-item img { width:100%; height:90px; object-fit:cover; }
    .lib-item-name { display:block; padding:4px 8px; font-size:11px; color:#64748b; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
    .lib-loading { display:flex; justify-content:center; padding:40px; }
    .lib-empty { text-align:center; padding:40px; color:#94a3b8; }
    .lib-pagination { display:flex; gap:6px; justify-content:center; margin-top:12px; }
    .lib-pagination button { padding:6px 12px; border:1px solid #e5e7eb; border-radius:6px; background:#fff; cursor:pointer; font-size:13px; }
    .lib-pagination button.active { background:#e31b23; color:#fff; border-color:#e31b23; }

    .spinner-small { width:24px; height:24px; border:2px solid #f3f4f6; border-top-color:#e31b23; border-radius:50%; animation:spin 0.8s linear infinite; }
    @keyframes spin { to { transform:rotate(360deg); } }

    .modal-footer { display:flex; justify-content:flex-end; gap:12px; padding:16px 24px; border-top:1px solid #e5e7eb; }
    .btn-cancel { padding:10px 20px; border:1px solid #e5e7eb; border-radius:8px; background:#fff; cursor:pointer; font-weight:500; }
    .btn-select { padding:10px 20px; border:none; border-radius:8px; background:#e31b23; color:#fff; cursor:pointer; font-weight:600; }
    .btn-select:disabled { background:#fca5a5; cursor:not-allowed; }
    .btn-select:hover:not(:disabled) { background:#b11218; }
  `]
})
export class MediaPickerComponent implements OnInit {
  @Input() value: any = null; // media_upload id or path
  @Input() label = 'Select Image';
  @Output() valueChange = new EventEmitter<any>();
  @Output() mediaSelected = new EventEmitter<any>();

  modalOpen = signal(false);
  tab = signal<'library' | 'upload'>('library');
  previewUrl = signal<string>('');
  uploading = signal(false);
  dragging = signal(false);

  libraryItems = signal<any[]>([]);
  libLoading = signal(false);
  libPage = signal(1);
  libTotalPages = signal(1);
  selectedLibItem = signal<any>(null);
  searchQuery = '';

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.value) this.loadPreview();
  }

  loadPreview() {
    if (!this.value) { this.previewUrl.set(''); return; }
    // If value is a number (media_upload id), fetch it
    if (typeof this.value === 'number' || /^\d+$/.test(String(this.value))) {
      // Try to get from media library
      this.http.get<any>(`${this.apiUrl}/admin/media?limit=1&search=`).subscribe({
        next: (res) => {
          // Find in existing data or just show thumb path
          const baseUrl = this.apiUrl.replace('/api/v1', '');
          this.previewUrl.set(`${baseUrl}/uploads/media/thumb/${this.value}`);
        }
      });
    } else if (typeof this.value === 'string' && this.value.startsWith('http')) {
      this.previewUrl.set(this.value);
    } else if (typeof this.value === 'string') {
      const baseUrl = this.apiUrl.replace('/api/v1', '');
      this.previewUrl.set(`${baseUrl}/uploads/media/thumb/${this.value}`);
    }
  }

  openModal() {
    this.modalOpen.set(true);
    this.selectedLibItem.set(null);
    this.loadLibrary();
  }

  closeModal() {
    this.modalOpen.set(false);
  }

  loadLibrary() {
    this.libLoading.set(true);
    const params: any = { page: this.libPage(), limit: 24 };
    if (this.searchQuery) params.search = this.searchQuery;
    this.http.get<any>(`${this.apiUrl}/admin/media`, { params }).subscribe({
      next: (res) => {
        this.libraryItems.set(res.data || []);
        this.libTotalPages.set(res.pagination?.totalPages || 1);
      },
      error: () => this.libraryItems.set([]),
      complete: () => this.libLoading.set(false)
    });
  }

  getThumbUrl(item: any): string {
    if (!item.path) return '';
    const filename = item.path.replace('media/', '');
    return `${this.apiUrl.replace('/api/v1', '')}/uploads/media/thumb/${filename}`;
  }

  selectFromLibrary(item: any) {
    this.selectedLibItem.set(item);
  }

  confirmSelection() {
    const item = this.selectedLibItem();
    if (!item) return;
    this.value = item.id;
    this.valueChange.emit(item.id);
    this.mediaSelected.emit(item);
    const filename = item.path?.replace('media/', '');
    this.previewUrl.set(this.getThumbUrl(item));
    this.closeModal();
  }

  handleUpload(event: any) {
    const file = event.target.files?.[0];
    if (!file) return;
    this.uploading.set(true);
    const fd = new FormData();
    fd.append('file', file);
    this.http.post<any>(`${this.apiUrl}/admin/media/upload`, fd).subscribe({
      next: (res) => {
        const media = res.data;
        this.value = media.id;
        this.valueChange.emit(media.id);
        this.mediaSelected.emit(media);
        this.previewUrl.set(this.getThumbUrl(media));
        this.uploading.set(false);
        this.closeModal();
      },
      error: () => this.uploading.set(false)
    });
    event.target.value = '';
  }

  removeImage(event: Event) {
    event.stopPropagation();
    this.value = null;
    this.previewUrl.set('');
    this.valueChange.emit(null);
  }

  libPages(): number[] {
    const arr = [];
    for (let i = 1; i <= this.libTotalPages(); i++) arr.push(i);
    return arr;
  }
}
