<table class="dataTablesExample">
    <thead>
    <th>{{__('ID')}}</th>
    <th>{{__('Admin')}}</th>
    <th>{{__('Reviwer')}}</th>
    <th>{{__('Item')}}</th>
    <th>{{__('Type')}}</th>
    <th>{{__('Rating')}}</th>
    <th>{{__('Status')}}</th>
    <th>{{__('Action')}}</th>
    </thead>
    <tbody>
    @foreach($all_reviews as $data)
        <tr>
            <td>{{$data->id}}</td>
            <td>{{$data->admin?->name}}</td>
            <td>{{$data->reviewer?->first_name ?? $data->reviewer?->username}}</td>
            <td>{{$data->service?->title}}</td>
            @php
                $flag="";
                if($data->service?->type == 0)
                {
                    $flag = __('Service');
                }
                elseif($data->service?->type == 1)
                {
                    $flag = __('Product');
                }
            @endphp
            <td>{{$flag}}</td>
            <td>{{$data->rating}}</td>
            <td>
                <span class="me-2"><x-status.review-status :status="$data->status"/></span>
                <span><x-status.status-change :url="route('admin.review.status',$data->id)"/></span>
            </td>
            <!--Action -->
            <td class="p-1 text-center new_style_added">
                {{-- Make Featured --}}
               <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                   <x-icon.view-icon :url="route('admin.review.details',$data->id)"/>
                   @can('admin-review-delete')
                       <x-popup.delete-popup :url="route('admin.review.delete',$data->id)"/>
                   @endcan
               </div>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    {{ $all_reviews->links() }}
</div>
