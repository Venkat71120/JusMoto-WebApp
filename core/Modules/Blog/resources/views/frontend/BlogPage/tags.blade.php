<div class="card-box tag-card">
    <h3 class="fs-md fw_semibold">{{ __('Popular Tags') }}</h3>
    <div class="tags-wrapper">
        @if($tags->count() > 0)
            @foreach($tags as $tag)
                <a href="{{ route('frontend.blog.list', ['tag' => $tag->tag_name]) }}">
                    <span class="tag tag-filter" data-tag="{{ $tag->tag_name }}">{{ $tag->tag_name }}</span>
                </a>
            @endforeach
        @else
            <div class="alert-secondary">{{ __('No tags found.') }}</div>
        @endif
    </div>
</div>
