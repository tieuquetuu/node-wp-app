import React from "react";

function Footer() {
    return(<footer id="footer-main">
        <div className="footer footer-dark bg-gradient-primary footer-rotate">
            <div className="container">
                <div className="row pt-md">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <a href="index.html">
                            <img src="assets/img/brand/white.png" alt="Footer logo" style={{height: 70}} />
                        </a>
                        <p>Purpose is a unique and beautiful collection of UI elements that are all flexible and
                            modular. A complete and customizable solution to building the website of your dreams.</p>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-4 ml-lg-auto mb-5 mb-lg-0">
                        <h6 className="heading mb-3">Account</h6>
                        <ul className="list-unstyled">
                            <li><a href="pages/account-profile.html">Profile</a></li>
                            <li><a href="pages/account-settings.html">Settings</a></li>
                            <li><a href="pages/account-billing.html">Billing</a></li>
                            <li><a href="pages/account-notifications.html">Notifications</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-6 col-sm-4 mb-5 mb-lg-0">
                        <h6 className="heading mb-3">About</h6>
                        <ul className="list-unstyled text-small">
                            <li><a href="#!">Services</a></li>
                            <li><a href="#!">Contact</a></li>
                            <li><a href="#!">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-5 mb-lg-0">
                        <h6 className="heading mb-3">Company</h6>
                        <ul className="list-unstyled">
                            <li><a href="#!">Terms</a></li>
                            <li><a href="#!">Privacy</a></li>
                            <li><a href="#!">Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                    <div className="col-md-6">
                        <div className="copyright text-sm font-weight-bold text-center text-md-left">
                            &copy; 2018-2019 <a href="https://webpixels.io" className="font-weight-bold" target="_blank" rel="noopener noreferrer">Webpixels</a>. All rights reserved.
                        </div>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                            <li className="nav-item">
                                <a className="nav-link" href="https://dribbble.com/webpixels" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.instagram.com/webpixelsofficial"
                                   target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/webpixels" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.facebook.com/webpixels" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer;