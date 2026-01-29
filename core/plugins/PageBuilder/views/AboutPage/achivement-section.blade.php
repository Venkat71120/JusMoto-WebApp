<section class="achivment-section pat-60 pab-120">
    <div class="custom-container">
        <div class="achivment-wraper">
            @foreach (  $repeater_data['achivement_item_number_'] as  $key => $item)
                @if ($key < 3)
                    <div class="single-achivment">
                        <div class="icon-part">
                            {!! render_image_markup_by_attachment_id($repeater_data['achivement_item_image_'][$key], '', 'thumb') !!}
                        </div>
                        <div class="text-part">
                            <span class="title-3 fw_semibold">
                               {{$repeater_data['achivement_item_number_'][$key]}}{{__('+')}}
                            </span>
                            <span class="fw_medium">
                               {{$repeater_data['achivement_item_title_'][$key]}}
                            </span>
                        </div>
                    </div>
                @endif
            @endforeach
        </div>
    </div>
</section>
