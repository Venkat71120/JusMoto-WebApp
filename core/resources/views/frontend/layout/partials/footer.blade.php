<footer class="footerWraper dark-bg white-text">
    <div class="footer-area-top">
        <div class="custom-container">
            {!! render_frontend_sidebar('footer_one') !!}
        </div>
    </div>
    {!! render_frontend_sidebar('copyright') !!}

</footer>

<script src="{{ asset('assets/frontend/js/popper.min.js') }}"></script>
<script src="{{ asset('assets/frontend/js/plugin.js') }}"></script>
<script src={{ asset('assets/frontend/js/cartdrawer.js')}}></script>
<script src="{{ asset('assets/frontend/js/popup.js')}}"></script>
<script src="{{ asset('assets/frontend/js/about_sticky.js')}}"></script>
<script src="{{ asset('assets/frontend/js/sticky.js')}}"></script>
<script src="{{ asset('assets/frontend/js/flatpickr.js')}}"></script>
<script src="{{ asset('assets/frontend/js/main.js') }}"></script>
<script src="{{ asset('assets/common/js/toastr.min.js') }}"></script>
<x-frontend.js.togglle-favourite-item-js/>
<x-frontend.js.toggle-cart-item-js/>

@yield('scripts')
{!! Toastr::message() !!}
<x-popup.default-js-popup/>

@php
    $userId = auth()->id();
    $guestToken = Cookie::get('guest_token');

    $selectedCar = null;

    if ($userId) {
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('user_id', $userId)
            ->first();
    } elseif ($guestToken) {
        $selectedCar = \App\Models\UserSelectedCar::with(['brand','car','engine','fual'])
            ->where('guest_token', $guestToken)
            ->first();
    }
@endphp

@if(!$selectedCar)
    <script>
        $(document).ready(function() {
            if (!localStorage.getItem('hasVisitedHomepage')) {
                setTimeout(function() {
                    if ($('.openPop')[0]) {
                        $('.openPop')[0].click();
                    }
                }, 500);
                localStorage.setItem('hasVisitedHomepage', 'true');
            }
        });
    </script>
@endif
</body>
</html>
