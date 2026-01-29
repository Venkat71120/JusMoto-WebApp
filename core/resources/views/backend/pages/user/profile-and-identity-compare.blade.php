<div class="compare-profile-and-identity">
    <div class="row g-4 gy-5">
        <div class="col-lg-6">
            <div class="user-profile userProfileDetails">
                <div class="userProfileDetails__header">
                    <h5 class="userProfileDetails__title">{{__('User Profile Info')}}</h5>
                    <input type="hidden" id="user_id_for_verified_status" value="{{ $user_details->id }}">
                </div>
                <div class="userDetails__wrapper userProfile__details mt-3">
                    <div class="userProfile__details__thumb mb-3 h-25 w-25">
                        @if(!empty($user_details->image))
                            {!! render_image_markup_by_attachment_id($user_details->image, '', 'thumb') !!}
                        @else
                            <x-image.user-no-image/>
                        @endif
                    </div>
                    <p class="userDetails__wrapper__item">
                        <strong>{{ __('Full Name:') }}</strong> {{ $user_details->first_name.' '.$user_details->last_name }}
                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong>{{ __('Username:') }}</strong> {{ $user_details->username ?? '' }}
                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong>{{ __('Email:') }}</strong> {{ $user_details->email ?? '' }}
                    </p>
                    <p class="userDetails__wrapper__item">
                        <strong>{{ __('Phone:') }}</strong> {{ $user_details->phone ?? '' }}
                    </p>

                </div>
            </div>
        </div>

        <div class="col-lg-6">
        
        </div>
    </div>
</div>
