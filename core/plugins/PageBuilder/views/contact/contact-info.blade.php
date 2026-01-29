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
                            <h5 class="subtitle-4 fw_semibold">Send Message</h5>
                            <div class="from-wrapper">
                                <div class="from-place">
                                    <label class="input-design" for="name fs-reg fw_medium">Name</label>
                                    <input type="text" id="name" placeholder="Your Name">
                                </div>

                                <div class="from-place">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" placeholder="Your Email">
                                </div>
                            </div>

                            <div class="message">
                                <label for="message">Message</label>
                                <textarea rows="5" name="message" id="message" placeholder="Your Message"></textarea>
                            </div>

                            <div class="">
                                <button class="cmn-btn primary-btn w-100 mt-2">Send Message</button>
                            </div>
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9004739190194!2d90.41112431498155!3d23.750894394668325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1234567890123!5m2!1sen!2sbd"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>




</main>
