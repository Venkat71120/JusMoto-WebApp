<table class="modern-table">
    <thead>
    @can('admin-outlet-bulk-delete')
        <th class="checkbox-col">
            <div class="checkbox-wrapper">
                <input type="checkbox" class="all-checkbox" id="selectAll">
            </div>
        </th>
    @endcan
    <th class="id-col">#</th>
    <th class="name-col">{{__('Name')}}</th>
    <th class="address-col">{{__("Address") }}</th>
    <th class="state-col">{{__("State") }}</th>
    <th class="status-col">{{ __("Status") }}</th>
    <th class="actions-col">{{__('Action')}}</th>
    </thead>
    <tbody>
    @foreach($all_outlets as $outlet)
        <tr class="table-row">
            @can('admin-outlet-bulk-delete')
                <td class="checkbox-col">
                    <div class="checkbox-wrapper">
                        <input type="checkbox" class="bulk-checkbox" id="checkbox-{{$outlet->id}}" value="{{$outlet->id}}">
                    </div>
                </td>
            @endcan
            <td class="id-col">{{ $outlet->id }}</td>
            <td class="name-col">
                <div class="outlet-info">
                    <span class="outlet-name">{{ $outlet->name }}</span>
                </div>
            </td>
            <td class="address-col">
                <span class="address-text">{{ $outlet->address }}</span>
            </td>
            <td class="state-col">
                <span class="state-tag">{{ $outlet->state->state ?? '' }}</span>
            </td>
            <!--status -->
            <td class="status-col">
                <div class="status-wrapper">
                    @if($outlet->status == 1)
                        <span class="status-badge active">{{__('Approved')}}</span>
                    @else
                        <span class="status-badge pending">{{__('Pending')}}</span>
                    @endif
                    @can('outlet-status-change')
                        <div class="status-action">
                            <x-status.status-change :url="route('admin.outlet.status.change',$outlet->id)"/>
                        </div>
                    @endcan
                </div>
            </td>
            <!--Action -->
            <td class="actions-col">
                <div class="action-group">
                    @can('admin-outlet-edit')
                        <a href="{{ route('admin.outlet.edit', $outlet->id) }}" class="action-item edit">
                            <i class="las la-pen"></i>
                        </a>
                    @endcan
                    <a href="{{ route('admin.outlet.details', $outlet->id) }}" class="action-item view">
                        <i class="las la-eye"></i>
                    </a>
                    @can('admin-brand-delete')
                        <x-popup.delete-popup :url="route('admin.outlet.delete', $outlet->id)"/>
                    @endcan
                </div>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>

<div class="pagination-wrapper">
    {{ $all_outlets->links() }}
</div>

<style>
/* ===== CLEAN OUTLETS TABLE ===== */

:root {
    --white: #ffffff;
    --gray-50: #f9fafb;
    --gray-100: #f3f4f6;
    --gray-200: #e5e7eb;
    --gray-300: #d1d5db;
    --gray-400: #9ca3af;
    --gray-500: #6b7280;
    --gray-600: #4b5563;
    --gray-700: #374151;
    --gray-800: #1f2937;
    --red: #e31b23;
    --red-light: #fee2e2;
    --green-light: #dcfce7;
    --green-dark: #166534;
    --yellow-light: #fef9c3;
    --yellow-dark: #854d0e;
    --radius: 8px;
    --transition: all 0.2s ease;
}

/* Table Container */
.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius);
    overflow: hidden;
}

/* Table Header */
.modern-table thead th {
    text-align: left;
    padding: 14px 16px;
    background: var(--gray-50);
    color: var(--gray-600);
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--gray-200);
    white-space: nowrap;
}

/* Table Cells */
.modern-table tbody td {
    padding: 16px;
    color: var(--gray-700);
    border-bottom: 1px solid var(--gray-100);
    vertical-align: middle;
}

.modern-table tbody tr {
    background: var(--white);
    transition: var(--transition);
}

.modern-table tbody tr:hover {
    background: var(--gray-50);
}

/* Column Widths */
.checkbox-col { width: 40px; text-align: center; }
.id-col { width: 60px; color: var(--gray-500); font-weight: 500; }
.name-col { min-width: 180px; }
.address-col { min-width: 250px; }
.state-col { width: 120px; }
.status-col { width: 120px; }
.actions-col { width: 100px; text-align: right; }

/* Checkbox */
.checkbox-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.all-checkbox,
.bulk-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid var(--gray-400);
    border-radius: 4px;
    cursor: pointer;
    accent-color: var(--red);
}

/* Outlet Info */
.outlet-info {
    display: flex;
    flex-direction: column;
}

.outlet-name {
    font-weight: 600;
    color: var(--gray-800);
    font-size: 15px;
}

/* Address */
.address-text {
    font-size: 14px;
    color: var(--gray-700);
    line-height: 1.5;
}

/* State Tag */
.state-tag {
    display: inline-block;
    padding: 4px 10px;
    background: var(--gray-100);
    border-radius: 20px;
    font-size: 12px;
    color: var(--gray-700);
    white-space: nowrap;
}

/* Status Wrapper */
.status-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* Status Badges */
.status-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
    white-space: nowrap;
}

.status-badge.active {
    background: var(--green-light);
    color: var(--green-dark);
}

.status-badge.pending {
    background: var(--yellow-light);
    color: var(--yellow-dark);
}

/* Status Action */
.status-action {
    margin-top: 4px;
}

/* Action Group */
.action-group {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 4px;
}

/* Action Items */
.action-item {
    width: 32px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: var(--gray-100);
    color: var(--gray-600);
    text-decoration: none;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: var(--transition);
}

.action-item:hover {
    background: var(--red);
    color: white;
    transform: translateY(-2px);
}

.action-item.edit:hover {
    background: #2563eb;
}

.action-item.view:hover {
    background: #10b981;
}

/* Pagination */
.pagination-wrapper {
    margin-top: 24px;
    display: flex;
    justify-content: flex-end;
}

.pagination {
    display: flex;
    align-items: center;
    gap: 4px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.pagination li a,
.pagination li span {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    height: 36px;
    padding: 0 8px;
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: 6px;
    color: var(--gray-700);
    font-size: 14px;
    text-decoration: none;
    transition: var(--transition);
}

.pagination li.active span {
    background: var(--red);
    border-color: var(--red);
    color: white;
}

.pagination li a:hover {
    background: var(--gray-50);
    border-color: var(--gray-400);
    color: var(--red);
}

/* Responsive */
@media (max-width: 992px) {
    .modern-table {
        min-width: 900px;
    }
}

/* Preserve original classes */
.dataTablesExample {
    width: 100%;
}
</style>