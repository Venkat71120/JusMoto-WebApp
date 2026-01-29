<main>
    <x-frontend.breadcrumb-section.breadcrumb
        title="Contact Us"
        :items="[
                ['label' => 'Home', 'url' => '/'],
                ['label' => 'Contact Us']
            ]"
    />
    <section class="pat-120">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="get-in-touch">
                        <h3 class="title-3 fw_semibold">{{$title}}</h3>
                        <p class="fs-reg fw_medium">{{$sub_title}}
                        </p>
                        <div class="locetion-wrapper">
                            @foreach ($repeater_data['contact_page_contact_info_title_'] as  $key => $item)
                                @if ($key < 4)
                                    <div class="find-us">
                                        <div class="loc-logo">
                                            {!! render_image_markup_by_attachment_id($repeater_data['contact_page_contact_info_image_'][$key], '', 'thumb') !!}
                                        </div>

                                        <div class="adress">
                                            <h5 class="subtitle-4 fw_semibold">{{$repeater_data['contact_page_contact_info_title_'][$key]}}</h5>
                                            <span>{{$repeater_data['contact_page_contact_info_'][$key]}}</span>
                                        </div>
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 me-auto offset-lg-1">
                    <div class="from-aria">
                        <div class="from-content">
                            <x-validation.error />
                            <h5 class="subtitle-4 fw_semibold">{{$heading}}</h5>
                            {!! $form_details !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="pat-120 pab-60">
        <div class="custom-container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="map-container">
                        <iframe
                            src="{{ $iframe_src }}"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
