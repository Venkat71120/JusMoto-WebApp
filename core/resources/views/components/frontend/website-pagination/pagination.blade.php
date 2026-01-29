@props(['paginator'])

@if ($paginator->hasPages())
    <div class="pagination-container"> {{-- changed wrapper class --}}
        {{-- Previous Page --}}
        @if ($paginator->onFirstPage())
            <a href="#" class="pagination-link disabled"><      {{__('Previous')}} </a>
        @else
            <a href="{{ $paginator->previousPageUrl() }}" class="pagination-link"><      {{__('Previous')}} </a>
        @endif

        <ul class="pagination"> {{-- changed UL class --}}
            @foreach ($paginator->getUrlRange(1, $paginator->lastPage()) as $page => $url)
                <li class="pagination-item {{ $page == $paginator->currentPage() ? 'active' : '' }}">
                    <a href="{{ $url }}" class="pagination-link" data-page="{{ $page }}">{{ $page }}</a>
                </li>
            @endforeach
        </ul>

        {{-- Next Page --}}
        @if ($paginator->hasMorePages())
            <a href="{{ $paginator->nextPageUrl() }}" class="pagination-link">{{__('Next')}}   ></a>
        @else
            <a href="#" class="pagination-link disabled">{{__('Next')}}   ></a>
        @endif
    </div>
@endif
