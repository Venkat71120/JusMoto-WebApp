(function ($) {
    "use strict";
    $(document).ready(function () {

        $("#submitBtn, #prevBtn").hide();
       

        // Service Add next previous tab js
        var totalTab = $('#add-listing-tab .nav-link').length;
        var tabNavList = $('#add-listing-tab .nav-link');
        let currentTabIndex = 1;



        $(document).on('click', '#add-listing-tab .nav-link', function () {
            if(tabNavList.index($(this))==0)
            {
                $("#prevBtn, #submitBtn").hide();
                $("#nextBtn").show();
            }
            else if ((totalTab - 1) === tabNavList.index($(this))) {
                $("#prevBtn, #submitBtn").show();
                $("#nextBtn").hide();
            } else {
                $("#prevBtn, #nextBtn").show();
                $("#submitBtn").hide();
            }
        });

      



       
        $(document).on('click', '#nextBtn', function (e) {
            let currentState = $('#add-listing-tab .nav-link.active');
            let currentContent = $('#add-listing-tabContent .step.active');
            let currentTabIndex = currentState.index(); // Correctly calculate the current index
            let totalTab = $('#add-listing-tab .nav-link').length - 1; // Total tabs (0-based index)
        
            // Move to the next tab
            if (currentTabIndex < totalTab) {
                currentState.removeClass('active show').next().addClass('active show');
                currentContent.removeClass('active show').next().addClass('active show');
        
                currentTabIndex++; // Update the current index
            }
        
            // Update button visibility
            if (currentTabIndex === totalTab) {
                $("#prevBtn, #submitBtn").show();
                $("#nextBtn").hide();
            } else {
                $("#prevBtn").show();
                $("#nextBtn").show();
                $("#submitBtn").hide();
            }
        });
        
        $(document).on('click', '#prevBtn', function (e) {
            let currentState = $('#add-listing-tab .nav-link.active');
            let currentContent = $('#add-listing-tabContent .step.active');
            let currentTabIndex = currentState.index(); // Correctly calculate the current index
        
            // Move to the previous tab
            if (currentTabIndex > 0) {
                currentState.removeClass('active show').prev().addClass('active show');
                currentContent.removeClass('active show').prev().addClass('active show');
        
                currentTabIndex--; // Update the current index
            }
        
            // Update button visibility
            if (currentTabIndex === 0) {
                $("#prevBtn").hide();
                $("#nextBtn").show();
                $("#submitBtn").hide();
            } else {
                $("#prevBtn").show();
                $("#nextBtn").show();
                $("#submitBtn").hide();
            }
        });
        


    });
})(jQuery)


