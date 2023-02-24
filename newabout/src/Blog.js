import React from "react";
import "./Blog.css";
class Blog extends React.Component{
    render(){
            return(
            <div>

{/*     <!-- Topbar Start -->*/}
<div class="container-fluid bg-dark p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Auto Cluster, Pimpri-Chinchwad 411-018</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <small>+012 345 6789</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center mx-n2">
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.notion.so/desktop"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.notion.so/desktop"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href="https://www.notion.so/desktop"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-square btn-link rounded-0" href="https://www.notion.so/desktop"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
{/*     <!-- Topbar End -->
 */}

{/*     <!-- Navbar Start -->
 */}   
     <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
        <a href="https://www.notion.so/desktopindex.html" class="navbar-brand d-flex align-items-center border-end px-4 px-lg-5">
            {/*<h2 class="m-0 text-primary">EnergyBae</h2>*/}
            <div>
            <div class="position-relative h-100">
                        <img class="position:left-corner w-50 h-10 " src="/Assets/img/Energy-Bae.jpg"  alt=""/>
            </div>
            </div>
        </a>
        <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto p-4 p-lg-0">
                <a href="https://www.notion.so/desktopindex.html" class="nav-item nav-link">Home</a>
                <a href="https://www.notion.so/desktopabout.html" class="nav-item nav-link">About</a>
                <a href="https://www.notion.so/desktopservice.html" class="nav-item nav-link">Service</a>
                <a href="https://www.notion.so/desktopproject.html" class="nav-item nav-link">Products</a>
                <div class="nav-item dropdown">
                    <a href="https://www.notion.so/desktop#" class="nav-link active dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="https://www.notion.so/desktopfeature.html" class="dropdown-item">Feature</a>
                        <a href="https://www.notion.so/desktopquote.html" class="dropdown-item">Free Quote</a>
                        <a href="https://www.notion.so/desktoptestimonial.html" class="dropdown-item">Testimonial</a>
                       
                    </div>
                </div>
                <a href="https://www.notion.so/desktopcontact.html" class="nav-item nav-link">Contact</a>
            </div>
           {/* <a href="https://www.notion.so/desktop" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a></nav>*/}
        </div>
    </nav>
{/*     <!-- Navbar End -->
 */}

{/*     <!-- Page Header Start -->
 */} 
    <div class="container-fluid page-header py-5 mb-5">
        <div class="container py-5">
            <h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a class="text-white" href="https://www.notion.so/desktop#">Home</a></li>
                    <li class="breadcrumb-item"><a class="text-white" href="https://www.notion.so/desktop#">Pages</a></li>
                    <li class="breadcrumb-item text-white active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
{/*     <!-- Page Header End -->
 */}

{/*     <!-- Feature Start -->
 
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0" >
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h4 class="text-primary">Why Choose Us!</h4>
                        <h1 class="mb-4">Complete Commercial & Residential Solar Systems</h1>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary poppins me-3"></i>Experience</p>
                        <p style={{color: "#4a4747"}}>Before creating this end-to-end marketplace, we researched and made products in the field ranging from hydrogen energy to Piezoelectricity. This gives us in-depth knowledge and a network in the renewable industry.</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3"></i>The Golden Ratio</p>
                        <p style={{color: "#4a4747"}}>This vast experience in energy fields helped us design the “Golden ratio”. It is the ratio of energy (eg, solar+wind, solar+Biogas+wind, etc) that is unique for each location. Every customer site has unique natural properties, if we depend on only one source of energy(eg, solar) then in monsoon the efficiency will drop. The same is true for wind and biogas in their respective seasons. So, true energy independence starts with designing a golden ratio.</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3"></i>End-To-End Solution</p>
                        <p style={{color: "#4a4747"}}>Right from energy audit to civil work and beyond, we are there with you with our 24X7 customer care.</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3"></i>Broad Range of Solutions</p>
                        <p style={{color: "#4a4747"}}>From a solar panel to a biogas plant to a Helical wind turbine, we he all solutions under one roof. This gives our customers and us the freedom to choose from a variety of solution.</p>

                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Quality</p>
                                        <h5 class="mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-user-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Expert</p>
                                        <h5 class="mb-0">Vendors</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Free</p>
                                        <h5 class="mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-headphones text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Customer</p>
                                        <h5 class="mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s">
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="/Assets/img/Solar-Panels.jpg" alt="Solar"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
{/*     <!-- Feature Start -->
 */}    



    {/*-- Service Start */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h3 class="text-primary">Blogs</h3>
                <h1 class="mb-4">We Are Pioneers In The World Of Renewable Energy</h1>
            </div>
            <div class="row g-4">
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-1.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Solar Panels</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-2.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Wind Turbines</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-3.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Hydropower Plants</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-4.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-solar-panel fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Solar Panels</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-5.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-wind fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Wind Turbines</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="service-item rounded overflow-hidden">
                        <img class="img-fluid" src="img/img-600x400-6.jpg" alt=""/>
                        <div class="position-relative p-4 pt-0">
                            <div class="service-icon">
                                <i class="fa fa-lightbulb fa-3x"></i>
                            </div>
                            <h4 class="mb-3">Hydropower Plants</h4>
                            <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam.</p>
                            <a class="small fw-medium" href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/">Read More<i class="fa fa-arrow-right ms-2"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Service End */}


    {/*-- Feature Start 
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h6 class="text-primary">Why Choose Us!</h6>
                        <h1 class="mb-4">Complete Commercial & Residential Solar Systems</h1>
                        <p class="mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        <div class="row g-4">
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Quality</p>
                                        <h5 class="mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-user-check text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Expert</p>
                                        <h5 class="mb-0">Workers</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-drafting-compass text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Free</p>
                                        <h5 class="mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="d-flex align-items-center">
                                    <div class="btn-lg-square bg-primary rounded-circle">
                                        <i class="fa fa-headphones text-white"></i>
                                    </div>
                                    <div class="ms-4">
                                        <p class="mb-0">Customer</p>
                                        <h5 class="mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" >
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Feature End 


    {/*-- Testimonial Start 
    <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary">Testimonial</h6>
                <h1 class="mb-4">What Our Clients Say!</h1>
            </div>
            <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="/Assets/img/testimonial-1.jpg" alt=""/>
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-2.jpg" alt=""/>
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
                <div class="testimonial-item text-center">
                    <div class="testimonial-img position-relative">
                        <img class="img-fluid rounded-circle mx-auto mb-5" src="img/testimonial-3.jpg" alt=""/>
                        <div class="btn-square bg-primary rounded-circle">
                            <i class="fa fa-quote-left text-white"></i>
                        </div>
                    </div>
                    <div class="testimonial-text text-center rounded p-4">
                        <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.</p>
                        <h5 class="mb-1">Client Name</h5>
                        <span class="fst-italic">Profession</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*-- Testimonial End */}
        

   
{/*     <!-- Footer Start -->
 */}    
    <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Address</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Auto Cluster, Chinchwad 411-018 </p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-light btn-social" href="https://www.notion.so/desktop"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href="https://www.notion.so/desktop"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href="https://www.notion.so/desktop"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-light btn-social" href="https://www.notion.so/desktop"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Quick Links</h5>
                    <a class="btn btn-link" href="https://www.notion.so/desktop">About Us</a>
                    <a class="btn btn-link" href="https://www.notion.so/desktop">Contact Us</a>
                    <a class="btn btn-link" href="https://www.notion.so/desktop">Our Services</a>
                    <a class="btn btn-link" href="https://www.notion.so/desktop">Terms & Condition</a>
                    <a class="btn btn-link" href="https://www.notion.so/desktop">Support</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Project Gallery</h5>
                    <div class="row g-2">
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-1.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-2.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-3.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-4.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-5.jpg" alt=""/>
                        </div>
                        <div class="col-4">
                            <img class="img-fluid rounded" src="/Assets/img/gallery-6.jpg" alt=""/>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-4">Newsletter</h5>
                    <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                    <div class="position-relative mx-auto" >
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="https://www.notion.so/desktop#">Your Site Name</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ****/}
                        Designed By <a href="https://www.notion.so/desktophttps://htmlcodex.com">HTML Codex</a>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*     <!-- Footer End -->
 */}


    {/*-- Back to Top */}
    <a href="https://weddingz.in/pune/auto-cluster-exhibition-center-pimpri-chinchwad/" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


    {/*-- JavaScript Libraries */}
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

    {/*-- Template Javascript */}
    <script src="js/main.js"></script>
    </div>      
            );
        }
}


export default Blog;