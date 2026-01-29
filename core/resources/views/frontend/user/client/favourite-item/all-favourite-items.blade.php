@extends('frontend.user.layout.master')

@section('site-title','All Favourite Services')
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15">
            <div class="page_header">
                <h3 class="page_title mb_12">{{__('Favourite Services List')}}</h3>
            </div>
            <div class="table_wrapper">
                <table class="data-table-refund table w-100 br_4 overflow-hidden">
                    <thead class="table_head">
                    <tr>
                        <th>{{__('Id')}}</th>
                        <th>{{__('Title')}}</th>
                        <th>{{__('Category')}}</th>
                        <th>{{__('Total Sold')}}</th>
                        <th>{{__('Price')}}</th>
                        <th>{{__('Action')}}</th>
                    </tr>
                    </thead>
                    <tbody class="table_body">
                    @forelse($favoriteItems as $item)
                        <tr>
                            <td>{{$item->id}}</td>
                            <td>{{\Illuminate\Support\Str::limit($item->title ?? "N/A", 50, '...') }}</td>
                            <td>{{$item->category_name ?? "N/A"}}</td>
                            <td>{{$item->sold ?? 0}}</td>
                            <td>{{$item->price ?? 0}}</td>
                            <td>
                                <span  class="action_icon d-flex gap-2">
                                    <a href="#"><i class="icon-base ti tabler-eye"></i></a>
                                     <span class="fvt-icon favorite-btn {{ auth()->user()?->favoriteItems?->contains('item_id', $item->item_id) ? 'selected' : '' }}" data-id="{{ $item->item_id }}">
                                            <i class="fa-solid fa-heart"></i>
                                     </span>
                                </span>
                            </td>

                        </tr>
                    @empty
                        <tr>
                            <td colspan="6" class="text-center">{{__('No Favourite Item found')}}</td>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
            @if($favoriteItems->count()>0)
              <div class="pagination" id="tablePaginationFavourite">
                  <x-frontend.dashboard-pagination.pagination :paginator="$favoriteItems" />
              </div>
            @endif
        </div>
    </div>
@endsection
