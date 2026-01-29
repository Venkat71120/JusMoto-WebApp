@extends('frontend.user.layout.master')

@section('title','Address List')
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header d-flex justify-content-between gap-4 flex-wrap mb-4">
                <h3 class="page_title mb_12">{{__('Address List')}}</h3>
                <div class="d-flex align-items-center gap-4">
                    <form action="{{route('client.all.address')}}" method="GET" class="d-flex align-items-center gap-2">
                        <input type="search" name="string_search" class="custom_input py-2" placeholder="Search" value="{{ request('string_search') }}">
                        <button type="submit" class="btn_primary  py-2">{{__('Search')}}</button>
                    </form>
                    <a href="{{route('client.address.create')}}" class="btn_primary text-decoration-none py-2"><i class="ti icone-base tabler-plus"></i>{{__('Add Address')}}</a>
                </div>
            </div>
            <div class="table_wrapper">
                <table class="data-table-refund table w-100 br_4 overflow-hidden">
                    <thead class="table_head">
                    <tr>
                        <th>{{__('Address Id')}}</th>
                        <th>{{__('Title')}}</th>
                        <th>{{__('Type')}}</th>
                        <th>{{__('Address')}}</th>
                        <th>{{__('State')}}</th>
                        <th>{{__('City')}}</th>
                        <th>{{__('Area')}}</th>
                        <th>{{__('Action')}}</th>
                    </tr>
                    </thead>
                    <tbody class="table_body">
                    @forelse($all_locations as $location)
                        <tr>
                            <td>{{$location->id}}</td>
                            <td>{{ \Illuminate\Support\Str::limit($location->title ?? 'N/A', 20, '...') }}</td>
                            @php
                                if($location->type === 0)
                                 {
                                     $type="Home";
                                 }else if($location->type === 1)
                                 {
                                     $type="Office";
                                 }
                            @endphp
                            <td>{{$type}}</td>
                            <td>{{ \Illuminate\Support\Str::limit($location->address ?? 'N/A', 20, '...') }}</td>
                            <td>{{$location->state?->state ?? 'N/A'}}</td>
                            <td>{{$location->city?->city ?? 'N/A'}}</td>
                            <td>{{$location->area?->area ?? 'N/A'}}</td>
                            <td class="action_icon">
                                <a href="{{route('client.address.edit',[$location->id])}}"><i class="icon-base ti tabler-edit"></i></a>
                                <form action="{{route('client.address.delete',[$location->id])}}" method="POST" style="display:inline;">
                                    @csrf
                                    <button type="submit" class="btn p-0">
                                        <i class="icon-base ti tabler-trash"></i>
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="8" class="text-center"> {{ __("No address available yet.Add a new address to get started.") }}</td>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
            @if($all_locations->count()>0)
                <div class="pagination" id="tablePaginationRefund">
                    <x-frontend.dashboard-pagination.pagination :paginator="$all_locations" />
                </div>
            @endif

        </div>
    </div>
@endsection
