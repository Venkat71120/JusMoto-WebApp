<section class="pat-120">
    <div class="custom-container">
        <div class="row">
            <div class="col-lg-8">
                <div class="blogImgCard">
                    {!! render_image_markup_by_attachment_id($blog->image,'','full') !!}
                </div>

                <div class="blog-item-wrapper">
                    <div class="text-box">
                        <span>{{ \Carbon\Carbon::parse($blog->created_at)->format('M j, Y') }}</span>
                        <h4 class="fw_semibold subtitle-1">{{$blog->title}}</h4>
                    </div>

                    <div class="car-driver-detalis pab-60">
                        <div class="about-car">
                            <p>{!! $blog->content !!}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-4">
                <!-- Search Box -->
               @include('blog::frontend.BlogPage.search-bar')
              @include('blog::frontend.BlogPage.sidebar-container')
                <!-- Reacent blogs -->
                <div class="recent-blog">
                    @if($recent_posts->count()>0)
                        @foreach($recent_posts as $post)
                            <div class="recnet-blog-card">
                                <div class="bolg-wrapper">
                                    <div class="blog-cards">
                                        <a href="{{ route('frontend.blog.details',$post->slug) }}">
                                            {!! render_image_markup_by_attachment_id($post->image,'','thumb') !!}
                                        </a>
                                    </div>
                                    <div class="box-background">
                                        <div class="text-box">
                                            <span>{{ \Carbon\Carbon::parse($post->created_at)->format('M j, Y') }}</span>
                                            <a href="{{ route('frontend.blog.details',$post->slug) }}">
                                                <h4 class="fs-reg fw_semibold ">{{$blog->title}}</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    @else
                        <div class="alert alert-warning">
                            {{ __('No recent blog posts found. Stay tuned for upcoming articles!') }}
                        </div>
                    @endif

                </div>
              @include('blog::frontend.BlogPage.tags')
            </div>
        </div>
</section>
