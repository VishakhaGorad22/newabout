import React from "react";
import "../Pages/Home.css";

class Home extends React.Component {
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
                <a href="https://www.notion.so/desktopabout.html" class="nav-item nav-link active">About</a>
                <a href="https://www.notion.so/desktopservice.html" class="nav-item nav-link">Service</a>
                <a href="https://www.notion.so/desktopproject.html" class="nav-item nav-link">Products</a>
                <div class="nav-item dropdown">
                    <a href="https://www.notion.so/desktop#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu bg-light m-0">
                        <a href="https://www.notion.so/desktopfeature.html" class="dropdown-item">Feature</a>
                        <a href="https://www.notion.so/desktopquote.html" class="dropdown-item">Free Quote</a>
                        <a href="https://www.notion.so/desktopteam.html" class="dropdown-item">Our Team</a>
                        <a href="https://www.notion.so/desktoptestimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="https://www.notion.so/desktop404.html" class="dropdown-item">404 Page</a>
                    </div>
                </div>
                <a href="https://www.notion.so/desktopcontact.html" class="nav-item nav-link">Contact</a>
            </div>
            <a href="https://www.notion.so/desktop" class="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a>
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
 */}
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
                        <p style={{color: "#4a4747"}}>From a solar panel to a biogas plant to a Helical wind turbine, we have all solutions under one roof. This gives our customers and us the freedom to choose from a variety of solution.</p>

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

{/*     <!-- About Start -->
 */}   
     <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" >
                    <div class="position-relative h-100">
                        <img class="position-absolute img-fluid w-100 h-100" src="/Assets/img/about.jpg"  alt=""/>
                    </div>
                </div>
                <div class="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div class="p-lg-5 pe-lg-0">
                        <h4 class="text-primary">About Us</h4>
                        <h1 class="mb-4">5+ Years Experience In Solar & Renewable Energy Industry</h1>
                        <p style={{color: "#4a4747"}}>EnergyBae is a clean tech startup providing easy access to affordable & reliable source of power. We provide customized power solutions to varying needs of the user. We started as a wind energy company and grown into a company providing hybrid solutions.
                        We believe that neither of the technologies such as wind & solar alone can provide the desired power output. Our clients wanted to have reliable power both in day and night. With solar mainly providing power in the daytime and wind providing power at the night time, now clients have power round the clock which reduces the power storage cost. Indian market is very diverse for having different types of regions having varying wind speeds.
                        Therefore, EnergyBae has came to an existence.EnergyBae is the next-generation end-to-end Renewables marketspace. From accessing your energy needs to providing a tailored power solution, we onboard you on a journey to energy independence.More than half a decade ago, we started manufacturing rooftop wind turbines and launched WAYUMITRA, India’s first indigenous hybrid wind turbine. From all these years of experience, we have invented a golden ratio of renewable energy for every geography, consumption pattern, etc. This golden ratio is our USP and mantra for success. Also, we are one of the very few companies in India with all renewable energy options in one marketplace
</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3" ></i>Solar</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3" ></i>Hybrids</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3" ></i>Wind Turbines</p>
                        <p style={{color: "#4a4747"}}><i class="fa fa-check-circle text-primary me-3" ></i>Bio gas</p>

                        <a href="https://www.notion.so/desktop" class="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/*     <!-- About End -->
 */}

{/* Founder 
<div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container feature px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="p-lg-5 ps-lg-0">
                        <h6 class="text-primary">About</h6>
                        <h1 class="mb-4">Mr. Akshay Jain</h1>
                        <p class="mb-4 pb-2" style={{color: "#4a4747"}}>Akshay has more than half a decade's years of experience in renewables. His work involves research and product development in the fields of hydrogen, wind, and solar energy. He is a 2017 Mechanical graduate from Pune university. Being a generalist his 7+ years of entrepreneurial experience involves running a successful business right from the college. His professional experience ranges from operations to R&D</p>
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
                        <img class="position-absolute img-fluid w-100 h-100" src="/Assets/img/team-1.jpg" alt="Founder"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
 Founder */}    
{/*     <!-- Team Start --> */}
 
     <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary">Team Member</h6>
                <h1 class="mb-4">Experienced Team Members</h1>
            </div>
            <div class="row g-4" style={{justifyContent: "space-evenly"}}>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="/Assets/img/team-1.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Akshay Jain</h5>
                            <span>Founder</span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="/Assets/img/team-2.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Pranay K.</h5>
                            <span>CO-Founder</span>
                        </div>
                    </div>
                </div> 
               {/* <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="team-item rounded overflow-hidden">
                        <div class="d-flex">
                            <img class="img-fluid w-75" src="/Assets/img/team-3.jpg" alt=""/>
                            <div class="team-social w-25">
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-lg-square btn-outline-primary rounded-circle mt-3" href="https://www.notion.so/desktop"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="p-4">
                            <h5>Full Name</h5>
                            <span>Designation</span>
                        </div>
                    </div>
</div>*/}
            </div>
        </div>
