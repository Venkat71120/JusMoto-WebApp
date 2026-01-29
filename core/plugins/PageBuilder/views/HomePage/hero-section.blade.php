@php
    $img_tag = render_image_markup_by_attachment_id($background_image,'','thumb');
    //extract src only
    preg_match('/src="([^"]+)"/', $img_tag, $matches);
   $background_image_url = $matches[1];
@endphp
<section class="banner-area hero-section"
         style="background-image: linear-gradient(#0000004D, #0000004D), url('{{$background_image_url}}') ;">
    <div class="custom-container">
        <div class="banner-text-part-wraper">
            <h1 class="main-title white-text">
                {{$title}}
            </h1>
            <p class="white-shade-text fw_medium fs-md">
                {{$subtitle}}
            </p>
            <div class="banner-bottom-part">
                <div class="banner-btn-wraper">
                    <a href="{{$button_link_one}}" class="cmn-btn primary-btn">{{$button_title_one}}</a>
                </div>
                <div class="banner-trusted-user-part">
                    <div class="user-trust-avatar">
                        <div class="image-wraper">
                            @foreach ($repeater_data_trusted_user['trusted_user_image_'] as $trusted_user_image)
                                <span class="image">
                                    {!! render_image_markup_by_attachment_id($trusted_user_image, '', 'thumb') !!}
                                </span>
                            @endforeach

                            <span class="image white-text">
                                <i class="fas fa-plus"></i>
                            </span>
                        </div>
                        <div class="avatar-user-trust-text white-text">
                            {{$trusted_text}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="custom-container">
        <div class="fetured-section-wraper">
            @foreach ($repeater_data['feature_title_'] as $key => $feature_title)
                <div class="featured-card">
                    <div class="featured-card-icon">
                        <i class="{!! $repeater_data['feature_icon_'][$key] !!}"></i>
                    </div>
                    <div class="featured-card-text">
                        <h5 class="featured-card-title fs-lg">
                            {{$repeater_data['feature_title_'][$key]}}
                        </h5>
                        <p class="featured-card-subtitle threeline">
                            {{$repeater_data['feature_description_'][$key]}}
                        </p>
                    </div>
                </div>
            @endforeach
        </div>
    </div>

</section>

