
@php
    $img_tag = render_image_markup_by_attachment_id($background_image,'','thumb');
    //extract src only
    preg_match('/src="([^"]+)"/', $img_tag, $matches);
   $background_image_url = $matches[1];
@endphp
<section class="fetured-service-section bg-image-use  pab-120 pat-230"
         style="background-image: url('{{$background_image_url}}');">
    <div class="custom-container">
        <div class="about-our-service">
            <div class="content-with-image-section service-expertise-wraper">
                <div class="text-part">
                    <h2 class="title-2 fw_semibold">
                       {{$title}}
                    </h2>
                    <p class="pera">
                       {{$subtitle}}
                    </p>
                    <ul class="custom-ul">
                        @foreach ($repeater_data['feature_item_'] as $key => $feature_item)
                            <li>{{$repeater_data['feature_item_'][$key]}}</li>
                        @endforeach

                    </ul>
                    <div class="btn-wraper">
                        <a href="{{$button_link_one}}" class="cmn-btn primary-btn">{{$button_title_one}}</a>
                    </div>
                </div>
                <div class="image-part">
                    {!! render_image_markup_by_attachment_id($about_image, '', 'thumb') !!}
                    <div class="satisfied-customer-counter">
                        <span class="count">{{$satisfied_customer_count}}{{__('+')}}</span>
                        <span class="text">{{$satisfied_customer_text}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
