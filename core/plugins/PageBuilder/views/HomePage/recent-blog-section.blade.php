<section class="blog-section pat-120 pab-60">
    <div class="custom-container">
        <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
            <h2 class="title-2 fw_semibold">
                {{$title}}
            </h2>
            <div class="btn-wraper">
                <a href="{{$button_link_one}}" class="cmn-btn primary-btn">{{$button_title_one}}</a>
            </div>
        </div>
        <div class="blog-card-wraper">
            <div class="row g-4">
                @if($recent_blogs->count()>0)
                    @foreach($recent_blogs as $blog)
                        <div class="col-lg-4 col-sm-6 col-md-6 col-12">
                            <div class="blog-card">
                                <div class="image-wraper">
                                    <a href="{{ route('frontend.blog.details', $blog->slug) }}">
                                        {!! render_image_markup_by_attachment_id($blog->image,'','thumb') !!}
                                    </a>

                                </div>
                                <div class="text-part">
                                    <div class="date fs-md">
                                        {{ $blog->created_at->format('M j, Y') }}
                                    </div>
                                    <a href="{{ route('frontend.blog.details', $blog->slug) }}">
                                          <h4 class="blog-title fw_semibold subtitle-2">
                                               {{$blog->title}}
                                          </h4>
                                    </a>

                                </div>
                            </div>
                        </div>
                    @endforeach
                @endif
            </div>
        </div>
    </div>
</section>
