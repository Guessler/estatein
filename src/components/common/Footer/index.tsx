import { useState } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { Button } from "../../UI/Button";
import { SupportingCompanies } from "./SupportingCompanies";
import { useOnScreen } from "../../../hooks/useOnScreen";
import AnimatedSection from "../Animated/AnimatedSection";
import { Links } from "../../../consts/links/Links";
import { Link } from "react-router-dom";

export const Footer = () => {
    const [email, setEmail] = useState("");

    const socialNetworks = [
        { id: 1, name: "facebook", link: Links.FACEBOOK },
        { id: 2, name: "in", link: Links.FACEBOOK },
        { id: 3, name: "Twitter", link: Links.TWITTER },
        { id: 4, name: "youtube", link: Links.YOUTUBE },
    ];

    const { ref: introRef, isVisible: isIntroVisible } = useOnScreen("0px");
    const { ref: linksRef, isVisible: isLinksVisible } = useOnScreen("0px");
    const { ref: contactsRef, isVisible: isContactsVisible } = useOnScreen("0px");

    const handleSend = () => {
        if (email.trim()) {
            alert("Email отправлен");
            setEmail("");
        } else {
            alert("Пожалуйста, введите email");
        }
    };

    return (
        <div>
            <AnimatedSection className="container over-footer spacing-0" ref={introRef}>
                <div className="over-footer__text" style={{ opacity: isIntroVisible ? 1 : 0, transition: 'opacity 1s' }}>
                    <h2 className="second-heading">Start Your Real Estate Journey Today</h2>
                    <p className="ad-text-medium gray-white-color">
                        Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                    </p>
                </div>
                <Button variant="secondary">Explore Properties</Button>
            </AnimatedSection>

            <AnimatedSection className="container" ref={linksRef}>
                <div className="footer-items" style={{ opacity: isLinksVisible ? 1 : 0, transition: 'opacity 1s' }}>
                    <div className="footer-items-logo">
                        <img className="small-company-logo" src={assets["Logo"]} alt="Company Logo" />
                        <div className="footer-send">
                            <img className="email-icon" src={assets["Email"]} alt="Email" />
                            <input
                                className="footer-send-email ad-text-medium"
                                type="email"
                                placeholder="Enter Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <img
                                className="send-icon"
                                src={assets["SendMassage"]}
                                alt="Send"
                                onClick={handleSend}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                    <ul>
                        <li className="gray-white-color">Home</li>
                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                            <li>Hero Section</li>
                        </Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 1200)}>
                            <li>Features</li>
                        </Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 2200)}>
                            <li>Properties</li>
                        </Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 3000)}>
                            <li>Testimonials</li>
                        </Link>
                        <Link to="/" onClick={() => window.scrollTo(0, 3000)}>
                            <li>FAQ’s</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className="gray-white-color">About Us</li>
                        <Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>
                            <li>Our Story</li>
                        </Link>
                        <Link to="/about-us" onClick={() => window.scrollTo(0, 700)}>
                            <li>Our Works</li>
                        </Link>
                        <Link to="/about-us" onClick={() => window.scrollTo(0, 2200)}>
                            <li>How It Works</li>
                        </Link>
                        <Link to="/about-us" onClick={() => window.scrollTo(0, 3200)}>
                            <li>Our Team</li>
                        </Link>
                        <Link to="/about-us" onClick={() => window.scrollTo(0, 4100)}>
                            <li>Our Clients</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className="gray-white-color">Properties</li>
                        <Link to="/properties" onClick={() => window.scrollTo(0, 0)}>
                            <li>Portfolio</li>
                        </Link>
                        <Link to="/properties" onClick={() => window.scrollTo(0, 900)}>
                            <li>Categories</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className="gray-white-color">Services</li>
                        <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                            <li>Valuation Mastery</li>
                        </Link>
                        <Link to="/services" onClick={() => window.scrollTo(0, 700)}>
                            <li>Strategic Marketing</li>
                        </Link>
                        <Link to="/services" onClick={() => window.scrollTo(0, 1600)}>
                            <li>Negotiation Wizardry</li>
                        </Link>
                        <Link to="/services" onClick={() => window.scrollTo(0, 2400)}>
                            <li>Closing Success</li>
                        </Link>
                        <Link to="/services" onClick={() => window.scrollTo(0, 2400)}>
                            <li>Property Management</li>
                        </Link>
                    </ul>

                    <ul>
                        <li className="gray-white-color">Contact Us</li>
                        <Link to="/contacts" onClick={() => window.scrollTo(0, 0)}>
                            <li>Contact Form</li>
                        </Link>
                        <Link to="/contacts" onClick={() => window.scrollTo(0, 950)}>
                            <li>Our Offices</li>
                        </Link>
                    </ul>
                </div>
            </AnimatedSection>

            <AnimatedSection className="under-footer" ref={contactsRef}>
                <div className="container under-footer__contacts spacing-0" style={{ opacity: isContactsVisible ? 1 : 0, transition: 'opacity 1s' }}>
                    <div className="under-footer__contacts-recapcha">
                        <span className="ad-text-medium">@2023 Estatein. All Rights Reserved.</span>
                        <span className="ad-text-medium">Terms & Conditions</span>
                    </div>
                    <div className="under-footer__social-network">
                        {socialNetworks.map((item) => (
                            <SupportingCompanies
                                key={item.id}
                                link={item.link}
                                image={assets[item.name]}
                            />
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};