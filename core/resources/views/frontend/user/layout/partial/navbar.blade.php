<body>
<header class="bg_active bg_active_Header">
    @php
        $all_lang = App\Models\Backend\Language::all();
        $client=auth()->user();
    @endphp
    <nav class="panel_container py_8 d-flex align-items-center">
        <div class="flex-grow-1 site_icon_container">
            <a href="{{ route('user.dashboard') }}" class="site_logo">{!! render_image_markup_by_attachment_id(get_static_option('site_logo')) !!}</a>
            <div class="menu_toggle"><i class="icon-base ti tabler-menu-2"></i></div>
        </div>
        <div class="main_container flex-grow-1 ms-auto pl_15">
            <div class="sm_justify_unset d-flex justify-content-between">
                <div class="d-flex align-items-center">

                </div>
                <div class="d-flex gap-2">
                    <div class="page_language_select">
                        <div class="translate_logo">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10511_2781)">
                                    <path d="M2.33203 2.91797H6.41536" stroke="currentColor" stroke-width="1.2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.2487 1.75V2.91667C5.2487 5.49383 3.94261 7.58333 2.33203 7.58333"
                                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M2.91797 5.25C2.91797 6.50067 4.63997 7.52967 6.8263 7.58333"
                                          stroke="currentColor" stroke-width="1.2" stroke-linecap="round"
                                          stroke-linejoin="round" />
                                    <path d="M7 11.668L9.33333 6.41797L11.6667 11.668" stroke="currentColor"
                                          stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.1401 10.5H7.52344" stroke="currentColor" stroke-width="1.2"
                                          stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <form action="{{ route('client.change.language') }}" method="POST" id="language_form">
                            @csrf
                            <select name="selected_lang" id="language_changer" class="page_language_changer" onchange="document.getElementById('language_form').submit();">
                                @foreach($all_lang as $lang)
                                    <option value="{{ $lang->slug }}" @if($lang->slug  == $client->selected_lang) selected @endif>{{ $lang->name }}</option>
                                @endforeach
                            </select>
                        </form>
                    </div>
                    @include('frontend.user.layout.partial.notifications')
                    <div class="profile_wrapper bg_light d-flex gap-2 align-items-center profile_dropdown_wrapper">
                        <div class="profile_image">
                            {!! render_image_markup_by_attachment_id($client->image,'','thumb') !!}
                        </div>
                        @php
                            if (!empty($client->first_name) && !empty($client->last_name)) {
                                $fullName = $client->first_name . " " . $client->last_name;
                            } else {
                                $fullName = $client->username;
                            }

                        @endphp
                        {{--<div class="profile_text mr_4">{{ auth()->user()->name }}</div>--}}
                        <div class="profile_icon">
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>

                        <!-- Dropdown Menu -->
                        <ul class="profile_dropdown_menu">
                            <li><a href="{{url('/')}}">{{__('Home')}}</a></li>
                            <li><a href="{{ route('settings.index') }}">{{__('Settings')}}</a></li>
                            <li><a href="{{ route('auth.logout') }}">{{__('LogOut')}}</a></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
