<section class="ready-to-get-service-section pat-60 pab-120">
    <div class="custom-container">
        <div class="get-service-section-wraper">
            <div class="text-part">
                <div>
                    <h2 class="title-2 fw_semibold white-text">
                        {{ $section_title }}
                    </h2>
                    <p class="para">
                        {{ $section_description }}
                    </p>
                    <div class="btn-wraper">
                        <a href="{{ $button_url }}" class="cmn-btn black-btn">{{ $button_text }}</a>
                    </div>
                </div>
            </div>
            <div class="vedio-part">
                @if($has_video)
                    <div class="play-control">
                        <i class="fas fa-play"></i>
                    </div>
                    <video id="myVideo" controls>
                        <source src="{{ $video_url }}" type="video/mp4">
                        {{__('Your browser does not support the video tag.')}}
                    </video>
                @else
                    <div class="play-control">
                        <i class="fas fa-play"></i>
                    </div>
                    <video id="myVideo" controls>
                        <source src="" type="video/mp4">
                       {{__('Your browser does not support the video tag.')}}
                    </video>
                @endif
            </div>
        </div>
    </div>
</section>
