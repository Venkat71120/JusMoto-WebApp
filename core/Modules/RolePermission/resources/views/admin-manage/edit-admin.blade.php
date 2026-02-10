@extends('backend.admin-master')
@section('site-title')
    {{__('Edit Admin')}}
@endsection
@section('style')
    <x-media.css />
@endsection
@section('content')
    <div class="row g-4 mt-0">
        <div class="col-xl-6 col-lg-6">
            <div class="dashboard__card bg__white padding-20 radius-10">
                <div class="dashboard__inner__header mb-3">
                    <div class="dashboard__inner__header__flex">
                        <div class="dashboard__inner__header__left">
                            <h4 class="dashboard__inner__header__title">{{ __('Edit New Admin') }}</h4>
                        </div>
                        <div class="dashboard__inner__header__right">
                            <a href="{{ route('admin.all') }}"
                                class="cmnBtn btn_5 btn_bg_info radius-5">{{__('All Admins')}}</a>
                        </div>
                    </div>
                </div>
                <div class="dashboard__inner__item">
                    <x-validation.error />
                    <form action="{{ route('admin.edit', $admin->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <x-form.text :title="__('Name')" :type="'text'" :name="'name'" :value="$admin->name"
                            :class="'form-control'" :placeholder="__('Enter name')" />
                        <x-form.text :title="__('Username')" :type="'text'" :name="'username'" :value="$admin->username"
                            :class="'form-control'" :placeholder="__('Enter username')" />
                        <x-form.text :title="__('Email')" :type="'email'" :name="'email'" :value="$admin->email"
                            :class="'form-control'" :placeholder="__('Enter email')" />
                        <x-form.text :title="__('Phone')" :type="'text'" :name="'phone'" :value="$admin->phone"
                            :class="'form-control'" :placeholder="__('Enter phone')" />
                        <x-backend.image :title="__('Profile Image')" :name="'image'" :dimentions="'48x48'"
                            :id="$admin->image" />

                        <div class="single-input mt-3">
                            <label class="label-title">{{ __('Select Role') }}</label>
                            <select name="role" class="form__control select2_activation">
                                <option disabled>{{ __('Select Role') }}</option>
                                @foreach($roles as $role)
                                    <option value="{{$role}}" @if(in_array($role, $admin_role)) selected @endif>{{$role}}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        {{-- Add after the role select field --}}

                        <!-- Franchise Account Toggle -->
                        <div class="single-input mt-3">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="is_franchise"
                                    name="is_franchise" value="1" {{ $admin->is_franchise ? 'checked' : '' }}>
                                <label class="form-check-label" for="is_franchise">{{ __('Is Franchise Account') }}</label>
                            </div>
                        </div>

                        <!-- Franchise Fields (hidden by default) -->
                        <div class="franchise-fields" id="franchiseFields"
                            style="{{ $admin->is_franchise ? '' : 'display: none;' }}">

                            <!-- Franchise Code -->
                            <div class="single-input mt-3">
                                <label class="label-title">{{ __('Franchise Code') }} <span
                                        class="text-danger">*</span></label>
                                <input type="text" class="form__control" name="franchise_code"
                                    value="{{ $admin->franchise_code ?? '' }}" placeholder="{{ __('e.g., FRANCHISE001') }}">
                                <small class="text-muted">{{ __('Unique code for franchise identification') }}</small>
                            </div>

                            <!-- Franchise Location -->
                            <div class="single-input mt-3">
                                <label class="label-title">{{ __('Franchise Location') }}</label>
                                <input type="text" class="form__control" name="franchise_location"
                                    value="{{ $admin->franchise_location ?? '' }}"
                                    placeholder="{{ __('e.g., Bangalore, Mumbai') }}">
                            </div>

                            <!-- Outlet Location Dropdown -->
                            @if(isset($outletLocations) && count($outletLocations) > 0)
                                <div class="single-input mt-3">
                                    <label class="label-title">{{ __('Outlet Location') }}</label>
                                    <select name="outlet_location_id" class="form__control select2_activation">
                                        <option value="">{{ __('Select Outlet Location') }}</option>
                                        @foreach($outletLocations as $location)
                                            <option value="{{ $location->id }}" {{ $admin->outlet_location_id == $location->id ? 'selected' : '' }}>
                                                {{ $location->name }} - {{ $location->address }}
                                            </option>
                                        @endforeach
                                    </select>
                                </div>
                            @endif

                        </div>

                        <div class="form__input__single mt-2">
                            <label for="about" class="form__input__single__label">{{ __('About') }}</label>
                            <textarea id="about" name="about" class="form__control radius-5" cols="100"
                                rows="3">{{ $admin->about }}</textarea>
                        </div>

                        <div class="popup_contents__footer justify-content-start">
                            <button type="submit" id="update"
                                class="cmnBtn btn_5 btn_bg_blue radius-5">{{ __('Update') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <x-media.markup />
@endsection

@section('scripts')
    <x-media.js />
    <script>
        // Show/hide franchise fields when checkbox is toggled
        document.getElementById('is_franchise').addEventListener('change', function() {
            const franchiseFields = document.getElementById('franchiseFields');
            if (this.checked) {
                franchiseFields.style.display = 'block';
            } else {
                franchiseFields.style.display = 'none';
            }
        });
        
        // Validate franchise code is required if franchise is checked
        document.querySelector('form').addEventListener('submit', function(e) {
            const isFranchise = document.getElementById('is_franchise').checked;
            const franchiseCode = document.querySelector('input[name="franchise_code"]').value;
            
            if (isFranchise && !franchiseCode.trim()) {
                e.preventDefault();
                alert('Please enter a franchise code for franchise accounts.');
                return false;
            }
        });
    </script>
@endsection