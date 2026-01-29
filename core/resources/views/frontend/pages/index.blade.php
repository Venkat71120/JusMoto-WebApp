@include('frontend.user.layout.partial.common_header')
<header class="header asbolute-header">
    <nav class="navbar navbar-area navbar-expand-lg">
        <div class="custom-container container nav-container">
            <div class="logo-wrapper">
                <a href="index.html" class="navbar-brand">
                    <img src="{{ asset('assets/frontend/images/gocar-logo.png') }}" alt="GoCarLogo">
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
                        <a href="index.html" class="active">Home</a>
                    </li>
                    <li>
                        <a href="about.html">About Us</a>
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
    <section class="banner-area hero-section" style="background-image: linear-gradient(#0000004D, #0000004D), url('../assets/frontend/images/banner.png') ;">
        <div class="custom-container">
            <div class="banner-text-part-wraper">
                <h1 class="main-title white-text">
                    Expert Car Service Seamless Experience
                </h1>
                <p class="white-shade-text fw_medium fs-md">
                    Enjoy peace of mind with expert car services tailored to your needs from routine maintenance to complex repairs we connect you
                </p>
                <div class="banner-bottom-part">
                    <div class="banner-btn-wraper">
                        <a href="#/" class="cmn-btn primary-btn">All Service</a>
                    </div>
                    <div class="banner-trusted-user-part">
                        <div class="user-trust-avatar">
                            <div class="image-wraper">
                                    <span class="image">
                                        <img src="../assets/frontend/images/banner-small1.png" alt="banner">
                                    </span>
                                <span class="image">
                                        <img src="../assets/frontend/images/banner-small2.png" alt="banner">
                                    </span>
                                <span class="image white-text">
                                        <i class="fas fa-plus"></i>
                                    </span>
                            </div>
                            <div class="avatar-user-trust-text white-text">
                                Trusted by 1200+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="custom-container">
            <div class="fetured-section-wraper">
                <div class="featured-card">
                    <div class="featured-card-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <div class="featured-card-text">
                        <h5 class="featured-card-title fs-lg">
                            Customer Support
                        </h5>
                        <p class="featured-card-subtitle threeline">
                            Help anytime we're here 24/7 for all your service.
                        </p>
                    </div>
                </div>
                <div class="featured-card">
                    <div class="featured-card-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <div class="featured-card-text">
                        <h5 class="featured-card-title fs-lg">
                            Customer Support
                        </h5>
                        <p class="featured-card-subtitle threeline">
                            Help anytime we're here 24/7 for all your service.
                        </p>
                    </div>
                </div>
                <div class="featured-card">
                    <div class="featured-card-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <div class="featured-card-text">
                        <h5 class="featured-card-title fs-lg">
                            Customer Support
                        </h5>
                        <p class="featured-card-subtitle threeline">
                            Help anytime we're here 24/7 for all your service.
                        </p>
                    </div>
                </div>
                <div class="featured-card">
                    <div class="featured-card-icon">
                        <i class="fas fa-car"></i>
                    </div>
                    <div class="featured-card-text">
                        <h5 class="featured-card-title fs-lg">
                            Customer Support
                        </h5>
                        <p class="featured-card-subtitle threeline">
                            Help anytime we're here 24/7 for all your service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fetured-service-section bg-image-use  pab-120 pat-230" style="background-image: url(./assets/images/bg1.jpg);">
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
    <section class="explore-servies pat-120 pab-120">
        <div class="custom-container">
            <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
                <h2 class="title-2 fw_semibold">
                    Explore Our Services
                </h2>
                <div class="btn-wraper">
                    <a href="#/" class="cmn-btn primary-btn">All Service</a>
                </div>
            </div>
            <div class="service-list-wraper" >
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/products1.png" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield Repair & Protection Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/service-card1.jpg" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield  Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/service-card1.jpg" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield Repair & Protection Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/service-card1.jpg" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield  Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/service-card1.jpg" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield Repair & Protection Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/service-card1.jpg" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        AutoShield  Service
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="related-product pat-120 pab-120 bg-image-use" style="background-image: url(./assets/images/bg1.jpg);">
        <div class="custom-container">
            <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
                <h2 class="title-2 fw_semibold">
                    Related Products
                </h2>
            </div>
            <div class="related-product-list-wraper">
                <div class="row g-4">
                    <div class="col-lg-3 col-md-6">
                        <div class="products-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/products1.png" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        Vehicle Diagnostic & Repair Categories
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="products-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/products1.png" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        Vehicle Diagnostic & Repair Categories
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="products-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/.png" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        Vehicle Diagnostic & Repair Categories
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="products-card">
                            <div class="top-part">
                                <div class="img-wraper">
                                    <img src="../assets/frontend/images/products1.png" alt="scard1">
                                    <span class="fvt-icon">
                                            <i class="icon-base ti tabler-heart-filled"></i>
                                        </span>
                                </div>
                            </div>
                            <div class="bottom-part">
                                <div class="title-wraper">
                                    <h6 class="fw_semibold subtitle-4 twoline">
                                        Vehicle Diagnostic & Repair Categories
                                    </h6>
                                    <div class="star fs-md d-flex gap-2">
                                        <span class="yellow-text"><i class="fas fa-star"></i></span>
                                        <span class="black-text fw_semibold">4.0</span>
                                    </div>
                                </div>
                                <div class="footer-part">
                                    <div class="price fw_semibold subtitle-1 red-text">$60.99</div>
                                    <div class="add-btn-wraper">
                                        <a href="#/" class="cmn-btn sm-btn black-btn">
                                            <i class="icon-base ti tabler-shopping-cart"></i>
                                            Add
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="why-chose-us pat-120 pab-60">
        <div class="custom-container">
            <div class="why-chose-wraper">
                <div class="car-pic-wraper">
                    <img src="../assets/frontend/images/car-pic.png" alt="car-pic">
                </div>
                <div class="top-text-part d-flex justify-between">
                    <h2 class="title-2 fw_semibold mw-400">
                        Why Choosing Our Services
                    </h2>
                    <p class="des mw-500">Choose our car repair service for expert technicians, genuine parts, and transparent pricing. We ensure fast reliable fixes with full warranty coverage keeping your</p>
                </div>
                <div class="bottom-list-wraper d-flex justify-content-between">
                    <div class="why-chose-list-left mw-500 w-100">
                        <div class="why-chose-list-item mw-400">
                            <div class="icon-wraper">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.9058 26.9193H26.9193M26.9058 26.9193C26.0237 27.7941 24.4249 27.5762 23.3038 27.5762C21.9276 27.5762 21.2649 27.8453 20.2828 28.8275C19.4465 29.6639 18.3253 31.1693 17.0026 31.1693C15.6799 31.1693 14.5587 29.6639 13.7224 28.8275C12.7403 27.8453 12.0775 27.5762 10.7014 27.5762C9.58023 27.5762 7.98153 27.7941 7.09938 26.9193C6.21017 26.0375 6.429 24.4322 6.429 23.3038C6.429 21.8779 6.11716 21.2223 5.10173 20.2068C3.59122 18.6964 2.83597 17.941 2.83594 17.0026C2.83595 16.0641 3.59119 15.3088 5.10168 13.7983C6.00814 12.8919 6.429 11.9937 6.429 10.7014C6.429 9.58019 6.21113 7.98147 7.08594 7.09931C7.96771 6.21013 9.57304 6.42897 10.7014 6.42897C11.9937 6.42897 12.8919 6.00814 13.7983 5.10171C15.3088 3.59119 16.0641 2.83594 17.0026 2.83594C17.9411 2.83594 18.6964 3.59119 20.2068 5.10171C21.1131 6.00795 22.0112 6.42897 23.3038 6.42897C24.4249 6.42897 26.0238 6.2111 26.906 7.08594C27.7951 7.96771 27.5762 9.57302 27.5762 10.7014C27.5762 12.1273 27.8881 12.7829 28.9035 13.7983C30.414 15.3088 31.1693 16.0641 31.1693 17.0026C31.1693 17.941 30.414 18.6964 28.9035 20.2068C27.888 21.2223 27.5762 21.8779 27.5762 23.3038C27.5762 24.4322 27.7951 26.0375 26.9058 26.9193Z" stroke="white" stroke-width="2"/>
                                    <path d="M12.75 18.2675L15.3 20.5443L21.25 13.4609" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="text-wraper">
                                <h4 class="fw_semibold subtitle-2">
                                    Repair Warranty Coverage
                                </h4>
                                <p class="des mt-2">
                                    We only use genuine parts to ensure your vehicle's safety and longevity.
                                </p>
                            </div>
                        </div>
                        <div class="why-chose-list-item mw-400">
                            <div class="icon-wraper">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.9058 26.9193H26.9193M26.9058 26.9193C26.0237 27.7941 24.4249 27.5762 23.3038 27.5762C21.9276 27.5762 21.2649 27.8453 20.2828 28.8275C19.4465 29.6639 18.3253 31.1693 17.0026 31.1693C15.6799 31.1693 14.5587 29.6639 13.7224 28.8275C12.7403 27.8453 12.0775 27.5762 10.7014 27.5762C9.58023 27.5762 7.98153 27.7941 7.09938 26.9193C6.21017 26.0375 6.429 24.4322 6.429 23.3038C6.429 21.8779 6.11716 21.2223 5.10173 20.2068C3.59122 18.6964 2.83597 17.941 2.83594 17.0026C2.83595 16.0641 3.59119 15.3088 5.10168 13.7983C6.00814 12.8919 6.429 11.9937 6.429 10.7014C6.429 9.58019 6.21113 7.98147 7.08594 7.09931C7.96771 6.21013 9.57304 6.42897 10.7014 6.42897C11.9937 6.42897 12.8919 6.00814 13.7983 5.10171C15.3088 3.59119 16.0641 2.83594 17.0026 2.83594C17.9411 2.83594 18.6964 3.59119 20.2068 5.10171C21.1131 6.00795 22.0112 6.42897 23.3038 6.42897C24.4249 6.42897 26.0238 6.2111 26.906 7.08594C27.7951 7.96771 27.5762 9.57302 27.5762 10.7014C27.5762 12.1273 27.8881 12.7829 28.9035 13.7983C30.414 15.3088 31.1693 16.0641 31.1693 17.0026C31.1693 17.941 30.414 18.6964 28.9035 20.2068C27.888 21.2223 27.5762 21.8779 27.5762 23.3038C27.5762 24.4322 27.7951 26.0375 26.9058 26.9193Z" stroke="white" stroke-width="2"/>
                                    <path d="M12.75 18.2675L15.3 20.5443L21.25 13.4609" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="text-wraper">
                                <h4 class="fw_semibold subtitle-2">
                                    Repair Warranty Coverage
                                </h4>
                                <p class="des mt-2">
                                    We only use genuine parts to ensure your vehicle's safety and longevity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="why-chose-list-right mw-500 w-100">
                        <div class="why-chose-list-item mw-400">
                            <div class="icon-wraper">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.9058 26.9193H26.9193M26.9058 26.9193C26.0237 27.7941 24.4249 27.5762 23.3038 27.5762C21.9276 27.5762 21.2649 27.8453 20.2828 28.8275C19.4465 29.6639 18.3253 31.1693 17.0026 31.1693C15.6799 31.1693 14.5587 29.6639 13.7224 28.8275C12.7403 27.8453 12.0775 27.5762 10.7014 27.5762C9.58023 27.5762 7.98153 27.7941 7.09938 26.9193C6.21017 26.0375 6.429 24.4322 6.429 23.3038C6.429 21.8779 6.11716 21.2223 5.10173 20.2068C3.59122 18.6964 2.83597 17.941 2.83594 17.0026C2.83595 16.0641 3.59119 15.3088 5.10168 13.7983C6.00814 12.8919 6.429 11.9937 6.429 10.7014C6.429 9.58019 6.21113 7.98147 7.08594 7.09931C7.96771 6.21013 9.57304 6.42897 10.7014 6.42897C11.9937 6.42897 12.8919 6.00814 13.7983 5.10171C15.3088 3.59119 16.0641 2.83594 17.0026 2.83594C17.9411 2.83594 18.6964 3.59119 20.2068 5.10171C21.1131 6.00795 22.0112 6.42897 23.3038 6.42897C24.4249 6.42897 26.0238 6.2111 26.906 7.08594C27.7951 7.96771 27.5762 9.57302 27.5762 10.7014C27.5762 12.1273 27.8881 12.7829 28.9035 13.7983C30.414 15.3088 31.1693 16.0641 31.1693 17.0026C31.1693 17.941 30.414 18.6964 28.9035 20.2068C27.888 21.2223 27.5762 21.8779 27.5762 23.3038C27.5762 24.4322 27.7951 26.0375 26.9058 26.9193Z" stroke="white" stroke-width="2"/>
                                    <path d="M12.75 18.2675L15.3 20.5443L21.25 13.4609" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="text-wraper">
                                <h4 class="fw_semibold subtitle-2">
                                    Repair Warranty Coverage
                                </h4>
                                <p class="des mt-2">
                                    We only use genuine parts to ensure your vehicle's safety and longevity.
                                </p>
                            </div>
                        </div>
                        <div class="why-chose-list-item mw-400">
                            <div class="icon-wraper">
                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.9058 26.9193H26.9193M26.9058 26.9193C26.0237 27.7941 24.4249 27.5762 23.3038 27.5762C21.9276 27.5762 21.2649 27.8453 20.2828 28.8275C19.4465 29.6639 18.3253 31.1693 17.0026 31.1693C15.6799 31.1693 14.5587 29.6639 13.7224 28.8275C12.7403 27.8453 12.0775 27.5762 10.7014 27.5762C9.58023 27.5762 7.98153 27.7941 7.09938 26.9193C6.21017 26.0375 6.429 24.4322 6.429 23.3038C6.429 21.8779 6.11716 21.2223 5.10173 20.2068C3.59122 18.6964 2.83597 17.941 2.83594 17.0026C2.83595 16.0641 3.59119 15.3088 5.10168 13.7983C6.00814 12.8919 6.429 11.9937 6.429 10.7014C6.429 9.58019 6.21113 7.98147 7.08594 7.09931C7.96771 6.21013 9.57304 6.42897 10.7014 6.42897C11.9937 6.42897 12.8919 6.00814 13.7983 5.10171C15.3088 3.59119 16.0641 2.83594 17.0026 2.83594C17.9411 2.83594 18.6964 3.59119 20.2068 5.10171C21.1131 6.00795 22.0112 6.42897 23.3038 6.42897C24.4249 6.42897 26.0238 6.2111 26.906 7.08594C27.7951 7.96771 27.5762 9.57302 27.5762 10.7014C27.5762 12.1273 27.8881 12.7829 28.9035 13.7983C30.414 15.3088 31.1693 16.0641 31.1693 17.0026C31.1693 17.941 30.414 18.6964 28.9035 20.2068C27.888 21.2223 27.5762 21.8779 27.5762 23.3038C27.5762 24.4322 27.7951 26.0375 26.9058 26.9193Z" stroke="white" stroke-width="2"/>
                                    <path d="M12.75 18.2675L15.3 20.5443L21.25 13.4609" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="text-wraper">
                                <h4 class="fw_semibold subtitle-2">
                                    Repair Warranty Coverage
                                </h4>
                                <p class="des mt-2">
                                    We only use genuine parts to ensure your vehicle's safety and longevity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="cta-section pat-60 pab-120">
        <div class="custom-container">
            <div class="cta-wraper bg-image-use" style="background-image: url(./assets/images/bg1.jpg);">
                <div class="text-part-wraper">
                    <h2 class="title-2 fw_semibold">Download for the Car Service app</h2>
                    <div class="btn-wraper d-flex gap-3">
                        <div class="store-btn">
                            <a href="#/" class="app-store">
                                    <span class="icon">
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.719 1.05078C13.7262 1.12027 13.7347 1.2175 13.741 1.33634C13.7535 1.5727 13.7575 1.90132 13.7229 2.27102C13.6563 2.98291 13.4342 3.98119 12.7077 4.70768C11.9812 5.43416 10.9829 5.65633 10.271 5.72293C9.90132 5.75752 9.5727 5.75345 9.33634 5.74096C9.2175 5.73468 9.12027 5.72617 9.05078 5.71896L8.93083 5.70459C8.6023 5.65683 8.34324 5.3982 8.29549 5.06967L8.28104 4.94922C8.27383 4.87973 8.26532 4.7825 8.25904 4.66367C8.24655 4.4273 8.24248 4.09868 8.27707 3.72898C8.34367 3.01709 8.56584 2.01881 9.29232 1.29232C10.0188 0.565838 11.0171 0.343674 11.729 0.277071C12.0987 0.242482 12.4273 0.24655 12.6637 0.259043C12.7825 0.265323 12.8797 0.273827 12.9492 0.281039L13.0692 0.295416C13.3977 0.343167 13.6568 0.601804 13.7045 0.930329L13.719 1.05078Z" fill="black"/>
                                            <path d="M1.77858 8.09078C2.7609 6.88966 4.13419 6.25 5.64044 6.25C6.64385 6.25 7.52605 6.65205 8.19014 7.08427C8.89445 7.54267 9.60487 7.54267 10.3092 7.08427C10.9733 6.65205 11.8555 6.25 12.8589 6.25C14.6963 6.25 16.3163 7.19962 17.2853 8.92065C17.391 9.10835 17.4109 9.33244 17.3399 9.53582C17.2689 9.7392 17.1139 9.90223 16.9143 9.98337C15.8732 10.4067 15.1557 11.4049 15.1557 12.5544C15.1557 13.8087 16.0114 14.884 17.2065 15.2263C17.403 15.2826 17.5681 15.4167 17.6634 15.5975C17.7588 15.7783 17.7762 15.9902 17.7116 16.1842C17.2992 17.4234 16.6749 18.5988 15.9333 19.5488C15.2 20.4881 14.3066 21.2641 13.3335 21.6129C12.1815 22.0258 11.098 21.4268 10.4145 20.937C10.1845 20.7721 9.94686 20.6233 9.72517 20.5182C9.49322 20.4083 9.33542 20.3736 9.24966 20.3736C9.16391 20.3736 9.00611 20.4083 8.77416 20.5182C8.55247 20.6233 8.3148 20.7721 8.0848 20.937C7.40131 21.4268 6.31784 22.0258 5.16585 21.6129C3.81055 21.1272 2.58989 19.8062 1.7243 18.2862C0.845949 16.7438 0.25 14.8542 0.25 13.0593C0.25 10.9787 0.80404 9.2824 1.77858 8.09078Z" fill="black"/>
                                        </svg>
                                    </span>
                                <span class="text black-text">
                                        <span class="fs-xs">Download on the</span>
                                        <span class="fw_medium">App Store</span>
                                    </span>
                            </a>
                        </div>
                        <div class="store-btn">
                            <a href="#/" class="app-store">
                                    <span class="icon">
                                        <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.360788 1.28316C0.134062 1.52312 0 1.8957 0 2.37844V19.6205C0 20.1037 0.134101 20.4758 0.360788 20.7158L0.418478 20.772L10.0771 11.1134V10.8855L0.418478 1.22656L0.360788 1.28316Z" fill="#01CAFF"/>
                                            <path d="M13.2975 14.333L10.0781 11.112V10.8842L13.2982 7.66406L13.3708 7.70546L17.1853 9.87289C18.2749 10.4919 18.2749 11.5048 17.1853 12.1242L13.3708 14.2916L13.2975 14.333Z" fill="#FFC600"/>
                                            <path d="M13.3685 14.293L10.0757 11L0.359375 20.7163C0.718635 21.0965 1.31144 21.1436 1.97951 20.7641L13.3685 14.293Z" fill="#F83448"/>
                                            <path d="M13.3685 7.70581L1.97951 1.2347C1.31144 0.855272 0.718635 0.902348 0.359375 1.28256L10.0757 10.9989L13.3685 7.70581Z" fill="#01F076"/>
                                        </svg>
                                    </span>
                                <span class="text black-text">
                                        <span class="fs-xs">Download on the</span>
                                        <span class="fw_medium">App Store</span>
                                    </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="img-part">
                    <img src="../assets/frontend/images/cta-image.png" alt="cta">
                </div>
            </div>
        </div>
    </section>
    <section class="client-review-section pat-120 pab-120 bg-image-use" style="background-image: url(./assets/images/bg1.jpg);">
        <div class="custom-container">
            <div class="client-review-wraper">
                <div class="client-review-title-part-wraper">
                    <div class="top-part">
                        <h2 class="title-2 fw_semibold">What Our Client Say About Us</h2>
                        <div class="user-trust-avatar mt-4">
                            <div class="image-wraper">
                                    <span class="image">
                                        <img src="../assets/frontend/images/banner-small1.png" alt="banner">
                                    </span>
                                <span class="image">
                                        <img src="../assets/frontend/images/banner-small2.png" alt="banner">
                                    </span>
                                <span class="image white-text">
                                        <i class="fas fa-plus"></i>
                                    </span>
                            </div>
                            <div class="avatar-user-trust-text">
                                Trusted by 20k users
                            </div>
                        </div>
                    </div>
                    <div class="bottom-part">
                        <div class="review-slider-btn d-flex gap-3"></div>
                    </div>
                </div>
                <div class="review-slider-wraper">
                    <div class=" global-slick-init"
                         data-arrows="true"
                         data-prevarrow="<span class='slider-btn next-arrow'><i class='icon-base ti tabler-arrow-left'></i></span>"
                         data-nextarrow="<span class='slider-btn next-arrow'><i class='icon-base ti tabler-arrow-right'></i></span>"
                         data-appendarrows=".review-slider-btn">
                        <div class="review-slider-card">
                            <div class="reviewer-part">
                                <div class="reviewer-image">
                                    <img src="../assets/frontend/images/banner-small1.png" alt="banner">
                                </div>
                                <div class="reviewer-text">
                                    <h4 class="fw_semibold subtitle-2">
                                        Brian Barnes
                                    </h4>
                                    <p class="designation fs-md">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                            <div class="review-text subtitle-2 paragraph-text-two">
                                Highly professional and efficient service. The technicians diagnosed the issue quickly and completed the repairs ahead of
                            </div>
                            <div class="review-rating yellow-text-two d-flex gap-2 fs-md">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div class="review-slider-card">
                            <div class="reviewer-part">
                                <div class="reviewer-image">
                                    <img src="../assets/frontend/images/banner-small1.png" alt="banner">
                                </div>
                                <div class="reviewer-text">
                                    <h4 class="fw_semibold subtitle-2">
                                        Brian Barnes
                                    </h4>
                                    <p class="designation fs-md">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                            <div class="review-text subtitle-2 paragraph-text-two">
                                Highly professional and efficient service. The technicians diagnosed the issue quickly and completed the repairs ahead of
                            </div>
                            <div class="review-rating yellow-text-two d-flex gap-2 fs-md">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                        <div class="review-slider-card">
                            <div class="reviewer-part">
                                <div class="reviewer-image">
                                    <img src="../assets/frontend/images/banner-small1.png" alt="banner">
                                </div>
                                <div class="reviewer-text">
                                    <h4 class="fw_semibold subtitle-2">
                                        Brian Barnes
                                    </h4>
                                    <p class="designation fs-md">
                                        CEO & Founder
                                    </p>
                                </div>
                            </div>
                            <div class="review-text subtitle-2 paragraph-text-two">
                                Highly professional and efficient service. The technicians diagnosed the issue quickly and completed the repairs ahead of
                            </div>
                            <div class="review-rating yellow-text-two d-flex gap-2 fs-md">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="blog-section pat-120 pab-60">
        <div class="custom-container">
            <div class="title-wraper-part d-flex flex-wrap gap-3 justify-between mb-60">
                <h2 class="title-2 fw_semibold">
                    Our Recent Blog
                </h2>
                <div class="btn-wraper">
                    <a href="#/" class="cmn-btn primary-btn">See All Blog</a>
                </div>
            </div>
            <div class="blog-card-wraper">
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/blog1.png" alt="blog">
                            </div>
                            <div class="text-part">
                                <div class="date fs-md">
                                    Jun 4, 2025
                                </div>
                                <h4 class="fw_semibold subtitle-2">
                                    <a href="#/">
                                        Maintenance Advice and Car Care Insights for Every Driver
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/blog1.png" alt="blog">
                            </div>
                            <div class="text-part">
                                <div class="date fs-md">
                                    Jun 4, 2025
                                </div>
                                <h4 class="fw_semibold subtitle-2">
                                    <a href="#/">
                                        Maintenance Advice and Car Care Insights for Every Driver
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="blog-card">
                            <div class="image-wraper">
                                <img src="../assets/frontend/images/blog1.png" alt="blog">
                            </div>
                            <div class="text-part">
                                <div class="date fs-md">
                                    Jun 4, 2025
                                </div>
                                <h4 class="fw_semibold subtitle-2">
                                    <a href="#/">
                                        Maintenance Advice and Car Care Insights for Every Driver
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @include('frontend.user.layout.partial.common_footer')
