<div class="table-responsive">
    <table class="table">
        <thead>
            <th>{{__('ID')}}</th>
            <th>{{__('Client Info')}}</th>
            <th>{{__('Amount Details')}}</th>
            <th>{{__('Staff')}}</th>
            <th>{{__('Payment Gateway')}}</th>
            <th>{{__('Order Status')}}</th>
            <th>{{__('Crate Date')}}</th>
            <th>{{__('Action')}}</th>
        </thead>
        <tbody>
            @foreach($all_orders as $data)
                <tr>
                    <td>{{$data->id}}</td>
                 <td>
    <div class="table_customer">
        <div class="table_customer__flex">
            <div class="table_customer__contents">

                @php
                    $hasService = false;
                    $hasProduct = false;

                    if($data->orderItems && $data->orderItems->count()){
                        foreach($data->orderItems as $item){
                            if(optional($item->service)->type == 0){
                                $hasService = true;
                            }
                            if(optional($item->service)->type == 1){
                                $hasProduct = true;
                            }
                        }
                    }
                @endphp

                {{-- Service/Product Label --}}
                @if($hasService && $hasProduct)
                    <span class="badge bg-primary mb-1">Service & Product</span>
                @elseif($hasService)
                    <span class="badge bg-success mb-1">Service</span>
                @elseif($hasProduct)
                    <span class="badge bg-info mb-1">Product</span>
                @endif

                {{-- User Info --}}
                <h6 class="table_customer__title">
                    {{ __('Name:') }} {{ $data->user?->first_name }}
                </h6>

                <h6 class="table_customer__title">
                    {{ __('Email:') }} {{ $data->user?->email }}
                </h6>

            </div>
        </div>
    </div>
</td>

                    <td>
                        <div class="table_customer">
                            <div class="table_customer__flex">
                                <div class="table_customer__contents">
                                    <h6 class="table_customer__title">{{ __('Sub Total:') }}
                                        {{float_amount_with_currency_symbol($data->sub_total) }} </h6>
                                    @if($data->coupon_amount > 0)
                                        <h6 class="table_customer__title"> {{ __('Coupon Amount:') }} <strong>-</strong>
                                            {{ float_amount_with_currency_symbol($data->coupon_amount) }} </h6>
                                    @endif
                                    <h6 class="table_customer__title">{{ __('Tax:') }} <strong>+</strong>
                                        {{ float_amount_with_currency_symbol($data->tax) }}</h6>
                                    <h6 class="table_customer__title">{{ __('Total:') }}
                                        {{ float_amount_with_currency_symbol($data->total) }}</h6>
                                </div>
                            </div>
                        </div>
                    </td>

                    <td>
                        <div class="table_customer">
                            <div class="table_customer__flex">
                                <div class="table_customer__thumb">
                                    {!! render_image_markup_by_attachment_id($data->staff?->image) !!}
                                </div>
                                <div class="table_customer__contents">
                                    <h6 class="table_customer__title">{{ __('Name:') }}{{ $data->staff?->fullname }}</h6>
                                    <h6 class="table_customer__title">{{ __('Date:') }} {{ $data->date }} </h6>
                                    <h6 class="table_customer__title">{{ __('Schedule:') }} {{ $data->schedule }}</h6>
                                </div>
                            </div>
                        </div>
                    </td>


                    <td>
                        <div class="table_customer">
                            <div class="table_customer__flex">
                                <div class="table_customer__contents">
                                    <h6 class="table_customer__title">{{ __('Gateway:') }} {{ $data->payment_gateway }}
                                    </h6>
                                    <div class="d-flex mt-2">
                                        <span class="me-2"><x-status.payment-status
                                                :status="$data->payment_status" /></span>
                                        <span><x-status.status-change
                                                :url="route('admin.order.change.status', $data->id)" /></span>
                                        @if($data->payment_gateway == 'manual_payment')

                                            <a href="#" class="open-modal"
                                                data-file-url="{{ asset('assets/uploads/manual-payment/' . $data->payment_attachment) }}"
                                                data-file-name="{{ $data->payment_attachment }}">
                                                <i class="las la-file-invoice"></i>
                                            </a>
                                        @endif
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex" id="order_status">
                            <span class="me-2"><x-status.order-status :status="$data->status" /></span>
                            <span>
                                <button type="button" class="cmnBtn btn_5 btn_bg_warning
                                btnIcon radius-5 order_status_change_modal" data-order_id="{{$data->id}}"
                                    data-bs-toggle="modal" data-bs-target="#OrderStatusChangeModal">
                                    <i class="las la-pen"></i>
                                </button>
                            </span>
                        </div>
                    </td>
                    <td> <strong class="subCap">{{ $data->created_at->diffForHumans() }}</strong></td>
                    <td>

             <div class="d-flex gap-2" id="order_action">
    <x-icon.view-icon :url="route('admin.main.order.details', $data->id)" />
    <x-icon.file-icon :url="route('admin.order.invoice.generate', $data->id)" />

    @if(Auth::guard('admin')->user()->is_franchise != 1)
        <button type="button" class="btn btn-sm btn-warning openAllocateModal"
            data-order-id="{{ $data->id }}"
            data-current-admin-name="{{ optional($data->franchiseAdmin)->name ?? '' }}">
            <i class="las la-user-cog"></i>
        </button>
    @endif
</div>

                    </td>

                </tr>
            @endforeach
        </tbody>
    </table>
</div>

<div class="custom_pagination mt-5 d-flex justify-content-end">
    {{ $all_orders->links() }}
</div>