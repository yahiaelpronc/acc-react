import React from "react";
import './ComponentStatic/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './images/1.jpg';
import img2 from './images/2.webp';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function FooterComponent() {




    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="box">
                        <h3>ACC</h3>
                        <ul className="social">
                            <li>
                                <a href="#" className="facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="twitter">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="youtube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="instagram">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                        <p className="text">
                            Welcome to Animal Care Center of Qena, your local veterinarians in Qena,Egypt.
                            We are pleased to provide a wide variety of animal veterinary services in Qena.

                        </p>
                    </div>
                    <div className="box">
                        <ul className="links">
                            <li><a href="#">Important Link 1</a></li>
                            <li><a href="#">Important Link 2</a></li>
                            <li><a href="#">Important Link 3</a></li>
                            <li><a href="#">Important Link 4</a></li>
                            <li><a href="#">Important Link 5</a></li>
                        </ul>
                    </div>
                    <div className="box">
                        <div className="line">
                            <i className="fas fa-map-marker-alt fa-fw"></i>
                            <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
                        </div>
                        <div className="line">
                            <i className="fa-solid fa-clock"></i>
                            <div className="info">Business Hours: From 10:00 To 18:00</div>
                        </div>
                        <div className="line">
                            <i className="fas fa-phone-volume fa-fw"></i>
                            <div className="info">
                                <span>+20123456789</span>
                                <span>+20198765432</span>
                            </div>
                        </div>
                    </div>
                    <div className="box footer-gallery">
                        <img src={img1} />
                        <img src={img2} />
                        <img src={img3} />
                        <img src={img4} />
                        <img src={img2} />
                        <img src={img1} />


                    </div>
                </div>
                <p className="copyright">Made With &lt;3 By Team</p>
            </div>
        </>
    )
}
export default FooterComponent;