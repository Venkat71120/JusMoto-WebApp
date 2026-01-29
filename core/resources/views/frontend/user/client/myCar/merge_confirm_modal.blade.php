<div class="modal fade" id="car_conflict_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="carConflictLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content p_20">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="page-heading m_0" id="carConflictLabel">{{ __("Car Conflict Detected") }}</h5>
                <button type="button" class="btn_close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="icon-base ti tabler-x"></i>
                </button>
            </div>
            <div class="mt_12">
                <p>{{__('You have a car selected before login and another in your account. Which one do you want to keep?')}}</p>
                <form method="POST" action="{{ route('car.merge.choice') }}">
                    @csrf
                    <div class="d-flex justify-content-between mt_12 gap-2">
                        <button type="submit" name="choice" value="keep_user_car" class="btn_gray">
                            {{__('Keep My Account Car')}}
                        </button>
                        <button type="submit" name="choice" value="use_guest_car" class="btn_primary">
                            {{__('Use My Previously Selected Car')}}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
