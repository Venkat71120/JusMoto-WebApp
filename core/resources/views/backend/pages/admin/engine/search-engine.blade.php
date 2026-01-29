<table class="dataTablesExample">
    <thead>
    @can('admin-car-bulk-delete')
        <th class="no-sort">
            <div class="mark-all-checkbox">
                <input type="checkbox" class="all-checkbox">
            </div>
        </th>
    @endcan
    <th>{{__('ID')}}</th>
    <th>{{__('Name')}}</th>
    <th>{{__('Action')}}</th>
    </thead>
    <tbody>
    @foreach($all_engines as $data)
        <tr>
            @can('admin-engine-bulk-delete')
                <td>
                    <x-bulk-action.bulk-delete-checkbox :id="$data->id"/>
                </td>
            @endcan
            <td>{{$data->id}}</td>
           
            <td>{{$data->name}}</td>

            <!--Action -->
            <td class="p-1 text-center new_style_added">
                {{-- Make Featured --}}
               <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                   @can('admin-engine-edit')
                       <x-icon.edit-icon :url="route('admin.engine.edit',$data->id)"/>
                   @endcan
                   @can('admin-engine-delete')
                       <x-popup.delete-popup :url="route('admin.engine.delete',$data->id)"/>
                   @endcan
               </div>
            </td>
        </tr>
    @endforeach
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    {{ $all_engines->links() }}
</div>
