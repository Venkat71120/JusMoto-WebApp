<section class="why-chose-us pat-120 pab-60">
    <div class="custom-container">
        <div class="why-chose-wraper">
            <div class="car-pic-wraper d-sm-none d-md-none d-lg-block d-none">
                {!! render_image_markup_by_attachment_id($central_car_image, '', 'thumb') !!}
            </div>
            <div class="top-text-part ">
                <h2 class="title-2 fw_semibold mw-400">
                   {{$title}}
                </h2>

                <div class="desp mw-500">
                    <p class="">
                        {{$subtitle}}
                    </p>
                </div>
            </div>
            <div
                class="bottom-list-wraper d-flex flex-column gap-4 flex-sm-column flex-md-row flex-lg-row justify-content-between">
                    {{-- Left Column --}}
                    <div class="why-chose-list-left mw-500 w-100">
                        @foreach (  $repeater_data['why_choose_us_title_'] as  $key => $item)
                            @if ($key < 2)
                                <div class="why-chose-list-item mw-400 {{ $key == 1 ? 'py-sm-5' : '' }}">
                                    <div class="icon-wraper">
                                        @if(!empty( $repeater_data['why_choose_us_icon_'][$key]))
                                            {!! render_image_markup_by_attachment_id( $repeater_data['why_choose_us_icon_'][$key],'','tiny') !!}
                                        @endif
                                    </div>
                                    <div class="text-wraper">
                                        <h4 class="fw_semibold subtitle-2">{{ $repeater_data['why_choose_us_title_'][$key] ?? '' }}</h4>
                                        <p class="des mt-2">{{$repeater_data['why_choose_us_description_'][$key] ?? '' }}</p>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>

                    {{-- Right Column --}}
                    <div class="why-chose-list-right mw-500 w-100">
                        @foreach ($repeater_data['why_choose_us_title_'] as  $key => $item)
                            @if ($key >= 2)
                                <div class="why-chose-list-item mw-400 {{ $key == 2 ? 'pb-sm-5 text-end' : '' }}">
                                    <div class="icon-wraper">
                                        @if(!empty( $repeater_data['why_choose_us_icon_'][$key]))
                                            {!! render_image_markup_by_attachment_id( $repeater_data['why_choose_us_icon_'][$key],'','tiny') !!}
                                        @endif
                                    </div>
                                    <div class="text-wraper">
                                        <h4 class="fw_semibold subtitle-2">{{ $repeater_data['why_choose_us_title_'][$key] ?? '' }}</h4>
                                        <p class="des mt-2">{{$repeater_data['why_choose_us_description_'][$key] ?? '' }}</p>
                                    </div>
                                </div>
                            @endif
                        @endforeach
                    </div>
            </div>
        </div>
    </div>
</section>