</div>
{/* <!-- Team End -->*/}
     


{/*  */}
<div class="vc_row-full-width vc_clearfix"></div><div class="vc_row wpb_row vc_row-fluid vc_custom_1461809415746"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner vc_custom_1461424912953"><div class="wpb_wrapper"><div id="shortcode_imgs_gallery_63ea1f434d1b2"
     class="rit-imgs-gallery center-title rit-carousel-gallery ri-windy-carousel"
     data-config=' {&quot;item&quot;:&quot;5&quot;,&quot;wrap&quot;:&quot;.wrapper-imgs-gallery&quot;} ' />
     
      
        <div class="text-center">
                <h6 class="text-primary"> </h6>
                <h1 class="mb-4">Our Partners</h1>
            </div>
    <div id="partners" class="row">
    <div class="wrapper-imgs-gallery">
        <section class="customer-logos slider" style={{justifyContent: "space-evenly"}}>
            <div class="slide rit-gallery-item col-xs-12 col-sm-1-5" style={{display: "flex"}} >
                
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5" >
                        <a href="https://www.unitronenergy.com/">
                                <img width="150" height="130" src="/Assets/img/Unitron.jpg" class="attachment-full size-full" alt="Unitron Energy" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.wishenergy.com/images/logo-big.svg">
                                <img width="127" height="160" src="https://www.wishenergy.com/images/logo.svg" class="attachment-full size-full" alt="Wish Energy" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.lucidusenergy.com/">
                                <img width="190" height="190" src="/Assets/img/Lucidus.jpg" alt="Lucidus Energy" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="173" height="109" src="\Assets\img\Orange.png" class="attachment-full size-full" alt="Orange ENSC" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="107" height="160" src="/Assets/img/Monter Logo.JPG" class="attachment-full size-full" alt="Monter Technologies" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="173" height="99" src="Assets/img/Xefficient logo.png" class="attachment-full size-full" alt="Xeffient" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="173" height="99" src="/Assets/img/Windsun-eco-system.png" class="attachment-full size-full" alt="Windsun-eco-system" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="170" height="90" src="/Assets/img/Vinayak-energy-tech.jpg" class="attachment-full size-full" alt="Vinayak-energy-tech" decoding="async" loading="lazy" />                            </a>                
                              
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="150" height="90" src="/Assets/img/Sailee-electrical.jpeg" class="attachment-full size-full" alt="Sailee-electrical" decoding="async" loading="lazy" />                            </a>
                </div>
                
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="140" height="99" src="/Assets/img/U-solar.jpg" class="attachment-full size-full" alt="U-solar" decoding="async" loading="lazy" /></a>
                </div>
                <div class="slide rit-gallery-item col-xs-12 col-sm-1-5 ">
                        <a href="https://www.google.com/search?q=solar+panel&rlz=1C1VDKB_enIN981IN981&oq=solar&aqs=chrome.1.69i57j69i59l3j0i271j69i60l3.2666j0j7&sourceid=chrome&ie=UTF-8">
                                <img width="173" height="99" src="/Assets/img/Array-electricals.jpg" class="attachment-full size-full" alt="Array-electricals" decoding="async" loading="lazy" />                            </a>
                </div></div>
                </section>
               
    
        </div></div></div></div></div></div>

