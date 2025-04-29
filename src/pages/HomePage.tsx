import { useEffect, useState } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/Button";
import { Option } from "../components/Option";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { AnimatedBox } from "../components/common/AnimatedBox";
import { AnimatedImage } from "../components/common/AnimatedImg";
import { AnimatedSection } from "../components/common/AnimatedSection";
import { ProductCard } from "../components/ProductCard";
import { ProductCardDetails } from "../components/ProductCard/ProductCardDetails";
import { Product } from "../types/interfaces";
import { Slider } from "../components/Slider";
import { Feedback } from "../components/Feedback";
import { ProductSlider } from "../components/Slider/ProductSlider";
import { Questions } from "../components/Questions";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products"

const feedbacks = [
    {
        heading: "Metropolitan Haven",
        description:
            "I fell in love with this apartment at first sight! Two spacious bedrooms, modern furniture, and panoramic windows with stunning city views—what more could you ask for? Every evening, I enjoy breathtaking sunsets over the horizon. I've been living here for six months now, and every day feels like staying in a premium hotel. Thank you for such a cozy and stylish home!",
        userName: "Sarah Johnson",
        userLocation: "San Francisco, CA",
    },
    {
        heading: "Urban Retreat",
        description:
            "This is exactly what I was looking for: a stylish and convenient studio right in the heart of the city. I can walk to work and cafes in minutes, yet the apartment remains quiet and cozy despite the bustling neighborhood. The modern design and thoughtful layout make it the perfect place to live. If you value comfort and proximity to an active urban lifestyle, this is your spot!",
        userName: "Michael Brown",
        userLocation: "Chicago, IL",
    },
    {
        heading: "Seaside Serenity Villa",
        description:
            "Our new seaside villa is nothing short of paradise! This spacious 4-bedroom, 3-bathroom home is absolutely perfect for our family. We love spending evenings on the terrace, listening to the sound of the waves and enjoying the fresh ocean breeze. And the neighborhood! Quiet, green, and incredibly friendly. This place embodies tranquility and luxury. We've finally found our dream home!",
        userName: "Emily Davis",
        userLocation: "Miami, FL",
    },
];

const faq = [
    {
        heading: "What services does Estatein offer?",
        description:
            "Estatein provides a comprehensive range of real estate services, including property listings, market analysis, and property management.",
    },
    {
        heading: "How can I schedule a property viewing?",
        description:
            "You can schedule a property viewing by contacting our agents through the website or by calling our office directly.",
    },
    {
        heading: "What are the fees associated with buying a property?",
        description:
            "Fees may vary depending on the property and location, but typically include closing costs, inspection fees, and real estate agent commissions.",
    },
    {
        heading: "Can I sell my property through Estatein?",
        description:
            "Yes, Estatein offers services for property sellers, including market evaluations and listing on our platform.",
    },
    {
        heading: "Is financing available for purchasing a property?",
        description:
            "Yes, we can connect you with trusted mortgage lenders to help you secure financing for your property purchase.",
    },
];

// interface Product {
//     heading: string;
//     description: string;
//     price: number;
//     image: string;
//     productDetails: {
//         productCharacteristicIcon: string;
//         productCharacteristic: string;
//     }[];
// }

const AdBlock = ({ number, text }: { number: string; text: string }) => (
    <div className="ad-blocks">
        <h3 className="ad-text-fat">{number}</h3>
        <span className="ad-text-medium">{text}</span>
    </div>
);

export const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProductIndex, setCurrentProductIndex] = useState<number>(1);
    const [productDirection, setProductDirection] = useState<number>(1);
    const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState<number>(1);
    const [feedbackDirection, setFeedbackDirection] = useState<number>(1);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1596);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1596);
    };

    console.log("Products: ", products)

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // const { data: fetchedProductsData } = useQuery({
    //     queryKey: ['fetchProducts'],
    //     queryFn: fetchProducts
    // });
    const { data: fetchedProductsData, error, isLoading } = useQuery({
        queryKey: ['fetchProducts'],
        queryFn: fetchProducts,
    });
    console.log("Loading:", isLoading);
    console.log("Error:", error);


    useEffect(() => {
        if (fetchedProductsData) {
            setProducts(fetchedProductsData);
        }
    }, [fetchedProductsData]);

    console.log("1477", fetchedProductsData)



    const handleNextProduct = () => {
        setProductDirection(1);
        setCurrentProductIndex((prev) =>
            prev + 1 >= products.length ? 1 : prev + 1
        );
    };

    const handlePrevProduct = () => {
        setProductDirection(-1);
        setCurrentProductIndex((prev) => (prev <= 1 ? 1 : prev - 1));
    };

    const handleNextFeedback = () => {
        setFeedbackDirection(1);
        setCurrentFeedbackIndex((prev) =>
            prev + 1 >= feedbacks.length ? 1 : prev + 1
        );
    };

    const handlePrevFeedback = () => {
        setFeedbackDirection(-1);
        setCurrentFeedbackIndex((prev) => (prev <= 1 ? 1 : prev - 1));
    };

    return (
        <div>
            <AnimatedSection
                className="first-slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="apartaments-container">
                    <AnimatedImage
                        src={assets["Group"]}
                        alt={assets["Group"]}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <AnimatedImage
                        className="apartments"
                        src={assets["Image-apartments"]}
                        alt={assets["Image-apartments"]}
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
                        <AnimatedImage
                            className="spinning-text"
                            src={assets["Text Container"]}
                            alt={assets["Text Container"]}
                            initial={{ rotate: 0 }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />
                        <div className="spinning-ad-image">
                            <img src={assets["Arrow"]} alt={assets["Arrow"]} />
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
                                Your journey to finding the perfect property begins here. Explore
                                our listings to find the home that matches your dreams.
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
                    <Option text={"Find Your Dream Home"} middleImage={assets["shop"]} />
                    <Option text={"Unlock Property Value"} middleImage={assets["camera"]} />
                    <Option
                        text={"Effortless Property Management"}
                        middleImage={assets["Management"]}
                    />
                    <Option
                        text={"Smart Investments, Informed Decisions"}
                        middleImage={assets["Smart-Investments"]}
                    />
                </OptionsWrapper>
            </AnimatedSection>

            <section className="container products-slide">
                <h2 className="second-heading">Featured Properties</h2>
                <Slider
                    products={products}
                    currentIndex={currentProductIndex}
                    direction={productDirection}
                    handleNext={handleNextProduct}
                    handlePrev={handlePrevProduct}
                    isMobile={isMobile}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            productIcon={assets[product.image]}
                            productName={product.heading}
                            productDescription={product.description}
                            productPrice={product.price}
                        >
                            {product.productDetails?.map((detail, detailIndex) => (
                                <ProductCardDetails
                                    key={detailIndex}
                                    productCharacteristicIcon={assets[detail.productCharacteristicIcon]}
                                    productCharacteristic={detail.productCharacteristic}
                                />
                            ))}
                        </ProductCard>
                    ))}
                </Slider>
                <ProductSlider
                    currentPage={currentProductIndex}
                    lastPage={products.length}
                    onClickNext={handleNextProduct}
                    onClickPrev={handlePrevProduct}
                >
                    <img src={assets["Vector (Stroke)"]} alt={assets["Vector (Stroke)"]} />
                </ProductSlider>
            </section>

            <section
                className="container products-slide"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div>
                    <h2 className="second-heading">What Our Clients Say</h2>
                    <p className="description-text">
                        Read the success stories and heartfelt testimonials from our valued
                        clients. Discover why they chose Estatein for their real estate
                        needs.
                    </p>
                </div>
                <Slider
                    products={products}
                    currentIndex={currentFeedbackIndex}
                    direction={feedbackDirection}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    isMobile={isMobile}
                >
                    {feedbacks
                        .slice(
                            currentFeedbackIndex - 1,
                            isMobile ? currentFeedbackIndex : currentFeedbackIndex + 2
                        )
                        .map((feedback, index) => (
                            <Feedback key={index} text={feedback} />
                        ))}
                </Slider>
                <ProductSlider
                    currentPage={currentFeedbackIndex}
                    lastPage={feedbacks.length}
                    onClickNext={handleNextFeedback}
                    onClickPrev={handlePrevFeedback}
                >
                    <img src={assets["Vector (Stroke)"]} alt={assets["Vector (Stroke)"]} />
                </ProductSlider>
            </section>

            <section
                className="container products-slide"
                style={{ display: "flex", flexDirection: "column" }}
            >
                <div>
                    <h2 className="second-heading">Frequently Asked Questions</h2>
                    <p className="description-text">
                        Find answers to common questions about Estatein's services, property
                        listings, and the real estate process. We're here to provide clarity
                        and assist you every step of the way.
                    </p>
                </div>
                <Slider
                    products={products}
                    currentIndex={currentFeedbackIndex}
                    direction={feedbackDirection}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    isMobile={isMobile}
                >
                    {faq
                        .slice(
                            currentFeedbackIndex - 1,
                            isMobile ? currentFeedbackIndex : currentFeedbackIndex + 2
                        )
                        .map((item, index) => (
                            <Questions
                                key={index}
                                text={{ heading: item.heading, description: item.description }}
                            />
                        ))}
                </Slider>
                <ProductSlider
                    currentPage={currentFeedbackIndex}
                    lastPage={faq.length}
                    onClickNext={handleNextFeedback}
                    onClickPrev={handlePrevFeedback}
                >
                    <img src={assets["Vector (Stroke)"]} alt={assets["Vector (Stroke)"]} />
                </ProductSlider>
            </section>
        </div>
    );
};
