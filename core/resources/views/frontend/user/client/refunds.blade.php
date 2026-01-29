@extends('frontend.user.layout.master')

@section('site-title','Refunds')
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header">
                <h3 class="page_title mb_12">{{__('Refunds')}}</h3>
            </div>
            <div class="table_wrapper">
                <table class="data-table-refund table w-100 br_4 overflow-hidden">
                    <thead class="table_head">
                    <tr>
                        <th>{{__('Order Id')}}</th>
                        <th>{{__('Request Date')}}</th>
                        <th>{{__('Request Status')}}</th>
                        <th>{{__('Refund Amount')}}</th>
                        <th>{{__('Action')}}</th>
                    </tr>
                    </thead>
                    <tbody class="table_body">
                    @forelse($refunds as $refund)
                        <tr>
                            <td>ID: {{ $refund->order_id }}</td>
                            <td>
                                <i class="icon-base ti tabler-calendar"></i>
                                <span>{{ $refund->created_at->format('d-m-Y') }}</span>
                                <span>{{ $refund->created_at->format('h:i A') }}</span>
                            </td>
                            <td>
                                <span class="table_status {{ $refund->status_class }}">
                                    {{ $refund->status_label }}
                                </span>
                            </td>
                            <td>${{ number_format($refund->amount, 2) }}</td>
                            <td class="action_icon">
                                <a href="{{ route('refunds.show', $refund->id) }}" class="unset_all">
                                    <i class="icon-base ti tabler-eye"></i>
                                </a>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="text-center">{{__('No refund records found')}}</td>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
            @if($refunds->count()>0)
               <div class="pagination" id="tablePaginationRefund">
                   <x-frontend.dashboard-pagination.pagination :paginator="$refunds" />
               </div>
            @endif
        </div>
    </div>
@endsection
