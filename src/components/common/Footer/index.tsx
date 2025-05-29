import { assets } from "../../../utils/exports/directories/assets"
import { Button } from "../../UI/Button"
import { SupportingCompanies } from "./SupportingCompanies"

export const Footer = () => {

    const socialNetworks = ['facebook', 'in', 'Twitter', 'youtube']

    return (
        <div>
            <div className="container over-footer spacing-0">
                <div className="over-footer__text">
                    <h2 className="second-heading">Start Your Real Estate Journey Today</h2>
                    <p className="ad-text-medium gray-white-color">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Button variant="secondary">Explore Properties</Button>
            </div>
            <div className="container">
                <div className="footer-items">
                    <div className="footer-items-logo">
                        <img className="small-company-logo" src={assets["Logo"]} alt="Company Logo" />
                        <div className="footer-send">
                            <img className="email-icon" src={assets["Email"]} alt={assets["Email"]} />
                            <input className="footer-send-email ad-text-medium" type="" placeholder="Enter Your Email" />
                            <img className="send-icon" src={assets["SendMassage"]} alt={assets["SendMassage"]} />
                        </div>
                    </div>
                    <ul>
                        <li className="gray-white-color">Home</li>
                        <li>Hero Section</li>
                        <li>Features</li>
                        <li>Properties</li>
                        <li>Testimonials</li>
                        <li>FAQ’s</li>
                    </ul>
                    <ul>
                        <li className="gray-white-color">About Us</li>
                        <li>Our Story</li>
                        <li>Our Works</li>
                        <li>How It Works</li>
                        <li>Our Team</li>
                        <li>Our Clients</li>
                    </ul>
                    <ul>
                        <li className="gray-white-color">Properties</li>
                        <li>Portfolio</li>
                        <li>Categories</li>
                    </ul>
                    <ul>
                        <li className="gray-white-color">Services</li>
                        <li>Valuation Mastery</li>
                        <li>Strategic Marketing</li>
                        <li>Negotiation Wizardry</li>
                        <li>Closing Success</li>
                        <li>Property Management</li>
                    </ul>
                    <ul>
                        <li className="gray-white-color">Contact Us</li>
                        <li>Contact Form</li>
                        <li>Our Offices</li>
                    </ul>
                </div>
            </div>
            <div className="under-footer">
                <div className="container under-footer__contacts spacing-0">
                    <div className="under-footer__contacts-recapcha">
                        <span className="ad-text-medium">@2023 Estatein. All Rights Reserved.</span>
                        <span className="ad-text-medium">Terms & Conditions</span>
                    </div>
                    <div className="under-footer__social-network">
                        {socialNetworks.map((item, index) => {
                            return (
                                <SupportingCompanies
                                    key={index}
                                    image={assets[item]}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}