<section class="explore-servies pat-120 ">
    <div class="custom-container">
        <div class="title-wraper-part d-lg-flex flex-wrap gap-3 items-center justify-between mb-60">
            <div class="filter-wrappers">
                <div class="filter-item-wrapper">
                    <div class="search-box">
                        <input type="text" placeholder="Search" name="search" id="search-input">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div class="filter-item-wrapper">
                    <div class="select-wrapper search-category">
                        <select id="category" class=" custom-select w-100 page_language_changer" name="category">
                            <option style="overflow: hidden !important;" value="">{{__('Select Category')}}</option>
                            @foreach($categories as $category)
                                <option value="{{ $category->id }}" @if($selected_category == $category->id) selected @endif>{{ $category->name }}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
                <div class="filter-item-wrapper">
                    <div class="budget-filter-wraper selectWithIcon">
                        <div class="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9715 5.59259C11.9715 4.16074 10.1931 3 7.99935 3C5.80555 3 4.02713 4.16074 4.02713 5.59259C4.02713 7.02447 5.11046 7.8148 7.99935 7.8148C10.8882 7.8148 12.3327 8.55553 12.3327 10.4074C12.3327 12.2593 10.3926 13 7.99935 13C5.60612 13 3.66602 11.8393 3.66602 10.4074" stroke="#767474" stroke-width="1.25" stroke-linecap="round"/>
                                <path d="M8.33398 1.66602V2.80602M8.33398 14.3327V13.1927" stroke="#767474" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <input class="budget-input custom-select custom-selector w-100" placeholder="Budget" readonly>
                        <div class="budget-secletion-wraper custom-selector-option">
                            <div class="inputs-wraper">
                                <div class="price-wraper flex-1">
                                    <label for="min-price">{{__('Min')}}</label>
                                    <input type="number" name="min_price" id="min-price" class="custom-input-budget min-input w-100">
                                </div>
                                <div class="heipen mb-2">-</div>
                                <div class="price-wraper flex-1">
                                    <label for="max-price">{{__('Max')}}</label>
                                    <input type="number" name="max_price" id="max-price" class="custom-input-budget max-input w-100">
                                </div>
                            </div>
                            <div class="btn-wraper">
                                <button class="cmn-btn md-btn primary-btn w-100" id="price-filter">{{__('Apply')}}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="filter-item-wrapper">
                    <div class="select-wrapper">
                        <select name="reviews" id="search-reviews"  class="page_language_changer">
                            <option value="0" selected>{{__('Choose Rating')}}</option>
                            <option value="1.00">{{__('1 Star Reviews')}}</option>
                            <option value="2.00">{{__('2 Star Reviews')}}</option>
                            <option value="3.00">{{__('3 Star Reviews')}}</option>
                            <option value="4.00">{{__('4 Star Reviews')}}</option>
                            <option value="5.00">{{__('5 Star Reviews')}}</option>
                        </select>
                    </div>
                </div>
                <div class="">
                    <button class="cmn-btn primary-btn  w-100" id="resetAllFilters" style="height: 60px;width: 220px!important;">{{__('Reset')}}</button>
                </div>
            </div>

        </div>
    </div>
</section>
