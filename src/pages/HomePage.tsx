import { FC } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/Button";
import { Option } from "../components/Option";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { IChildren } from "../types/interfaces";
import { AnimatedBox } from "../components/common/AnimatedBox";
import { AnimatedImage } from "../components/common/AnimatedImg";
import { AnimatedSection } from "../components/common/AnimatedSection";
import { ProductCard } from "../components/ProductCard";

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
            {/* Первый блок с анимацией */}
            <AnimatedSection
                className="first-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="apartaments-container">
                    <AnimatedImage
                        src={assets['Group']}
                        alt={assets['Group']}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <AnimatedImage
                        className="apartments"
                        src={assets['Image-apartments']}
                        alt={assets['Image-apartments']}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    />
                    <AnimatedBox
                        className="spinning-ad"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <img className="spinning-text" src={assets['Text Container']} alt={assets['Text Container']} />
                        <div className="spinning-ad-image">
                            <img src={assets['Arrow']} alt={assets['Arrow']} />
                        </div>
                    </AnimatedBox>
                </div>
                <main className="container first-container">
                    <AnimatedBox
                        className="first-slide__spacing"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <div className="first-slide-text">
                            <AnimatedBox
                                className="heading"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.2 }}
                            >
                                Discover Your Dream Property with Estatein
                            </AnimatedBox>
                            <AnimatedBox
                                className="description-text"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                            </AnimatedBox>
                        </div>
                        <AnimatedBox
                            className="first-slide__buttons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <Button>Learn More</Button>
                            <Button variant="secondary">Browse Properties</Button>
                        </AnimatedBox>
                        <AnimatedBox
                            className="mobile-container"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <div className="ad-block-row">
                                <AdBlock number="200+" text="Happy Customers" />
                                <AdBlock number="10k+" text="Properties For Clients" />
                            </div>
                            <AdBlock number="16+" text="Years of Experience" />
                        </AnimatedBox>
                    </AnimatedBox>
                </main>
            </AnimatedSection>

            <AnimatedSection
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <OptionsWrapper>
                    <Option text={"Find Your Dream Home"} middleImage={assets['shop']} />
                    <Option text={"Unlock Property Value"} middleImage={assets['camera']} />
                    <Option text={"Effortless Property Management"} middleImage={assets['Management']} />
                    <Option text={"Smart Investments, Informed Decisions"} middleImage={assets['Smart-Investments']} />
                </OptionsWrapper>
            </AnimatedSection>

            <section className="container" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <h2 className="second-heading">Featured Properties</h2>
                    <p className="description-text">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                </div>
                <div className="products">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </div>
    );
};
