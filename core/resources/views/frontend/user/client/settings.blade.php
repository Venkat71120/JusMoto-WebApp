@extends('frontend.user.layout.master')
@section('title','Settings')
@section('style')
    <x-frontend.media.css/>
@endsection
@section('content')
    <div class="overlay"></div>
    <div class="main_container">
        <div class="p_15 d-flex flex-column gap-4">
            <div class="page_header">
                <h3 class="page_title">{{__('Settings')}}</h3>
                <p class="m_0">{{__('Manage your dashboard here')}}</p>
            </div>

            <div class="d-flex gap-4 flex-column flex-xl-row">
                <div class="d-flex flex-column gap-4 flex_1">
                    {{-- Profile Image Section --}}
                    <div class="setting_card">
                        <div class="card_header">
                            <h4 class="card_title">{{__('Profile')}}</h4>
                            <p class="card_description">{{__('Edit your personal profile information.')}}</p>
                        </div>
                        <div class="card_content d-flex justify-content-between align-items-center">
                            <div class="profile_info">
                                <div class="img_wrapper">
                                    {!! render_image_markup_by_attachment_id($user->image,'','thumb') !!}
                                </div>
                                <div class="profile_name_edit d-flex gap-2">
                                    <div class="name_wrapper">
                                        @php
                                            $fullName = trim(($user->first_name ?? '') . ' ' . ($user->last_name ?? ''));
                                        @endphp
                                        <h3 class="display_name m-0">{{ $fullName }}</h3>
                                    </div>

                                    <div class="mail_wrapper">
                                        <p class="display_email m-0">{{$user->email}}</p>
                                    </div>
                                    <div class="mail_wrapper">
                                        <p class="display_email m-0">{{$user->phone}}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="img_cng_btn">
                                <div class="img-upload-part d-flex align-items-center gap-4">
                                    <form id="uploadForm" action="{{ route('settings.update.profile') }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        <input type="file" name="profile_image" id="profileImageInput" accept="image/*" style="display: none;" onchange="submitForm()">

                                        <button type="button" class="btn_primary" onclick="openFileChooser()">
                                            {{__('Change Image')}}
                                        </button>
                                    </form>
                                </div>

                            </div>

                        </div>

                    </div>

                    {{-- Personal Information Section --}}
                    <form action="{{ route('settings.update.profile') }}" method="POST">
                        @csrf
                        <div class="setting_card">
                            <div class="card_header">
                                <h4 class="card_title">{{__('Personal Information')}}</h4>
                                <p class="card_description">{{__('Edit your personal profile information.')}}</p>
                            </div>
                            <div class="card_content d-flex justify-content-between align-items-center w_650">
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="first_name" class="form-label">{{__('First Name')}}</label>
                                        <input type="text" name="first_name" id="first_name"
                                               class="custom_input"
                                               value="{{ old('first_name', $user->first_name) }}"
                                               required>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="last_name" class="form-label">{{__('Last Name')}}</label>
                                        <input type="text" name="last_name" id="last_name"
                                               class="custom_input"
                                               value="{{ old('last_name', $user->last_name) }}"
                                               required>
                                    </div>
                                </div>
                            </div>
                            <div class="card_content d-flex justify-content-between align-items-center w_650 mt_12">
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="user_name" class="form-label">{{__('User Name')}}</label>
                                        <input type="text" name="user_name" id="user_name"
                                               class="custom_input"
                                               value="{{ old('user_name', $user->username) }}"
                                               required>
                                        <span id="user_name_availability" class="d-none"></span>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="date_of_birth" class="form-label">{{__('Date of Birth')}}</label>
                                        <input type="date" name="date_of_birth" id="date_of_birth"
                                               class="custom_input"
                                               value="{{ old('date_of_birth', $user->date_of_birth) }}">
                                    </div>

                                </div>
                            </div>
                            <div class="mt-3">
                                <button type="submit" class="btn_primary">{{__('Save Profile')}}</button>
                            </div>
                        </div>
                    </form>
                </div>
                {{-- Email phone change Section --}}
                <div class="d-flex flex-column flex_1">
                    <div class="setting_card">
                        <div class="card_header">
                            <h4 class="card_title">{{ __('Contact Information') }}</h4>
                            <p class="card_description">{{ __('Update your email address and phone number.') }}</p>
                        </div>

                        <div class="card_content">
                            <div class="d-flex gap-3">
                                {{-- Change Email Button --}}
                                <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#changeEmailModal">
                                    {{ __('Change Email') }}
                                </button>

                                {{-- Change Phone Button --}}
                                <button type="button" class="btn_primary" data-bs-toggle="modal" data-bs-target="#changePhoneModal">
                                    {{ __('Change Phone') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    {{-- Account Information Section --}}
                    <div class="setting_card mt-3">
                        <div class="card_header">
                            <h4 class="card_title">{{__('Account Information')}}</h4>
                            <p class="card_description">{{__('Edit your account information.')}}</p>
                        </div>
                        <div class="card_content">
                            <form action="{{ route('settings.update.password') }}" method="POST" class="w-100">
                                @csrf
                                <div class="name_input_wrapper w-100">
                                    <div class="custom_input_wrapper">
                                        <label for="old_password" class="form-label">{{__('Current Password')}}</label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="old_password" id="old_password"
                                                   class="custom_input w-100" value="{{old('old_password')}}">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="new_password" class="form-label">{{__('New Password')}}</label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="new_password" id="new_password"
                                                   class="custom_input w-100" value="{{old('new_password')}}">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                        <span class="length-check d-none"></span>
                                    </div>
                                    <div class="custom_input_wrapper">
                                        <label for="new_password_confirmation" class="form-label">{{__('Confirm Password')}}</label>
                                        <div class="relative_wrapper">
                                            <input type="password" name="new_password_confirmation" id="new_password_confirmation"
                                                   class="custom_input w-100" value="{{old('new_password_confirmation')}}">
                                            <div class="pass_eye_btn">
                                                <i class="base-icon ti tabler-eye d-none"></i>
                                                <i class="base-icon ti tabler-eye-off "></i>
                                            </div>
                                        </div>
                                        <span id="check_password_match" class="d-none"></span>
                                    </div>
                                </div>
                                <div class="custom_select">
                                    <label for="language" class="select_label mb_6">{{__('Language')}}</label>
                                    <select name="language" id="language" class="custom_input">
                                        @foreach($all_lang as $lang)
                                            <option value="{{ $lang->slug }}" @if($lang->slug  == $user->selected_lang) selected @endif>{{ $lang->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="mt-3">
                                    <button type="submit" class="btn_primary">{{__('Update Password')}}</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            @include('frontend.user.client.change-email-modal')
            @include('frontend.user.client.change-phone-modal')
        </div>
    </div>
    <x-msg.flash-msg />
    <x-msg.response-message />
@endsection

@section('scripts')
    <script>
        $(document).ready(function () {

            $(document).on('keyup', '#user_name', function () {
                let username = $(this).val();
                let usernameRegex = /^[a-zA-Z0-9]+$/;

                if (usernameRegex.test(username)) {
                    $.ajax({
                        url: "{{ route('user.name.availability') }}",
                        type: 'post',
                        data: {username: username},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#user_name_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (username.length > 0) {
                    $("#user_name_availability")
                        .removeClass("d-none")
                        .text("{{ __('Enter valid username') }}")
                        .css("color", "red");
                } else {
                    // hide if input is empty
                    $("#user_name_availability").addClass("d-none").text("");
                }
            });


            $(document).on('keyup', '#email', function () {
                let email = $(this).val();
                let emailRegex = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

                if (emailRegex.test(email)) {
                    $.ajax({
                        url: "{{ route('user.email.availability') }}",
                        type: 'post',
                        data: {email: email},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#email_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (email.length > 0) {
                    $("#email_availability")
                        .removeClass("d-none")
                        .text("{{ __('Enter valid email') }}")
                        .css("color", "red");
                } else {
                    $("#email_availability").addClass("d-none").text("");
                }
            });

            $(document).on('keyup', '#phone', function () {
                let phone = $(this).val();
                let phoneRegex = /^\+?[0-9]{7,15}$/;

                if (phoneRegex.test(phone)) {
                    $.ajax({
                        url: "{{ route('user.phone.number.availability') }}",
                        type: 'post',
                        data: {phone: phone},
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        success: function (res) {
                            let $msg = $("#phone_availability").removeClass("d-none");
                            if (res.status === 'available') {
                                $msg.text(res.msg).css("color", "green");
                            } else {
                                $msg.text(res.msg).css("color", "red");
                            }
                        }
                    });
                } else if (phone.length > 0) {
                    $("#phone_availability")
                        .removeClass("d-none")
                        .text("{{ __('Enter valid number') }}")
                        .css("color", "red");
                } else {
                    $("#phone_availability").addClass("d-none").text("");
                }
            });

            $(document).on('keyup', '#new_password, #new_password_confirmation', function () {
                let password = $("#new_password").val();
                let confirm_password = $("#new_password_confirmation").val();

                let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

                if (password.length === 0) {
                    // remove message if input is empty
                    $('.length-check').next('span').remove();
                } else if (passwordPattern.test(password)) {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:green; margin-left:8px;">Password meets all requirements</span>');
                } else {
                    $('.length-check')
                        .next('span').remove()
                        .end()
                        .after('<span style="color:red; margin-left:8px;">Password must be at least 8 chars, include uppercase, lowercase, number & special char</span>');
                }

                if (confirm_password.length > 0) {
                    // remove old span first
                    $("#check_password_match").next("span").remove();

                    if (password === confirm_password) {
                        $("#check_password_match").after(
                            '<span style="color:green; margin-left:8px;">Password match!</span>'
                        );
                    } else {
                        $("#check_password_match").after(
                            '<span style="color:red; margin-left:8px;">Password does not match!</span>'
                        );
                    }
                } else {
                    $("#check_password_match").next("span").remove();
                }
            });
        });
        function openFileChooser() {
            document.getElementById('profileImageInput').click();
        }

        function submitForm() {
            const fileInput = document.getElementById('profileImageInput');
            if (fileInput.files.length > 0) {
                document.getElementById('uploadForm').submit();
            }
        }
    </script>
@endsection
