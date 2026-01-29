<section class="expert-member-section pat-120 pab-60">
    <div class="custom-container">
        <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
            <h2 class="title-2 fw_semibold">
                {{ $title }}
            </h2>
        </div>

        @php
            $members = $repeater_data['expert_member_name_'] ?? [];
            $totalMembers = count($members);
        @endphp

        {{-- If more than 4 → SLIDER --}}
        @if ($totalMembers > 4)
            <div class="member-card-wraper sliderContains">
                <div class="service-position">
                    <div class="slider-btn-wrapper"></div>

                    <div class="global-slick-init"
                         data-slidestoshow="4"
                         data-slidestoscroll="1"
                         data-arrows="true"
                         data-infinite="true"
                         data-appendarrows=".slider-btn-wrapper"
                         data-prevarrow='<span class="slider-btn style3 position-left-btn"><i class="icon-base ti tabler-arrow-left icon-30px"></i></span>'
                         data-nextarrow='<span class="slider-btn style3 position-right-btn"><i class="icon-base ti tabler-arrow-right icon-30px"></i></span>'>

                        @foreach ($members as $key => $item)

                            <div class="member-card">
                                <div class="image-wraper">
                                    {!! render_image_markup_by_attachment_id($repeater_data['expert_member_image_'][$key], '', 'thumb') !!}
                                </div>
                                <div class="text-part">
                                    <h4 class="name fw_semibold subtitle-4">
                                        {{ $item }}
                                    </h4>
                                    <div class="designation">
                                        {{ $repeater_data['expert_member_designation_'][$key] ?? '' }}
                                    </div>
                                </div>
                            </div>

                        @endforeach

                    </div>
                </div>
            </div>

            {{-- If 4 or less → NORMAL GRID --}}
        @else
            <div class="member-card-wraper">
                <div class="row g-4">
                    @foreach ($members as $key => $item)
                        <div class="col-lg-3 col-sm-6 col-md-6 col-12">
                            <div class="member-card">
                                <div class="image-wraper">
                                    {!! render_image_markup_by_attachment_id($repeater_data['expert_member_image_'][$key], '', 'thumb') !!}
                                </div>
                                <div class="text-part">
                                    <h4 class="name fw_semibold subtitle-4">
                                        {{ $item }}
                                    </h4>
                                    <div class="designation">
                                        {{ $repeater_data['expert_member_designation_'][$key] ?? '' }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        @endif

    </div>
</section>
