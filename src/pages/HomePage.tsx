import { FC, ReactNode } from "react"
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/Button";

interface IChildren {
    children: ReactNode;
}
export const HomePage: FC<IChildren> = ({ children }) => {
    return (
        <div>
            {children}
            <div className="first-slide">
                <div className="apartaments-container">
                    <img src={assets['Group']} alt={assets['Group']} />
                    <img className="apartments" src={assets['Image-apartments']} alt={assets['Image-apartments']} />
                </div>
                <main className="container">
                    <div className="first-slide__spacing">
                        <div className="first-slide-text">
                            <h1 className="heading">Discover Your Dream Property with Estatein</h1>
                            <span className="header-items-text">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</span>
                        </div>
                        <div className="first-slide__buttons">
                            <Button>Learn More</Button>
                            <Button variant="secondary">Browse Properties</Button>
                        </div>
                        <div className="mobile-container">
                            <div className="ad-block-row">
                                <div className="ad-blocks">
                                    <h3 className="ad-text-fat">200+</h3>
                                    <span className="ad-text-medium">Happy Customers</span>
                                </div>
                                <div className="ad-blocks">
                                    <h3 className="ad-text-fat">10k+</h3>
                                    <span className="ad-text-medium">Properties For Clients</span>
                                </div>
                            </div>
                            <div className="ad-blocks">
                                <h3 className="ad-text-fat">16+</h3>
                                <span className="ad-text-medium">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}