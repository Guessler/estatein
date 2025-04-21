import { FC, useEffect, useState } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/Button";
import { Option } from "../components/Option";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { IChildren } from "../types/interfaces";
import { AnimatedBox } from "../components/common/AnimatedBox";
import { AnimatedImage } from "../components/common/AnimatedImg";
import { AnimatedSection } from "../components/common/AnimatedSection";
import { ProductCard } from "../components/ProductCard";
import { ProductCardDetails } from "../components/ProductCard/ProductCardDetails";
import { Slider } from "../components/Slider";
import { Feedback } from "../components/Feedback";

const products = [
    {
        productIcon: "Image-1",
        productName: "Metropolitan Haven",
        productDescription: "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
        productPrice: "$550,000",
        productDetails: [
            {
                productCharacteristicIcon: "Villa",
                productCharacteristic: "Villa",
            },
        ],
    },
    {
        productIcon: "Image-2",
        productName: "Urban Retreat",
        productDescription: "A modern studio apartment located in the heart of the city",
        productPrice: "$320,000",
        productDetails: [
            {
                productCharacteristicIcon: "Apartment",
                productCharacteristic: "Apartment",
            },
            {
                productCharacteristicIcon: "Parking",
                productCharacteristic: "Parking Available",
            },
        ],
    },
    {
        productIcon: "Image",
        productName: "Seaside Serenity Villa",
        productDescription: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
        productPrice: "$550,000",
        productDetails: [
            {
                productCharacteristicIcon: "Apartment",
                productCharacteristic: "Apartment",
            },
            {
                productCharacteristicIcon: "Parking",
                productCharacteristic: "Parking Available",
            },
        ],
    },
];

const feedbacks = [
    {
        heading: "Metropolitan Haven",
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
        userName: "Sarah Johnson",
        userLocation: "San Francisco, CA",
    },
    {
        heading: "Urban Retreat",
        description: "A modern studio apartment located in the heart of the city",
        userName: "Michael Brown",
        userLocation: "Chicago, IL",
    },
    {
        heading: "Seaside Serenity Villa",
        description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
        userName: "Emily Davis",
        userLocation: "Miami, FL",
    },
];

const AdBlock = ({ number, text }: { number: string; text: string }) => (
    <div className="ad-blocks">
        <h3 className="ad-text-fat">{number}</h3>
        <span className="ad-text-medium">{text}</span>
    </div>
);

export const HomePage: FC<IChildren> = ({ children }) => {
    // State for Product Slider
    const [currentProductIndex, setCurrentProductIndex] = useState<number>(1);
    const [productDirection, setProductDirection] = useState<number>(1);
    
    // State for Feedback Slider
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState<number>(1);
    const [feedbackDirection, setFeedbackDirection] = useState<number>(1);
    
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1440);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1440);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Product Slider Handlers
    const handleNextProduct = () => {
        setProductDirection(1);
        setCurrentProductIndex((prev) =>
            prev + 1 >= products.length ? 1 : prev + 1
        );
    };

    const handlePrevProduct = () => {
        setProductDirection(-1);
        setCurrentProductIndex((prev) =>
            prev <= 1 ? 1 : prev - 1
        );
    };

    // Feedback Slider Handlers
    const handleNextFeedback = () => {
        setFeedbackDirection(1);
        setCurrentFeedbackIndex((prev) =>
            prev + 1 >= feedbacks.length ? 1 : prev + 1
        );
    };

    const handlePrevFeedback = () => {
        setFeedbackDirection(-1);
        setCurrentFeedbackIndex((prev) =>
            prev <= 1 ? 1 : prev - 1
        );
    };

    return (
        <div>
            {children}
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

            <section className="container products-slide" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <h2 className="second-heading">Featured Properties</h2>
                    <p className="description-text">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                </div>
                <Slider
                    products={products}
                    currentIndex={currentProductIndex}
                    direction={productDirection}
                    handleNext={handleNextProduct}
                    handlePrev={handlePrevProduct}
                    isMobile={isMobile}
                >
                    {products.slice(currentProductIndex - 1, isMobile ? currentProductIndex : currentProductIndex + 2).map((item, index) => (
                        <ProductCard
                            key={index}
                            productIcon={assets[item.productIcon]}
                            productName={item.productName}
                            productDescription={item.productDescription}
                            productPrice={item.productPrice}
                        >
                            {item.productDetails.map((detail, detailIndex) => (
                                <ProductCardDetails
                                    key={detailIndex}
                                    productCharacteristicIcon={assets[detail.productCharacteristicIcon]}
                                    productCharacteristic={detail.productCharacteristic}
                                />
                            ))}
                        </ProductCard>
                    ))}
                </Slider>
                <div className="product-slider">
                    <span className="switched-text">{currentProductIndex} of {products.length}</span>
                    <div className="product-slider__switcher">
                        <Button onClick={handlePrevProduct}><img className="rotated-stroke" src={assets['Vector (Stroke)']} alt={assets['Vector (Stroke)']} /></Button>
                        <Button onClick={handleNextProduct}><img src={assets['Vector (Stroke)']} alt={assets['Vector (Stroke)']} /></Button>
                    </div>
                </div>
            </section>

            <section className="container products-slide" style={{ display: "flex", flexDirection: "column" }}>
                <div>
                    <h2 className="second-heading">What Our Clients Say</h2>
                    <p className="description-text">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>
                <Slider
                    products={products}
                    currentIndex={currentFeedbackIndex}
                    direction={feedbackDirection}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    isMobile={isMobile}
                >
                    {feedbacks.slice(currentFeedbackIndex - 1, isMobile ? currentFeedbackIndex : currentFeedbackIndex + 2).map((feedback, index) => (
                        <Feedback
                            key={index}
                            text={feedback}
                        />
                    ))}
                </Slider>
                <div className="product-slider">
                    <span className="switched-text">{currentFeedbackIndex} of {feedbacks.length}</span>
                    <div className="product-slider__switcher">
                        <Button onClick={handlePrevFeedback}><img className="rotated-stroke" src={assets['Vector (Stroke)']} alt={assets['Vector (Stroke)']} /></Button>
                        <Button onClick={handleNextFeedback}><img src={assets['Vector (Stroke)']} alt={assets['Vector (Stroke)']} /></Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
