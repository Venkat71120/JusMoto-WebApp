<div class="custom_pagination mt-4 d-flex justify-content-between gap-4 flex-wrap" id="tablePagination">

    <div class="entries-wraper">
        {{ $paginator->firstItem() }} - {{ $paginator->lastItem() }} of {{ $paginator->total() }}
    </div>

    <ul class="pagination custom-ul">

        @php
            $current = $paginator->currentPage();
            $last = $paginator->lastPage();
            $query = request()->except('page');
            $queryString = http_build_query($query);

            function pageUrl($paginator, $page, $queryString) {
                return $paginator->url($page) . ($queryString ? '&' . $queryString : '');
            }

            if ($current >= $last - 2) {
                $start = max($last - 2, 1);
                $end = $last;
            } else {
                $start = $current;
                $end = min($current + 2, $last);
            }
        @endphp

        @if ($paginator->onFirstPage())
            <li class="page-prev disabled">
                <span class="page-link"><i class="icon-base ti tabler-chevron-left"></i></span>
            </li>
        @else
            <li class="page-prev">
                <a class="page-link" href="{{ pageUrl($paginator, $current - 1, $queryString) }}">
                    <i class="icon-base ti tabler-chevron-left"></i>
                </a>
            </li>
        @endif

        @if ($start > 2)
            <li class="page-item">
                <a class="page-link" href="{{ pageUrl($paginator, 1, $queryString) }}">1</a>
            </li>
            <li class="page-item disabled"><span class="page-link">...</span></li>
        @endif

        @for ($i = $start; $i <= $end; $i++)
            <li class="page-item">
                <a class="page-link {{ $i == $current ? 'active' : '' }}"
                   href="{{ pageUrl($paginator, $i, $queryString) }}">
                    {{ $i }}
                </a>
            </li>
        @endfor

        @if ($end < $last - 1 && $current < $last - 2)
            <li class="page-item disabled"><span class="page-link">...</span></li>
        @endif

        @if ($end < $last)
            <li class="page-item">
                <a class="page-link {{ $current == $last ? 'active' : '' }}"
                   href="{{ pageUrl($paginator, $last, $queryString) }}">
                    {{ $last }}
                </a>
            </li>
        @endif

        @if ($paginator->hasMorePages())
            <li class="page-item">
                <a class="page-link" href="{{ pageUrl($paginator, $current + 1, $queryString) }}">
                    <i class="icon-base ti tabler-chevron-right"></i>
                </a>
            </li>
        @else
            <li class="page-item disabled">
                <span class="page-link"><i class="icon-base ti tabler-chevron-right"></i></span>
            </li>
        @endif

    </ul>
</div>
