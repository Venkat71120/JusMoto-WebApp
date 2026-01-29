<table class="dataTablesExample">
    <thead>
    @can('admin-outlet-bulk-delete')
        <th class="no-sort">
            <div class="mark-all-checkbox">
                <input type="checkbox" class="all-checkbox">
            </div>
        </th>
    @endcan
    <th>{{__('ID')}}</th>
    <th>{{__('Name')}}</th>
    <th>{{__("Address") }}</th>
    <th>{{__("State") }}</th>
    <th>{{ __("Status") }}</th>
    <th>{{__('Action')}}</th>
    </thead>
    <tbody>
    @foreach($all_outlets as $outlet)
        <tr>
            @can('admin-outlet-bulk-delete')
                <td>
                    <x-bulk-action.bulk-delete-checkbox :id="$outlet->id"/>
                </td>
            @endcan
            <td>{{$outlet->id}}</td>
            <td>{{$outlet->name}}</td>
            <td>{{$outlet->address}}</td>
            <td>{{$outlet->state->state}}</td>
             <!--status -->
             <td>
                @if($outlet->status==1)
                    <span class="alert alert-success">{{__('Approved')}}</span>
                @else
                    <span class="alert alert-warning">{{__('Pending')}}</span>
                @endif
                @can('outlet-status-change')
                  <span class="my-2"><x-status.status-change :url="route('admin.outlet.status.change',$outlet->id)"/></span>
                @endcan
            </td>
            <!--Action -->
            <td class="p-1 text-center new_style_added">
                {{-- Make Featured --}}
               <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                   @can('admin-outlet-edit')
                       <x-icon.edit-icon :url="route('admin.outlet.edit',$outlet->id)"/>
                   @endcan
                   <x-icon.view-icon :url="route('admin.outlet.details',$outlet->id)"/>
                   @can('admin-brand-delete')
                       <x-popup.delete-popup :url="route('admin.outlet.delete',$outlet->id)"/>
                   @endcan
               </div>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    {{ $all_outlets->links() }}
</div>
