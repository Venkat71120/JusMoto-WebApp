@extends('frontend.user.layout.master')
@section('title','Dashboard')

@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <!-- First Row: Greeting and Welcome Message -->
            <div class="row g-4 mb-4">
                <div class="col-12">
                    <div class="page_header">
                        <h3 class="page-heading" id="greeting"></h3>
                        <p>{{__('Manage your dashboard here')}}</p>
                    </div>
                </div>
            </div>

            <!-- Second Row: Dashboard Cards (All in one row) -->
            <div class="row g-4 mb-4">
                <div class="col-12">
                    <div class="cards_wrapper bg_active p_6 br_8 d-flex flex-wrap gap-3">
                        <!-- Total Orders Card -->
                        <div class="dashborad_card bg_light br_8 py_13 px_10 flex-fill" style="min-width: 200px;">
                            <div class="card_content">
                                <span>{{__('Total Orders')}}</span>
                                <h6>{{ $totalOrders }}</h6>
                            </div>
                            <div class="card_icon">
                                <div class="card_icon_wrapper">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
                                            fill="#FF6B2C" fill-opacity="0.1" />
                                        <g clip-path="url(#clip0_10511_2914)">
                                            <path d="M22.25 18.5H36" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.25 26H36" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M22.25 33.5H36" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.25 18.5V18.5125" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.25 26V26.0125" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M17.25 33.5V33.5125" stroke="#FF6B2C" stroke-width="3"
                                                  stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Order Cancelled Card -->
                        <div class="dashborad_card bg_light br_8 py_13 px_10 flex-fill" style="min-width: 200px;">
                            <div class="card_content">
                                <span>{{__('Order Cancelled')}}</span>
                                <h6>{{ $cancelledOrders }}</h6>
                            </div>
                            <div class="card_icon">
                                <div class="card_icon_wrapper">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
                                            fill="#E9EFFF" />
                                        <g clip-path="url(#clip0_10511_2928)">
                                            <path
                                                d="M33.9163 18.5C35.1319 18.5 36.2978 18.9829 37.1575 19.8425C38.0171 20.7022 38.5 21.8681 38.5 23.0837V33.9163C38.5 35.1319 38.0171 36.2978 37.1575 37.1575C36.2978 38.0171 35.1319 38.5 33.9163 38.5H23.0837C21.8681 38.5 20.7022 38.0171 19.8425 37.1575C18.9829 36.2978 18.5 35.1319 18.5 33.9163V23.0837C18.5 21.8681 18.9829 20.7022 19.8425 19.8425C20.7022 18.9829 21.8681 18.5 23.0837 18.5H33.9163ZM29.75 13.5C31.1175 13.5 32.035 14.1662 32.7175 15.3925C32.7973 15.536 32.848 15.6937 32.8668 15.8568C32.8856 16.0199 32.8721 16.1851 32.8271 16.3429C32.782 16.5008 32.7064 16.6482 32.6043 16.7769C32.5023 16.9055 32.376 17.0127 32.2325 17.0925C32.089 17.1723 31.9313 17.223 31.7682 17.2418C31.6051 17.2606 31.4399 17.2471 31.2821 17.2021C31.1242 17.157 30.9767 17.0814 30.8481 16.9793C30.7195 16.8773 30.6123 16.751 30.5325 16.6075C30.2563 16.11 30.105 16 29.75 16H17.25C16.565 16 16 16.565 16 17.25V29.7475C16 30.1475 16.1925 30.52 16.5087 30.7537L16.6337 30.835C16.7764 30.9163 16.9016 31.0248 17.0023 31.1545C17.103 31.2841 17.1772 31.4324 17.2206 31.5907C17.264 31.749 17.2758 31.9143 17.2553 32.0772C17.2349 32.2401 17.1825 32.3974 17.1013 32.54C17.02 32.6826 16.9114 32.8079 16.7818 32.9086C16.6521 33.0093 16.5039 33.0835 16.3456 33.1269C16.1872 33.1703 16.0219 33.1821 15.859 33.1616C15.6962 33.1411 15.5389 33.0888 15.3963 33.0075C14.8208 32.6802 14.3422 32.2065 14.0091 31.6343C13.6761 31.0622 13.5004 30.412 13.5 29.75V17.25C13.5 15.185 15.185 13.5 17.25 13.5H29.75ZM30.75 24.4825L28.4538 26.7312L26.2675 24.5C26.0544 24.2827 25.7693 24.1506 25.4658 24.1285C25.1622 24.1064 24.8611 24.1959 24.6188 24.38L24.5 24.4825C24.2633 24.7146 24.1285 25.0312 24.1252 25.3626C24.122 25.6941 24.2505 26.0133 24.4825 26.25L26.6687 28.4812L24.375 30.7313C24.1574 30.9444 24.0251 31.2297 24.003 31.5336C23.9809 31.8374 24.0705 32.1388 24.255 32.3812L24.3575 32.5C24.5896 32.7367 24.9062 32.8715 25.2376 32.8748C25.5691 32.878 25.8883 32.7495 26.125 32.5175L28.42 30.2675L30.6075 32.5C30.8206 32.7173 31.1057 32.8494 31.4092 32.8715C31.7128 32.8936 32.0139 32.8041 32.2562 32.62L32.375 32.5175C32.6117 32.2854 32.7465 31.9688 32.7498 31.6374C32.753 31.3059 32.6245 30.9867 32.3925 30.75L30.205 28.5175L32.5 26.2675C32.7173 26.0544 32.8494 25.7693 32.8715 25.4658C32.8936 25.1622 32.8041 24.8611 32.62 24.6188L32.5175 24.5C32.2854 24.2633 31.9688 24.1285 31.6374 24.1252C31.3059 24.122 30.9867 24.2505 30.75 24.4825Z"
                                                fill="#0F64FA" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Order Pending Card -->
                        <div class="dashborad_card bg_light br_8 py_13 px_10 flex-fill" style="min-width: 200px;">
                            <div class="card_content">
                                <span>{{__('Order Pending')}}</span>
                                <h6>{{ $pendingOrders }}</h6>
                            </div>
                            <div class="card_icon">
                                <div class="card_icon_wrapper">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
                                            fill="#FFB100" fill-opacity="0.1" />
                                        <g clip-path="url(#clip0_10511_2938)">
                                            <path
                                                d="M33.4963 16.2125C34.2284 16.4705 34.8624 16.9493 35.3109 17.5829C35.7594 18.2166 36.0001 18.9737 36 19.75V34.75C36 35.7446 35.6049 36.6984 34.9017 37.4017C34.1984 38.1049 33.2446 38.5 32.25 38.5H19.75C18.7554 38.5 17.8016 38.1049 17.0983 37.4017C16.3951 36.6984 16 35.7446 16 34.75V19.75C15.9999 18.9737 16.2406 18.2166 16.6891 17.5829C17.1376 16.9493 17.7716 16.4705 18.5037 16.2125C18.5586 17.5008 19.1089 18.718 20.0399 19.6101C20.9709 20.5023 22.2106 21.0002 23.5 21H28.5C29.7389 21.0001 30.9338 20.5402 31.853 19.7095C32.7722 18.8788 33.3502 17.7364 33.475 16.5037L33.4963 16.2125ZM22.2625 29.75H22.25C21.9314 29.7504 21.625 29.8723 21.3933 30.0911C21.1616 30.3098 21.0222 30.6087 21.0035 30.9267C20.9849 31.2448 21.0883 31.558 21.2928 31.8023C21.4973 32.0466 21.7874 32.2036 22.1038 32.2412L22.2625 32.25C22.594 32.25 22.912 32.1183 23.1464 31.8839C23.3808 31.6495 23.5125 31.3315 23.5125 31C23.5125 30.6685 23.3808 30.3505 23.1464 30.1161C22.912 29.8817 22.594 29.75 22.2625 29.75ZM29.75 29.75H27.25C26.9185 29.75 26.6005 29.8817 26.3661 30.1161C26.1317 30.3505 26 30.6685 26 31C26 31.3315 26.1317 31.6495 26.3661 31.8839C26.6005 32.1183 26.9185 32.25 27.25 32.25H29.75C30.0815 32.25 30.3995 32.1183 30.6339 31.8839C30.8683 31.6495 31 31.3315 31 31C31 30.6685 30.8683 30.3505 30.6339 30.1161C30.3995 29.8817 30.0815 29.75 29.75 29.75ZM22.2625 24.75H22.25C21.9314 24.7504 21.625 24.8723 21.3933 25.0911C21.1616 25.3098 21.0222 25.6087 21.0035 25.9267C20.9849 26.2448 21.0883 26.558 21.2928 26.8023C21.4973 27.0466 21.7874 27.2036 22.1038 27.2413L22.2625 27.25C22.594 27.25 22.912 27.1183 23.1464 26.8839C23.3808 26.6495 23.5125 26.3315 23.5125 26C23.5125 25.6685 23.3808 25.3505 23.1464 25.1161C22.912 24.8817 22.594 24.75 22.2625 24.75ZM29.75 24.75H27.25C26.9185 24.75 26.6005 24.8817 26.3661 25.1161C26.1317 25.3505 26 25.6685 26 26C26 26.3315 26.1317 26.6495 26.3661 26.8839C26.6005 27.1183 26.9185 27.25 27.25 27.25H29.75C30.0815 27.25 30.3995 27.1183 30.6339 26.8839C30.8683 26.6495 31 26.3315 31 26C31 25.6685 30.8683 25.3505 30.6339 25.1161C30.3995 24.8817 30.0815 24.75 29.75 24.75ZM28.5 13.5C29.163 13.5 29.7989 13.7634 30.2678 14.2322C30.7366 14.7011 31 15.337 31 16C31 16.663 30.7366 17.2989 30.2678 17.7678C29.7989 18.2366 29.163 18.5 28.5 18.5H23.5C22.837 18.5 22.2011 18.2366 21.7322 17.7678C21.2634 17.2989 21 16.663 21 16C21 15.337 21.2634 14.7011 21.7322 14.2322C22.2011 13.7634 22.837 13.5 23.5 13.5H28.5Z"
                                                fill="#FFB100" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <!-- Order Completed Card -->
                        <div class="dashborad_card bg_light br_8 py_13 px_10 flex-fill" style="min-width: 200px;">
                            <div class="card_content">
                                <span>{{__('Order completed')}}</span>
                                <h6>{{ $completedOrders }}</h6>
                            </div>
                            <div class="card_icon">
                                <div class="card_icon_wrapper">
                                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0 8C0 3.58172 3.58172 0 8 0H44C48.4183 0 52 3.58172 52 8V44C52 48.4183 48.4183 52 44 52H8C3.58172 52 0 48.4183 0 44V8Z"
                                            fill="#00B289" fill-opacity="0.1" />
                                        <g clip-path="url(#clip0_10511_2947)">
                                            <path
                                                d="M26.014 13.5156C26.9862 13.5157 27.9252 13.8698 28.6552 14.5119L28.8477 14.6931L29.7202 15.5656C29.9597 15.8035 30.2724 15.9537 30.6077 15.9919L30.7765 16.0019H32.0265C33.048 16.0018 34.0308 16.3926 34.7734 17.094C35.5161 17.7955 35.9621 18.7545 36.0202 19.7744L36.0265 20.0019V21.2519C36.0265 21.5894 36.1415 21.9181 36.349 22.1806L36.4615 22.3056L37.3327 23.1781C38.0549 23.8962 38.476 24.8626 38.5101 25.8805C38.5443 26.8983 38.1889 27.8908 37.5165 28.6556L37.3352 28.8481L36.4627 29.7206C36.2249 29.9601 36.0747 30.2728 36.0365 30.6081L36.0265 30.7769V32.0269C36.0266 33.0484 35.6358 34.0312 34.9343 34.7738C34.2329 35.5164 33.2739 35.9625 32.254 36.0206L32.0265 36.0269H30.7765C30.4395 36.027 30.1123 36.1406 29.8477 36.3494L29.7227 36.4619L28.8502 37.3331C28.1322 38.0553 27.1657 38.4763 26.1479 38.5105C25.1301 38.5446 24.1376 38.1893 23.3727 37.5169L23.1802 37.3356L22.3077 36.4631C22.0683 36.2252 21.7556 36.0751 21.4202 36.0369L21.2515 36.0269H20.0015C18.98 36.0269 17.9971 35.6362 17.2545 34.9347C16.5119 34.2332 16.0658 33.2742 16.0077 32.2544L16.0015 32.0269V30.7769C16.0014 30.4399 15.8878 30.1127 15.679 29.8481L15.5665 29.7231L14.6952 28.8506C13.9731 28.1326 13.552 27.1661 13.5179 26.1483C13.4837 25.1305 13.8391 24.138 14.5115 23.3731L14.6927 23.1806L15.5652 22.3081C15.8031 22.0687 15.9533 21.756 15.9915 21.4206L16.0015 21.2519V20.0019L16.0077 19.7744C16.0636 18.7937 16.4783 17.8678 17.1729 17.1732C17.8674 16.4787 18.7933 16.0639 19.774 16.0081L20.0015 16.0019H21.2515C21.5885 16.0018 21.9157 15.8882 22.1802 15.6794L22.3052 15.5669L23.1777 14.6956C23.5494 14.3217 23.9913 14.025 24.4781 13.8225C24.9648 13.62 25.4868 13.5157 26.014 13.5156ZM30.6352 22.6181C30.4008 22.3838 30.0829 22.2521 29.7515 22.2521C29.42 22.2521 29.1022 22.3838 28.8677 22.6181L24.7515 26.7331L23.1352 25.1181L23.0177 25.0144C22.7665 24.8201 22.4507 24.7288 22.1346 24.7589C21.8184 24.789 21.5256 24.9383 21.3156 25.1765C21.1055 25.4147 20.994 25.724 21.0037 26.0414C21.0134 26.3588 21.1436 26.6607 21.3677 26.8856L23.8677 29.3856L23.9852 29.4894C24.2257 29.6759 24.5261 29.7683 24.8298 29.7492C25.1336 29.7301 25.42 29.6008 25.6352 29.3856L30.6352 24.3856L30.739 24.2681C30.9256 24.0276 31.018 23.7273 30.9989 23.4235C30.9798 23.1197 30.8505 22.8334 30.6352 22.6181Z"
                                                fill="#00B289" />
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Third Row: My Cars Section (Left Column) and Empty Right Column (if needed) -->
            <div class="row g-4 mb-4">
                <div class="col-12 col-lg-6">
                    <div class="page_header2 mt_12 mb_12 d-flex justify-content-between align-items-center">
                        <h3 class="page_title">{{__('My Cars')}}</h3>
                        <button class="cmn-btn black-btn openPop">
                            + Add Car
                        </button>
                    </div>

                    <div class="table_wrapper">
                        <table class="table w-100">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Car Name</th>
                                    <th>Registration</th>
                                    <th>Fuel Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @forelse($cars as $car)
                                    <tr>
                                        <td>
                                            {!! render_image_markup_by_attachment_id(
                                                $car->car?->image,'','thumb'
                                            ) !!}
                                        </td>
                                        <td>{{ $car->car?->name }}</td>
                                        <td>{{ $car->registration_number }}</td>
                                        <td>{{ $car->fuelType?->name ?? '-' }}</td>
                                        {{-- <td>
                                            <button class="openPop">
                                                <i class="ti tabler-edit"></i>
                                            </button>
                                        </td> --}}
                                    </tr>
                                @empty
                                    <tr>
                                        <td colspan="5" class="text-center">
                                            No cars added
                                        </td>
                                    </tr>
                                @endforelse
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Right Column - Can be used for additional content if needed -->
                <div class="col-12 col-lg-6">
                    <!-- Additional content can go here -->
                    <!-- For now, it's empty but ready for future widgets -->
                </div>
            </div>

            <!-- Fourth Row: Order List Section (Full Width) -->
            <div class="row">
                <div class="col-12">
                    <h4 class="section-header px_15">{{__('Order List')}}</h4>
                    <div class="table_wrapper px_15">
                        @if($orders->count() > 0)
                            <table class="data-table table w-100 br_4 overflow-hidden">
                                <colgroup>
                                    <col data-dt-column="1" style="width: 235px;">
                                    <col data-dt-column="2" style="width: 371px;">
                                    <col data-dt-column="3" style="width: 179px;">
                                    <col data-dt-column="4" style="width: 259px;">
                                    <col data-dt-column="5" style="width: 177px;">
                                    <col data-dt-column="6" style="width: 115px;">
                                </colgroup>
                                <thead class="table_head">
                                    <tr>
                                        <th>{{__('Order Id')}}</th>
                                        <th>{{__('Address')}}</th>
                                        <th>{{__('Payment')}}</th>
                                        <th>{{__('Date')}}</th>
                                        <th>{{__('Status')}}</th>
                                        <th>{{__('Action')}}</th>
                                    </tr>
                                </thead>
                                <tbody class="table_body">
                                    @foreach($orders as $order)
                                        <tr>
                                            <td>ID: {{ $order->id}}</td>
                                            <td>
                                                @if($order->orderLocations)
                                                    {{ Str::limit($order->orderLocations->address ?? 'N/A', 50) }}
                                                    @if($order->orderLocations->post_code)
                                                        , {{ $order->orderLocations->post_code }}
                                                    @endif
                                                @elseif($order->outletLocation)
                                                    {{ Str::limit($order->outletLocation->address ?? 'N/A', 50) }}
                                                    @if($order->outletLocation->post_code)
                                                        , {{ $order->outletLocation->post_code }}
                                                    @endif
                                                @else
                                                    N/A
                                                @endif
                                            </td>
                                            <td class="table_payment {{ $order->payment_status == 1 ? 'complete' : 'pending' }}">
                                                {{ $order->payment_status == 1 ? 'Complete' : 'Pending' }}
                                            </td>
                                            <td>
                                                <i class="fa-regular fa-pen-to-square"></i>
                                                <span>{{ \Carbon\Carbon::parse($order->date ?? $order->created_at)->format('d-m-Y') }}</span>
                                                <span>{{ \Carbon\Carbon::parse($order->created_at)->format('h:iA') }}</span>
                                            </td>
                                            <td>
                                                <span class="table_status
                                                    @if($order->status == 0) pending
                                                    @elseif($order->status == 1) in-progress
                                                    @elseif($order->status == 2) complete
                                                    @elseif($order->status == 3) complete
                                                    @elseif($order->status == 4) cancelled
                                                    @endif">
                                                    @if($order->status == 0) Pending
                                                    @elseif($order->status == 1) Active
                                                    @elseif($order->status == 2) Completed
                                                    @elseif($order->status == 3) Delivered
                                                    @elseif($order->status == 4) Cancelled
                                                    @else Unknown
                                                    @endif
                                                </span>
                                            </td>
                                            <td class="action_icon">
                                                <a href="{{ route('order.details', $order->id) }}" title="View Order">
                                                    <i class="icon-base ti tabler-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>

                            <!-- Pagination -->
                            <div class="pagination mt-3" id="tablePagination">
                                <x-frontend.dashboard-pagination.pagination :paginator="$orders" />
                            </div>
                        @else
                            <div class="alert alert-info text-center p-4">
                                <i class="fa-solid fa-info-circle fa-2x mb-3"></i>
                                <p class="mb-0">{{__('No orders found. Start ordering to see your order history!')}}</p>
                            </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="popupContainer" data-popup-url="{{ route('client.car.select.popup') }}">
    </div>

    @include('frontend.user.client.delete-account-modal')
    @include('frontend.user.client.myCar.merge_confirm_modal')

@endsection

@section('scripts')
    @if(session('car_merge_conflict'))
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                var carConflictModal = new bootstrap.Modal(document.getElementById('car_conflict_modal'));
                carConflictModal.show();
            });
        </script>
    @endif
    @if(request('openModal') === 'delete')
        <script>
            document.addEventListener("DOMContentLoaded", function () {
                var deleteModal = new bootstrap.Modal(document.getElementById('delete_modal'));
                deleteModal.show();
            });

        </script>
    @endif

    <script>
        let hour = new Date().getHours();
        let greeting = hour < 12 ? "Good Morning" :
            hour < 18 ? "Good Afternoon" : "Good Evening";
        document.getElementById("greeting").innerText = greeting;
    </script>
@endsection