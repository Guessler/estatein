import { FC, ReactNode } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/Button";
import { Option } from "../components/Option";

interface IChildren {
    children: ReactNode;
}

const AdBlock = ({ number, text }: { number: string; text: string }) => (
    <div className="ad-blocks">
        <h3 className="ad-text-fat">{number}</h3>
        <span className="ad-text-medium">{text}</span>
    </div>
);

export const HomePage: FC<IChildren> = ({ children }) => {
    return (
        <div>
            {children}
            <section className="first-slide">
            <div className="apartaments-container">
                    <img src={assets['Group']} alt={assets['Group']} />
                    <img className="apartments" src={assets['Image-apartments']} alt={assets['Image-apartments']} />
                    <div className="spinning-ad">
                        <img className="spinning-text" src={assets['Text Container']} alt={assets['Text Container']} />
                        <div className="spinning-ad-image">
                            <img src={assets['Arrow']} alt={assets['Arrow']} />
                        </div>
                    </div>
                </div>
                <main className="container">
                    <div className="first-slide__spacing">
                        <div className="first-slide-text">
                            <h1 className="heading">Discover Your Dream Property with Estatein</h1>
                            <p className="header-items-text">
                                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                            </p>
                        </div>
                        <div className="first-slide__buttons">
                            <Button>Learn More</Button>
                            <Button variant="secondary">Browse Properties</Button>
                        </div>
                        <div className="mobile-container">
                            <div className="ad-block-row">
                                <AdBlock number="200+" text="Happy Customers" />
                                <AdBlock number="10k+" text="Properties For Clients" />
                            </div>
                            <AdBlock number="16+" text="Years of Experience" />
                        </div>
                    </div>
                </main>
            </section>
            <section className="wishes-block">
                <div className="wishes-block__wrapper">
                    <Option text={"Find Your Dream Home"} middleImage={assets['shop']}/>
                    <Option text={"Unlock Property Value"} middleImage={assets['camera']}/>
                    <Option text={"Effortless Property Management"} middleImage={assets['Management']}/>
                    <Option text={"Smart Investments, Informed Decisions"} middleImage={assets['Smart-Investments']}/>
                </div>
            </section>
        </div>
    );
};
