@php
    $img_tag = render_image_markup_by_attachment_id($background_image,'','thumb');
    //extract src only
    preg_match('/src="([^"]+)"/', $img_tag, $matches);
   $background_image_url = $matches[1];
@endphp
<section class="client-review-section pat-120 pab-120 bg-image-use"
         style="background-image: url('{{$background_image_url}}');">
    <div class="custom-container">
        <div class="client-review-wraper">
            <div class="client-review-title-part-wraper">
                <div class="top-part">
                    <h2 class="title-2 fw_semibold">{{$title}}</h2>
                    <div class="user-trust-avatar mt-4">
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
                        <div class="avatar-user-trust-text">
                            {{$trusted_text}}
                        </div>
                    </div>
                </div>
                <div class="bottom-part">
                    <div class="review-slider-btn d-flex gap-3"></div>
                </div>
            </div>
            <div class="review-slider-wraper">
                <div class=" global-slick-init" data-arrows="true"
                     data-prevarrow="<span class='slider-btn next-arrow'><i class='icon-base ti tabler-arrow-left'></i></span>"
                     data-nextarrow="<span class='slider-btn next-arrow'><i class='icon-base ti tabler-arrow-right'></i></span>"
                     data-appendarrows=".review-slider-btn">
                    @if($all_reviews->count()>0)
                        @foreach($all_reviews as $review)
                             <div class="review-slider-card">
                                <div class="reviewer-part">
                                    <div class="reviewer-image">
                                        {!! render_image_markup_by_attachment_id($review->reviewer?->image,'','thumb') !!}
                                    </div>
                                    <div class="reviewer-text">
                                        <h4 class="fw_semibold subtitle-2">
                                           {{$review->reviewer?->fullname}}
                                        </h4>
                                        <p class="designation fs-md">
                                            {{ $review->reviewer?->userServiceCategory->first()?->category?->name ?? '' }}
                                        </p>
                                    </div>
                                </div>
                                <div class="review-text subtitle-2 paragraph-text-two">
                                   {{$review->message}}
                                </div>
                                <div class="review-rating yellow-text-two d-flex gap-2 fs-md">
                                    @php
                                        $rating=(int)$review->rating;
                                    @endphp
                                    @for($i=1; $i<=$rating; $i++)
                                        <i class="fas fa-star"></i>
                                    @endfor
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
            </div>
        </div>
    </div>
</section>
