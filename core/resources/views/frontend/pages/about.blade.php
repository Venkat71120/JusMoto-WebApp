@include('frontend.user.layout.partial.common_header')
<body>
<header class="header style2">
    <nav class="navbar navbar-area navbar-expand-lg">
        <div class="custom-container container nav-container">
            <div class="logo-wrapper">
                <a href="index.html" class="navbar-brand">
                    <img src="../assets/frontend/images/black-logo.png" alt="GoCarLogo">
                </a>
            </div>
            <div class="responsive-mobile-menu d-lg-none">
                <a href="#/" class="click-nav-right-icon">
                    <i class="fas fa-ellipsis-v"></i>
                </a>
                <button class="navbar-toggler shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gocarNav">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            <div class="navbar-collapse justify-content-end gap-4 collapse" id="gocarNav">
                <ul class="navbar-nav">
                    <li>
                        <a href="index.html">Home</a>
                    </li>
                    <li>
                        <a href="about.html" class="active">About Us</a>
                    </li>
                    <li>
                        <a href="services.html" class="menu-item-has-children">Services</a>
                    </li>
                    <li>
                        <a href="products.html">Products</a>
                    </li>
                    <li>
                        <a href="blog.html">Blog</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div class="navbar-right-content show-nav-content">
                <div class="single-right-content">
                    <div class="navbar-right-flex">
                        <div class="navbar-right-item">
                            <a href="#/" class="search-header-open">
                                <i class="fas fa-search"></i>
                            </a>
                            <div class="header-global-search ">
                                <div class="header-global-search-header">
                                    <h5 class="header-global-search-title">Search</h5>
                                    <div class="header-global-search-close search-close">
                                        <i class="fa-solid fa-times"></i>
                                    </div>
                                </div>
                                <div class="header-global-search-input d-flex align-items-center">
                                    <div class="header-global-search-input-inner">
                                        <div class="header-global-search-input-inner-icon" id="header_search_load_spinner">
                                            <i class="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                        <input type="text" id="search_your_desired_job" class="form-control" placeholder="Search" autocomplete="off">
                                    </div>
                                </div>
                                <div class="display_search_result"></div>
                            </div>
                            <div class="search-overlay"></div>
                        </div>
                        <div class="navbar-right-item">
                            <a href="#/">
                                <i class="fas fa-car"></i>
                            </a>
                        </div>
                        <div class="navbar-right-item">
                            <a href="#/">
                                <i class="fas fa-cart-shopping"></i>
                            </a>
                        </div>
                        <div class="navbar-right-item">
                            <a href="http://influencer.test/user-register" class="cmn-btn md-btn primary-btn">
                                Log In
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>
<main>
    <section class="breadcrumb-section bg-image-use" style="background-image: linear-gradient(#000000B2, #000000B2), url(../assets/frontend/images/bradecrumb.png);">
        <div class="custom-container">
            <div class="breadcrumb-content text-center">
                <h4 class="subtitle-1 fw_semibold white-text">
                    About Us
                </h4>
                <ul class="breadcrumb-list white-text mt-2">
                    <li>
                        <a href="index.html">
                            Home
                        </a>
                    </li>
                    <li>
                            <span>
                                About Us
                            </span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="fetured-service-section pat-120 pab-60">
        <div class="custom-container">
            <div class="about-our-service">
                <div class="content-with-image-section service-expertise-wraper">
                    <div class="text-part">
                        <h2 class="title-2 fw_semibold">
                            About Our Expertise & Services
                        </h2>
                        <p class="pera">
                            With extensive industry experience and advanced technology, we deliver comprehensive automotive services focused on quality, precision, and customer satisfaction.
                        </p>
                        <ul class="custom-ul">
                            <li>Extensive experience in automotive maintenance and repair</li>
                            <li>Use of advanced diagnostic and repair technology</li>
                            <li>Focus on ensuring vehicle safety and performance</li>
                        </ul>
                        <div class="btn-wraper">
                            <a href="#/" class="cmn-btn primary-btn">About More</a>
                        </div>
                    </div>
                    <div class="image-part">
                        <img src="../assets/frontend/images/about-service.jpg" alt="about">
                        <div class="satisfied-customer-counter">
                            <span class="count">30+</span>
                            <span class="text">Satisfied Customer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="achivment-section pat-60 pab-120">
        <div class="custom-container">
            <div class="achivment-wraper">
                <div class="single-achivment">
                    <div class="icon-part">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10514_11161)">
                                <path d="M4.25 17C4.25 18.6744 4.57979 20.3323 5.22054 21.8792C5.86128 23.4261 6.80044 24.8317 7.98439 26.0156C9.16834 27.1996 10.5739 28.1387 12.1208 28.7795C13.6677 29.4202 15.3256 29.75 17 29.75C18.6744 29.75 20.3323 29.4202 21.8792 28.7795C23.4261 28.1387 24.8317 27.1996 26.0156 26.0156C27.1996 24.8317 28.1387 23.4261 28.7795 21.8792C29.4202 20.3323 29.75 18.6744 29.75 17C29.75 15.3256 29.4202 13.6677 28.7795 12.1208C28.1387 10.5739 27.1996 9.16834 26.0156 7.98439C24.8317 6.80044 23.4261 5.86128 21.8792 5.22054C20.3323 4.57979 18.6744 4.25 17 4.25C15.3256 4.25 13.6677 4.57979 12.1208 5.22054C10.5739 5.86128 9.16834 6.80044 7.98439 7.98439C6.80044 9.16834 5.86128 10.5739 5.22054 12.1208C4.57979 13.6677 4.25 15.3256 4.25 17Z" stroke="#B92325" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.75 14.168C12.75 15.2951 13.1978 16.3761 13.9948 17.1732C14.7918 17.9702 15.8728 18.418 17 18.418C18.1272 18.418 19.2082 17.9702 20.0052 17.1732C20.8022 16.3761 21.25 15.2951 21.25 14.168C21.25 13.0408 20.8022 11.9598 20.0052 11.1628C19.2082 10.3657 18.1272 9.91797 17 9.91797C15.8728 9.91797 14.7918 10.3657 13.9948 11.1628C13.1978 11.9598 12.75 13.0408 12.75 14.168Z" stroke="#B92325" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.73828 26.7041C9.08892 25.537 9.8064 24.5141 10.7843 23.7871C11.7622 23.0601 12.9484 22.6676 14.1669 22.668H19.8336C21.0537 22.6675 22.2414 23.0609 23.22 23.7897C24.1986 24.5184 24.9159 25.5435 25.2651 26.7126" stroke="#B92325" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text-part">
                            <span class="title-3 fw_semibold">
                                100+
                            </span>
                        <span class="fw_medium">
                                Expert engineer
                            </span>
                    </div>
                </div>
                <div class="single-achivment">
                    <div class="icon-part">
                        <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10514_11171)">
                                <path d="M7.58398 24.0833C7.58398 24.8348 7.8825 25.5554 8.41385 26.0868C8.9452 26.6182 9.66587 26.9167 10.4173 26.9167C11.1688 26.9167 11.8894 26.6182 12.4208 26.0868C12.9521 25.5554 13.2507 24.8348 13.2507 24.0833C13.2507 23.3319 12.9521 22.6112 12.4208 22.0799C11.8894 21.5485 11.1688 21.25 10.4173 21.25C9.66587 21.25 8.9452 21.5485 8.41385 22.0799C7.8825 22.6112 7.58398 23.3319 7.58398 24.0833Z" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M21.75 24.0833C21.75 24.8348 22.0485 25.5554 22.5799 26.0868C23.1112 26.6182 23.8319 26.9167 24.5833 26.9167C25.3348 26.9167 26.0554 26.6182 26.5868 26.0868C27.1182 25.5554 27.4167 24.8348 27.4167 24.0833C27.4167 23.3319 27.1182 22.6112 26.5868 22.0799C26.0554 21.5485 25.3348 21.25 24.5833 21.25C23.8319 21.25 23.1112 21.5485 22.5799 22.0799C22.0485 22.6112 21.75 23.3319 21.75 24.0833Z" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.58333 24.0833H4.75V15.5833M4.75 15.5833L7.58333 8.5H20.3333L26 15.5833M4.75 15.5833H26M26 15.5833H27.4167C28.1681 15.5833 28.8888 15.8818 29.4201 16.4132C29.9515 16.9446 30.25 17.6652 30.25 18.4167V24.0833H27.4167M21.75 24.0833H13.25M17.5 15.5833V8.5" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text-part">
                            <span class="title-3 fw_semibold">
                                400+
                            </span>
                        <span class="fw_medium">
                                Total Car Repair
                            </span>
                    </div>
                </div>
                <div class="single-achivment">
                    <div class="icon-part">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10514_11181)">
                                <path d="M9.91602 18.4167C9.91602 19.9196 10.513 21.3609 11.5757 22.4236C12.6384 23.4863 14.0798 24.0833 15.5827 24.0833C17.0856 24.0833 18.5269 23.4863 19.5896 22.4236C20.6523 21.3609 21.2493 19.9196 21.2493 18.4167C21.2493 16.9138 20.6523 15.4724 19.5896 14.4097C18.5269 13.347 17.0856 12.75 15.5827 12.75C14.0798 12.75 12.6384 13.347 11.5757 14.4097C10.513 15.4724 9.91602 16.9138 9.91602 18.4167Z" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.7183 15.582C26.843 16.517 26.9167 17.724 26.9167 18.4154C26.9167 20.6569 26.252 22.8481 25.0067 24.7118C23.7613 26.5756 21.9913 28.0282 19.9204 28.886C17.8495 29.7438 15.5708 29.9682 13.3723 29.5309C11.1739 29.0936 9.15446 28.0142 7.56946 26.4292C5.98447 24.8442 4.90507 22.8248 4.46777 20.6264C4.03047 18.4279 4.25491 16.1492 5.1127 14.0783C5.9705 12.0074 7.42312 10.2374 9.28688 8.99204C11.1506 7.74672 13.3418 7.08203 15.5833 7.08203H24.0833" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.584 12.75C19.1101 12.903 21.9434 12.903 24.084 12.75" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24.084 5.66667C24.084 5.29094 24.2332 4.93061 24.4989 4.66493C24.7646 4.39926 25.1249 4.25 25.5007 4.25H28.334C28.7097 4.25 29.07 4.39926 29.3357 4.66493C29.6014 4.93061 29.7507 5.29094 29.7507 5.66667V14.1667C29.7507 14.5424 29.6014 14.9027 29.3357 15.1684C29.07 15.4341 28.7097 15.5833 28.334 15.5833H25.5007C25.1249 15.5833 24.7646 15.4341 24.4989 15.1684C24.2332 14.9027 24.084 14.5424 24.084 14.1667V5.66667Z" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.5833 18.418L10.625 16.293" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.584 18.418L19.1257 22.668" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.041 22.668L15.5827 18.418" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.584 18.418L20.5423 16.293" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.584 12.75V18.4167" stroke="#B92325" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </div>
                    <div class="text-part">
                            <span class="title-3 fw_semibold">
                                200+
                            </span>
                        <span class="fw_medium">
                                Total branch
                            </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="ourmission-vision pat-120 pab-120 bg-image-use" style="background-image: url(./assets/images/bg1.jpg);">
        <div class="custom-container">
            <div class="mission-vision-wraper">
                <div class="row align-items-center justify-between">
                    <div class="col-lg-5">
                        <div class="text-part">
                            <h2 class="title-2 fw_semibold">Our Mission</h2>
                            <div class="des">
                                <p>Our mission is to provide top quality automotive repair and maintenance services that our customers can rely on with complete confidence. We are dedicated to ensuring the safety, performance, and longevity of every</p>
                                <p>vehicle we service. We strive to deliver honest assessments, transparent pricing, and dependable workmanship using the latest tools and diagnostic technologies. Our goal is to make every customer feel valued through personalized service, timely communication</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="img-wraper">
                            <img src="../assets/frontend/images/our-mission.png" alt="mission">
                        </div>
                    </div>
                </div>
            </div>
            <div class="mission-vision-wraper mt-80">
                <div class="row align-items-center justify-between">
                    <div class="col-lg-6">
                        <div class="img-wraper">
                            <img src="../assets/frontend/images/our-mission.png" alt="mission">
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="text-part">
                            <h2 class="title-2 fw_semibold">Our Mission</h2>
                            <div class="des">
                                <p>Our mission is to provide top quality automotive repair and maintenance services that our customers can rely on with complete confidence. We are dedicated to ensuring the safety, performance, and longevity of every</p>
                                <p>vehicle we service. We strive to deliver honest assessments, transparent pricing, and dependable workmanship using the latest tools and diagnostic technologies. Our goal is to make every customer feel valued through personalized service, timely communication</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="expert-member-section pat-120 pab-60">
        <div class="custom-container">
            <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
                <h2 class="title-2 fw_semibold">
                    Expert Team Members
                </h2>
                <div class="btn-wraper">
                    <a href="#/" class="cmn-btn primary-btn">All Members</a>
                </div>
            </div>
            <div class="member-card-wraper">
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6">
                        <div class="member-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/member.png" alt="member">
                            </div>
                            <div class="text-part">
                                <h4 class="name fw_semibold subtitle-4">
                                    <a href="#/">
                                        Michael Turner
                                    </a>
                                </h4>
                                <div class="designation">
                                    Car Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="member-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/member.png" alt="member">
                            </div>
                            <div class="text-part">
                                <h4 class="name fw_semibold subtitle-4">
                                    <a href="#/">
                                        Michael Turner
                                    </a>
                                </h4>
                                <div class="designation">
                                    Car Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="member-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/member.png" alt="member">
                            </div>
                            <div class="text-part">
                                <h4 class="name fw_semibold subtitle-4">
                                    <a href="#/">
                                        Michael Turner
                                    </a>
                                </h4>
                                <div class="designation">
                                    Car Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="member-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/member.png" alt="member">
                            </div>
                            <div class="text-part">
                                <h4 class="name fw_semibold subtitle-4">
                                    <a href="#/">
                                        Michael Turner
                                    </a>
                                </h4>
                                <div class="designation">
                                    Car Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@include('frontend.user.layout.partial.common_footer')