{/* */}
 

 {/*Testimonials*/}     

 <div class="vc_row-full-width vc_clearfix"></div><div class="vc_row wpb_row vc_row-fluid vc_custom_1461809415746"><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner vc_custom_1461424912953"><div class="wpb_wrapper"><div id="shortcode_imgs_gallery_63ea1f434d1b2"
     class="rit-imgs-gallery center-title rit-carousel-gallery ri-windy-carousel"
     data-config=' {&quot;item&quot;:&quot;5&quot;,&quot;wrap&quot;:&quot;.wrapper-imgs-gallery&quot;} ' />
     

 <div class="container-xxl py-5">
    <div class="container">
            <div class="text-center">
                <h6 class="text-primary"> </h6>
                <h1 class="mb-4">Our Suppliers</h1>
            </div>
            <div id="suppliers" class="row">
    <div class="wrapper-imgs-gallery" style={{justifyContent: "space-evenly"}}>
            <div class="rit-gallery-item col-xs-12 col-sm-1-5" style={{display: "flex"}}>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.premierenergies.com/">
                                <img width="100" height="100" src="/Assets/img/Premier-energies.png" class="attachment-full size-full" alt="Premier Energies" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.renewsysworld.com/">
                                <img width="127" height="160" src="/Assets/img/Renewsys.png" class="attachment-full size-full" alt="RenewSys" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.waaree.com/enquiry?gclid=CjwKCAiA3KefBhByEiwAi2LDHKgOxJW-u2-t-KXfVuvILZRI0wZpFAl2FUZIk0Z9_hyYTDSn6bXrsRoCIZEQAvD_BwE">
                                <img width="180" height="110" src="/Assets/img/Waaree-logo.jpg" alt="Waaree" decoding="async" loading="lazy" />                            </a>              
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="http://amrut.gov.in/content/">
                                <img width="173" height="99" src="\Assets\img\Amrut-energy.png" class="attachment-full size-full" alt="Amrut" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.sofarsounds.com/">
                                <img width="107" height="160" src="/Assets/img/sofar-logo_1.jpg" class="attachment-full size-full" alt="Sofar" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.solaxpower.com/">
                                <img width="173" height="99" src="Assets/img/Solax.png" class="attachment-full size-full" alt="Solax" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.ginlong.com/global/inverter.html?gclid=CjwKCAiA3KefBhByEiwAi2LDHNCxFW-FJIUVPxINMTng80jmW6dfabqeFRki_I87_T3C2dsc6sLPJBoC1vAQAvD_BwE">
                                <img width="173" height="99" src="/Assets/img/Solis.png" class="attachment-full size-full" alt="Solis" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.ginverter.com/?gclid=CjwKCAiA3KefBhByEiwAi2LDHBzWOyHYR8Qfc2VMCankBYGjUcoCY-PZwoJ3pdhUCAAT5Tq5tkHtzRoCYg8QAvD_BwE">
                                <img width="153" height="80" src="/Assets/img/Growatt.png" class="attachment-full size-full" alt="Growatt" decoding="async" loading="lazy" />                            </a>
                               
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://en.goodwe.com/">
                                <img width="176" height="90" src="/Assets/img/Goodwe-logo.jpg" class="attachment-full size-full" alt="GoodWe" decoding="async" loading="lazy" />                            </a>
                </div>
                
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://voltaicsystems.com/">
                                <img width="173" height="99" src="/Assets/img/voltaic.png" class="attachment-full size-full" alt="Voltaic-Systems" decoding="async" loading="lazy" /></a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.racold.com/">
                                <img width="173" height="99" src="/Assets/img/racold-logo.png" class="attachment-full size-full" alt="Racold" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://evvosolar.com/">
                                <img width="173" height="99" src="/Assets/img/Evvo.png" class="attachment-full size-full" alt="Evvo" decoding="async" loading="lazy" />                            </a>
                </div>
                <div class="rit-gallery-item col-xs-12 col-sm-1-5">
                        <a href="https://www.pvpowertech.com/">
                                <img width="173" height="99" src="/Assets/img/pv-powertech.png" class="attachment-full size-full" alt="PV Powertech" decoding="async" loading="lazy" />                            </a>
                </div>
    </div></div></div></div></div></div>
        </div></div>

    
   {/* <!-- Testimonial End -->*/}

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

{/*     <!-- Back to Top -->
 */}    <a href="https://www.notion.so/desktop#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


{/*     <!-- JavaScript Libraries -->
 */}    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/counterup/counterup.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/isotope/isotope.pkgd.min.js"></script>
    <script src="lib/lightbox/js/lightbox.min.js"></script>

{/*     <!-- Template Javascript -->
 */}    
    <script src="js/main.js"></script>
            </div>
            </div>
        
            
            )
        }
}


export default Home;