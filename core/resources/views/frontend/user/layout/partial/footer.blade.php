
<script src="{{ asset('/assets/frontend/js/Client-Dashboard/plugin2.js') }}"></script>
<script src="{{ asset('/assets/frontend/js/Client-Dashboard/main.js') }}"></script>
<script src="{{ asset('/assets/frontend/js/Client-Dashboard/dashboard-main.js') }}"></script>
<script src="{{ asset('/assets/frontend/js/Client-Dashboard/popup.js') }}"></script>
<script src="{{ asset('/assets/frontend/js/Client-Dashboard/sidebarsearch.js') }}"></script>
<script src="{{asset('assets/common/js/toastr.min.js')}}"></script>
<script src="{{ asset('/assets/frontend/js/sweetalert.js') }}"></script>
<x-frontend.js.togglle-favourite-item-js/>
<x-frontend.js.toggle-cart-item-js/>
@yield('scripts')
{!! Toastr::message() !!}
<x-popup.default-js-popup/>


</body>

</html>
