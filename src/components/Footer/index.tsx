import { assets } from "../../utils/exports/directories/assets"
import { Button } from "../Button"
import { SupportingCompanies } from "./SupportingCompanies"

export const Footer = () => {
    return (
        <div>
            <div className="container over-footer spacing-0">
                <div className="over-footer__text">
                    <h2 className="second-heading">Start Your Real Estate Journey Today</h2>
                    <p className="ad-text-medium gray-white-color">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                </div>
                <Button variant="secondary">Explore Properties</Button>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="footer-items">
                        <div className="footer-send">
                            <img src={assets["Email"]} alt={assets["Email"]} />
                            <input className="footer-send-email" type="" placeholder="Enter Your Email" />
                            <img src={assets["SendMassage"]} alt={assets["SendMassage"]} />
                        </div>
                        <ul>
                            <li>Home</li>
                            <li>Hero Section</li>
                            <li>Features</li>
                            <li>Properties</li>
                            <li>Testimonials</li>
                            <li>FAQ’s</li>
                        </ul>
                        <ul>
                            <li>About Us</li>
                            <li>Our Story</li>
                            <li>Our Works</li>
                            <li>How It Works</li>
                            <li>Our Team</li>
                            <li>Our Clients</li>
                        </ul>
                        <ul>
                            <li>Properties</li>
                            <li>Portfolio</li>
                            <li>Categories</li>
                        </ul>
                        <ul>
                            <li>Services</li>
                            <li>Valuation Mastery</li>
                            <li>Strategic Marketing</li>
                            <li>Negotiation Wizardry</li>
                            <li>Closing Success</li>
                            <li>Property Management</li>
                        </ul>
                        <ul>
                            <li>Contact Us</li>
                            <li>Contact Form</li>
                            <li>Our Offices</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="under-footer">
                <div className="container spacing-0">
                    <span className="ad-text-medium">@2023 Estatein. All Rights Reserved.</span>
                    <span className="ad-text-medium">Terms & Conditions</span>
                    <SupportingCompanies image={assets['facebook']} />
                </div>
            </div>
        </div>
    )
}