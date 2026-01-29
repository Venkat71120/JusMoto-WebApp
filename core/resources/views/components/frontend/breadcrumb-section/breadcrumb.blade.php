<section class="breadcrumb-section bg-image-use"
         style="background-image: linear-gradient(#000000B2, #000000B2), url('{{ asset('assets/frontend/images/bradecrumb.png') }}');">
    <div class="custom-container">
        <div class="breadcrumb-content text-center">
            <h4 class="subtitle-1 fw_semibold white-text">
                {{ $title }}
            </h4>

            <ul class="breadcrumb-list white-text mt-2">
                @foreach($items as $item)
                    <li>
                        @if(!empty($item['url']))
                            <a href="{{ $item['url'] }}">{{ $item['label'] }}</a>
                        @else
                            <span>{{ $item['label'] }}</span>
                        @endif
                    </li>
                @endforeach
            </ul>

        </div>
    </div>
</section>
