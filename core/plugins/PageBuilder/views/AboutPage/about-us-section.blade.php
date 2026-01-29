<main>
    <x-frontend.breadcrumb-section.breadcrumb
        title="About Us"
        :items="[
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'About Us']
            ]"
    />
    <section class="fetured-service-section pat-120 pab-60">
        <div class="custom-container">
            <div class="about-our-service">
                <div class="content-with-image-section service-expertise-wraper">
                    <div class="text-part">
                        <h2 class="title-2 fw_semibold">
                           {{$title}}
                        </h2>
                        <p class="pera">
                            {{$description}}
                        </p>
                        <ul class="custom-ul">
                            @foreach (  $repeater_data['feature_item_'] as  $key => $item)
                                @if ($key < 4)
                                    <li>{{ $repeater_data['feature_item_'][$key] ?? '' }}</li>
                                @endif
                            @endforeach
                        </ul>
                        <div class="btn-wraper">
                        </div>
                    </div>
                    <div class="image-part">
                        {!! render_image_markup_by_attachment_id($badge_image, '', 'thumb') !!}
                        <div class="satisfied-customer-counter">
                            <span class="count">{{$satisfied_customer_number}}{{__('+')}}</span>
                            <span class="text">{{$satisfied_customer_text}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
