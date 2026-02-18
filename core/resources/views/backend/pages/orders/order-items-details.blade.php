<h4 class="section-title">
    <i class="las la-boxes"></i>
    {{ __('Order Items') }}
</h4>

<!-- Table Design One -->
<div class="table-container mt-4">
    <div class="table-responsive">
        <!-- Table -->
        <table class="modern-table orderItemTable">
            <thead>
            <tr>
                <th>{{ __('Item ID') }}</th>
                <th>{{ __('Title') }}</th>
                <th>{{ __('Type') }}</th>
                <th>{{ __('Quantity') }}</th>
                <th>{{ __('Price') }}</th>
                <th>{{ __('Total Price') }}</th>
                <th>{{ __('Action') }}</th>
            </tr>
            </thead>
            <tbody>
            @foreach($order->orderItems as $item)
                <tr>
                    <td class="item-id">#{{ $item->id }}</td>
                    <td class="item-title">{{ $item->service?->title }}</td>
                    @php
                         $flag = "";
                         if($item->type == 0)
                         {
                             $flag = __('Service');
                         }
                         else if($item->type == 1)
                         {
                             $flag = __('Product');
                         }
                    @endphp
                    <td>
                        @if($item->type == 0)
                            <span class="type-badge service">{{ __('Service') }}</span>
                        @else
                            <span class="type-badge product">{{ __('Product') }}</span>
                        @endif
                    </td>
                    <td class="item-qty">{{ $item->qty }}</td>
                    <td class="item-price">{{ float_amount_with_currency_symbol($item->price) }}</td>
                    <td class="item-total">{{ float_amount_with_currency_symbol($item->price * $item->qty) }}</td>
                    <td class="item-action">   
                        @if($item->type == 0)
                            <a href="{{ route('admin.service.details', $item->service_id) }}" class="action-btn view-btn">
                                <i class="las la-eye"></i>
                                <span>{{ __('View') }}</span>
                            </a>
                        @endif
                        @if($item->type == 1)
                            <a href="{{ route('admin.product.details', $item->service_id) }}" class="action-btn view-btn">
                                <i class="las la-eye"></i>
                                <span>{{ __('View') }}</span>
                            </a>
                        @endif              
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    </div>
</div>

<style>
/* ===== ORDER ITEMS TABLE STYLES ===== */

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
    --red-dark: #b91c1c;
    --green-light: #d1fae5;
    --green-dark: #047857;
    --blue-light: #dbeafe;
    --blue-dark: #1e40af;
    --radius: 8px;
    --radius-lg: 12px;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --transition: all 0.2s ease;
}

/* Section Title */
.section-title {
    font-size: 20px;
    font-weight: 600;
    color: var(--gray-800);
    margin: 24px 0 16px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    padding-left: 16px;
}

.section-title::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 20px;
    background: var(--red);
    border-radius: 4px;
}

.section-title i {
    color: var(--red);
    font-size: 22px;
    margin-right: 4px;
}

/* Table Container */
.table-container {
    background: var(--white);
    border: 1px solid var(--gray-200);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
}

.table-responsive {
    overflow-x: auto;
}

/* Modern Table */
.modern-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
    min-width: 900px;
}

.modern-table thead th {
    text-align: left;
    padding: 16px;
    background: var(--gray-50);
    color: var(--gray-600);
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    border-bottom: 1px solid var(--gray-200);
    white-space: nowrap;
}

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

.modern-table tbody tr:last-child td {
    border-bottom: none;
}

/* Item ID */
.item-id {
    font-weight: 600;
    color: var(--red);
    font-family: monospace;
}

/* Item Title */
.item-title {
    font-weight: 500;
    color: var(--gray-800);
    max-width: 250px;
    white-space: normal;
    line-height: 1.5;
}

/* Type Badge */
.type-badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 40px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.3px;
}

.type-badge.service {
    background: var(--green-light);
    color: var(--green-dark);
}

.type-badge.product {
    background: var(--blue-light);
    color: var(--blue-dark);
}

/* Quantity */
.item-qty {
    font-weight: 600;
    color: var(--gray-800);
    text-align: center;
}

/* Price */
.item-price {
    font-weight: 500;
    color: var(--gray-700);
}

.item-total {
    font-weight: 600;
    color: var(--red);
}

/* Action Button */
.item-action {
    min-width: 100px;
}

.action-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 16px;
    background: var(--red-light);
    border: 1px solid var(--red);
    border-radius: 40px;
    color: var(--red);
    font-size: 13px;
    font-weight: 500;
    text-decoration: none;
    transition: var(--transition);
    white-space: nowrap;
}

.action-btn i {
    font-size: 14px;
}

.action-btn:hover {
    background: var(--red);
    border-color: var(--red);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(227, 27, 35, 0.2);
}

/* Responsive */
@media (max-width: 992px) {
    .modern-table {
        min-width: 900px;
    }
}

@media (max-width: 768px) {
    .section-title {
        font-size: 18px;
        margin: 16px 0 12px 0;
    }
    
    .action-btn {
        padding: 6px 12px;
        font-size: 12px;
    }
    
    .action-btn span {
        display: none;
    }
    
    .action-btn i {
        margin: 0;
        font-size: 16px;
    }
}

/* Preserve original classes */
.tableStyle_one {
    /* Preserved for compatibility */
}

.orderItemTable {
    /* Preserved for compatibility */
}

.mt-4 {
    margin-top: 20px;
}
</style>