@php
    $img_tag = render_image_markup_by_attachment_id($background_image,'','thumb');
    //extract src only
    preg_match('/src="([^"]+)"/', $img_tag, $matches);
   $background_image_url = $matches[1];
@endphp
<section class="ourmission-vision pat-120 pab-120 bg-image-use" style="background-image: url('{{$background_image_url}}') ;">
    <div class="custom-container">
        <div class="mission-vision-wraper">
            <div class="row align-items-center justify-between">
                <div class="col-lg-5">
                    <div class="text-part">
                        <h2 class="title-2 fw_semibold">{{$mission_title}}</h2>
                        <div class="des">
                            <p>
                                {{$mission_description}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="img-wraper">
                        {!! render_image_markup_by_attachment_id($mission_image, '', 'thumb') !!}
                    </div>
                </div>
            </div>
        </div>
        <div class="mission-vision-wraper">
            <div class="row flex flex-row-reverse  align-items-center justify-between">
                <div class="col-lg-5">
                    <div class="text-part">
                        <h2 class="title-2 fw_semibold">{{$vision_title}}</h2>
                        <div class="des">
                            <p>
                                {{$vision_description}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="img-wraper">
                        {!! render_image_markup_by_attachment_id($vision_image, '', 'thumb') !!}
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
