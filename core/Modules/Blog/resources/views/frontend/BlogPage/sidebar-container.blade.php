<div class="sidebar-container">
    <h2 class="categories-title fw_semibold subtitle-4">{{__('Categories')}}</h2>
    <div class="category-list">
        @if($categories->count() > 0)
            @foreach($categories as $category)
                <a href="{{ route('frontend.blog.list', ['category' => $category->slug]) }}">
                    <div class="category-item category-filter">
                        <span class="category-name fw_medium">{{ $category->name }}</span>
                        <span class="category-count fw_medium">({{ $category->blogs_count }})</span>
                    </div>
                </a>
            @endforeach
        @else
            <div class="alert alert-secondary">{{ __('No categories found.') }}</div>
        @endif
    </div>
</div>
