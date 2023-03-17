import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/img/images.png';
function Footer() {
    return (
        <div>
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-6">
                            <div class="footer_section_title">
                                <h4>Site Navigation</h4>
                            </div>
                            <ul class="footer_menu_lists">
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/doclogin">Doctor</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/verifierlogin">Verifier</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/patientlogin">Patient</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-6">
                            <div class="footer_section_title">
                                <h4>Terms of Use</h4>
                            </div>
                            <ul class="footer_menu_lists">
                            <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Privacy Policy</Link></li>
                                {/* <!-- <li><a href="javascript:void(0);" target="_blank">Disclaimer</a></li> --> */}
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Terms And Condition</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Refund Policy</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-2 col-6">
                            <div class="footer_section_title">
                                <h4>Quick Links</h4>
                            </div>
                            <ul class="footer_menu_lists">
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Blog</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Carrier</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">About Us</Link></li>
                                <li><Link style={{ textDecoration: "none", color: "white" }} to="/">Contact Us</Link></li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-6">
                            <img src={logo} style={{ borderRadius: "40px", height: "60px", width: "60px" }} class="img-fluid mb-2" alt="India’s best doctor healthcare app solution provider" />

                            <ul class="info_list">
                                <li>
                                    <div class="">
                                        <div class="p-0"><i class="fas fa-map-marker-alt me-1"></i> <b>Address:</b>
                                        </div>
                                        <div class=""> <a href="https://goo.gl/maps/FUHLVp4GBdF4RCKr5" style={{ textDecoration: "none", color: "white" }}> WeWork Futura, Sr No 133(P),
                                            CTS No 4944, Magarpatta Rd, Kirtane Baugh, Hadpsar, Pune 411028 </a></div>
                                    </div>
                                </li>
                                <li>
                                    <ul class="social_media_links">
                                        <li><a href="/" target="_blank" rel="noopener noreferrer" ><i
                                            class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="/" target="_blank" rel="noopener noreferrer"><i
                                            class="fab fa-instagram"></i></a></li>
                                        <li><a href="/" target="_blank" rel="noopener noreferrer"><i
                                            class="fab fa-twitter"></i></a></li>
                                        <li><a href="/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="scroll-top" data-scroll="up" type="button">
                        <a><i class="fas fa-angle-up"></i></a>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="offset-lg-3 col-lg-6">
                            <p class="copyright">copyright &#169; 2022-23</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer