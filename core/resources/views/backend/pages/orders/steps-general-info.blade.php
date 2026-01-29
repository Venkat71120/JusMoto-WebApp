<div  class="tab-pane fade step active show" id="listing-info" role="tabpanel" aria-labelledby="listing-info-tab">
    <div class="row">
        <div class="col-lg-8 mt-2">
            <div class="table-responsive">
                <table id="after_booking_steps_table" class="table w-100">
                    <thead>
                        <tr>
                            <th>{{ __('No.') }}</th>
                            <th>{{ __('Steps') }}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        @if($afterBookingSteps->isNotEmpty())
                            @foreach($afterBookingSteps as $step)
                                <tr>
                                    <td >
                                        <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="{{ $step->steps_no }}" disabled>
                                    </td>
                                    <td >
                                        <input type="text" name="booking-steps[]" id="booking-steps" placeholder="{{ __('Enter step') }}" value="{{ $step->steps }}">
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                        @if(!$loop->first)
                                           <button type="button" class="btn btn-sm btn-danger remove-after-booking-step"><i class="fas fa-trash"></i></button>
                                        @endif
                                    </td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td >
                                    <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="{{ 1 }}" disabled>
                                </td>
                                <td >
                                    <input type="text" name="booking-steps[]" id="booking-steps" placeholder="{{ __('Enter step') }}">
                                </td>
                                <td>
                                    <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                </td>
                            </tr>
                        @endif    
                                    
                    </tbody>
                </table>
            </div>
        </div>

        <!-- submit buttons -->
        <div  class="col-lg-12 mt-5">
            <div class="btn_wrapper d-flex gap-3">
                <button type="submit" class="cmnBtn btn_5 btn_bg_blue radius-5 validate_subscription_type">{{__('Save Steps')}}</button>
            </div>
        </div>
    
    </div>
</div>

@section('scripts')
    <script>
       

    (function ($) {
        "use strict";
        $(document).ready(function () {
 
            $(document).on('click', '.remove-after-booking-step', function () {
                $(this).closest('tr').remove();
                var rowCount = $("#after_booking_steps_table tr").length;
                for (var i = 0; i < rowCount; i++)
                {
                    $("#after_booking_steps_table tr:eq(" + (i + 1) + ")").find('#booking-steps-no').val(i + 1);  // Update the step number
                    
                }
                
                           
            });
            
            $(document).on('click', '.add-after-booking-step-specific', function () {
                let currentRow = $(this).closest("tr"); 
                let step_number = $(this).closest('tr').find('#booking-steps-no').val();
                step_number++;
                const row = `
                        <tr>  
                            <td >
                                <input type="number" name="booking-steps_no[]" id="booking-steps-no" value="${ step_number }" disabled>
                            </td> 
                            <td >
                                <input type="text" name="booking-steps[]" id="booking-steps" placeholder="{{ __('Enter step') }}">
                            </td>
                            <td>
                                <button type="button" class="btn btn-sm btn-info add-after-booking-step-specific me-3"><i class="fas fa-plus"></i></button>
                                <button type="button" class="btn btn-sm btn-danger remove-after-booking-step"><i class="fas fa-trash"></i></button>
                            </td>
                        </tr>
                `;
                currentRow.after(row);
                var rowCount = $("#after_booking_steps_table tr").length;
                for (var i = 0; i < rowCount; i++)
                {
                    $("#after_booking_steps_table tr:eq(" + (i + 1) + ")").find('#booking-steps-no').val(i + 1);  // Update the step number
                    
                }
                
            }  ); 
            
        });

    })(jQuery);

    </script>

    <x-media.js />
    <x-frontend.js.new-tag-add-js/>
     
    @if(session('success'))
        <script>
            toastr.success('{{ session('success') }}', 'Success');
        </script>
    @endif
@endsection

