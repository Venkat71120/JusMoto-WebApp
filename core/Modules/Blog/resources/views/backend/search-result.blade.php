
<table class="DataTable_activation">
    <thead>
    <tr>
        <th>{{__('ID')}}</th>
        <th>{{__('Image')}}</th>
        <th>{{__('Blog Title')}}</th>
        <th>{{__('Blog Category')}}</th>
        <th>{{__('Status (change by admin)')}}</th>
        <th>{{__('Create Date')}}</th>
        <th>{{__('Action')}}</th>
    </tr>
    </thead>
    <tbody>
    @foreach($all_blogs as $blog)
        <tr>
            <td>#000{{ $blog->id }}</td>
            <td><span class="img_100">{!! render_image_markup_by_attachment_id($blog->image) !!}</span></td>
            <td>{{ $blog->title }}</td>
            <td>{{ $blog?->category?->name }}</td>
            <td>
                @if($blog->status === 0)
                    <span class="alert alert-warning">{{__('Inactive')}}</span>
                @else
                    <span class="alert alert-success" >{{__('Active')}}</span>
                @endif
            </td>
            <td>
                {{ $blog->created_at->toFormattedDateString() }}
            </td>
            <td>
                <div class="multiple_action_buttons_new d-flex gap-2 flex-wrap">
                    @can('blog-edit')
                        <x-icon.edit-icon :url="route('admin.blog.edit',$blog->id)"/>
                    @endcan
                    @can('blog-delete')
                        <x-popup.delete-popup :url="route('admin.blog.delete',$blog->id)"/>
                    @endcan
                </div>

            </td>
        </tr>
    @endforeach
    </tbody>
</table>
<div class="custom_pagination mt-5 d-flex justify-content-end">
    {{ $all_blogs->links() }}
</div>
