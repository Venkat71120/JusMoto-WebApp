<form class="d-inline-block" action="{{$action}}" method="post">
    @csrf
    <input type="hidden" name="item_id" value="{{$id}}">
    <button type="submit" title="clone this to new draft" class="btn btn-xs btn-secondary btn-sm mb-3 mr-1"><i class="las la-copy"></i></button>
</form>
