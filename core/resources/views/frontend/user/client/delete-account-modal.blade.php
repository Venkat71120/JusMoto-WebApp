<div class="modal fade" id="delete_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
     aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content p_20">
            <div class="d-flex align-items-center justify-content-between">
                <h5 class="page-heading m_0" id="staticBackdropLabel">{{__("Delete Account")}}</h5>
                <button type="button" class="btn_close" data-bs-dismiss="modal" aria-label="Close"> <i
                        class="icon-base ti tabler-x"></i> </button>
            </div>
            <form  action="{{route('client.account.delete')}}" method="POST">
                @csrf
                <div class="mt_12">
                    <div class="amount-details">
                        <div class="custom_input_wrapper delete-account">
                            @php
                                $all_reasons=App\Models\Backend\Reason::all();
                            @endphp
                            <label for="input_5" class="custom-label mb-10">{{__('Select a Reason')}}</label>
                            <select name="reason_id" id="input_5" class="custom_input">
                                <option value="">{{ __("Select Reason") }}</option>
                                @if($all_reasons?->count() > 0)
                                    @foreach($all_reasons as $reason)
                                        <option value="{{ $reason->id }}" {{ old('reason_id') == $reason->id ? 'selected' : '' }}>
                                            {{ $reason->title }}
                                        </option>
                                    @endforeach
                                @endif
                            </select>

                        </div>
                        <div class="custom_input_wrapper">
                            <label for="des" class="form-label">{{__('Description')}}</label>
                            <textarea name="description" id="des"
                                      class="custom_input w-100 h-25"
                                      placeholder="Enter your Description"
                                      rows="3">{{old('description')}}</textarea>
                        </div>
                        <div class="custom_input_wrapper">
                            <label for="password" class="form-label">{{__('Current Password')}}</label>
                            <div class="relative_wrapper">
                                <input type="password" name="password" id="password" class="custom_input w-100" value="{{old('password')}}" placeholder="Enter your Current Password">
                                <div class="pass_eye_btn">
                                    <i class="base-icon ti tabler-eye d-none"></i>
                                    <i class="base-icon ti tabler-eye-off "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt_12 d-flex justify-content-end">
                    <button class="btn_primary">{{__('Delete')}}</button>
                </div>
            </form>
        </div>
    </div>
</div>
