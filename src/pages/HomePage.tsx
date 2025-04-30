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
import { FeedbackText, IFeedbackFromDB, IQuestionFromDB, Product } from "../types/interfaces";
import { Slider } from "../components/Slider";
import { Feedback } from "../components/Feedback";
import { ProductSlider } from "../components/Slider/ProductSlider";
import { Questions } from "../components/Questions";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../services/products";
import { fetchFeedbacks } from "../services/feedbacks";
import { fetchQuestions } from "../services/questions";

const AdBlock = ({ number, text }: { number: string; text: string }) => (
    <div className="ad-blocks">
        <h3 className="ad-text-fat">{number}</h3>
        <span className="ad-text-medium">{text}</span>
    </div>
);

export interface QuestionText {
    heading: string;
    description: string;
}

export const HomePage = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [currentProductIndex, setCurrentProductIndex] = useState<number>(1);
    const [productDirection, setProductDirection] = useState<number>(1);
    // const [currentFeedbackIndex] = useState<number>(1);
    const [feedbackDirection, setFeedbackDirection] = useState<number>(1);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1596);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1596);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const { data: fetchedProductsData } = useQuery({
        queryKey: ['fetchProducts'],
        queryFn: fetchProducts,
    });

    const { data: feedbacks = [] } = useQuery({
        queryKey: ['fetchFeedbacks'],
        queryFn: fetchFeedbacks,
    });

    useEffect(() => {
        if (fetchedProductsData) {
            setProducts(fetchedProductsData);
        }
    }, [fetchedProductsData]);

    const itemsPerPage = isMobile ? 1 : 3;

    const handleNextProduct = () => {
        setProductDirection(1);
        if (isMobile) {
            setCurrentProductIndex(prev =>
                prev + 1 >= products.length ? 0 : prev + 1
            );
        } else {
            setCurrentProductIndex(prev =>
                prev + itemsPerPage >= products.length ? 0 : prev + itemsPerPage
            );
        }
    };

    const handlePrevProduct = () => {
        setProductDirection(-1);
        if (isMobile) {
            setCurrentProductIndex(prev =>
                prev <= 0 ? products.length - 1 : prev - 1
            );
        } else {
            setCurrentProductIndex(prev =>
                prev <= 0 ? products.length - itemsPerPage : prev - itemsPerPage
            );
        }
    };
    const currentPage = isMobile
        ? currentProductIndex + 1
        : Math.floor(currentProductIndex / itemsPerPage) + 1;

    const totalPages = isMobile
        ? products.length
        : Math.ceil(products.length / itemsPerPage);


    const transformFeedbackData = (dbFeedback: IFeedbackFromDB): FeedbackText => ({
        heading: dbFeedback.heading,
        description: dbFeedback.description,
        userName: dbFeedback.user_name,
        userLocation: dbFeedback.user_location,
        stars: dbFeedback.star_count,
        userIcon: dbFeedback.icon,
    });



    const [currentFeedbackPage, setCurrentFeedbackPage] = useState<number>(0);

    const feedbacksPerPage = isMobile ? 1 : 3;

    const handleNextFeedback = () => {
        setFeedbackDirection(1);
        setCurrentFeedbackPage(prev =>
            (prev + 1) * feedbacksPerPage >= feedbacks.length ? 0 : prev + 1
        );
    };

    const handlePrevFeedback = () => {
        setFeedbackDirection(-1);
        setCurrentFeedbackPage(prev =>
            prev <= 0 ? Math.ceil(feedbacks.length / feedbacksPerPage) - 1 : prev - 1
        );
    };



    const { data: questions = [] } = useQuery<IQuestionFromDB[]>({
        queryKey: ['fetchQuestions'],
        queryFn: fetchQuestions,
    });

    const [currentQuestionPage, setCurrentQuestionPage] = useState<number>(0);
    const questionsPerPage = isMobile ? 1 : 3;

    const handleNextQuestion = () => {
        setCurrentQuestionPage(prev =>
            (prev + 1) * questionsPerPage >= questions.length ? 0 : prev + 1
        );
    };

    const handlePrevQuestion = () => {
        setCurrentQuestionPage(prev =>
            prev <= 0 ? Math.ceil(questions.length / questionsPerPage) - 1 : prev - 1
        );
    };

    const transformQuestionData = (dbQuestion: IQuestionFromDB): QuestionText => ({
        heading: dbQuestion.heading,
        description: dbQuestion.description,
    });

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
                    itemsToShow={3}
                >
                    {isMobile ? (
                        <ProductCard
                            key={currentProductIndex}
                            productIcon={assets[products[currentProductIndex]?.image]}
                            productName={products[currentProductIndex]?.heading}
                            productDescription={products[currentProductIndex]?.description}
                            productPrice={products[currentProductIndex]?.price}
                        >
                            {products[currentProductIndex]?.productDetails?.map((detail, i) => (
                                <ProductCardDetails
                                    key={i}
                                    productCharacteristicIcon={assets[detail.productCharacteristicIcon]}
                                    productCharacteristic={detail.productCharacteristic}
                                />
                            ))}
                        </ProductCard>
                    ) : (
                        products
                            .slice(currentProductIndex, currentProductIndex + itemsPerPage)
                            .map((product, index) => (
                                <ProductCard
                                    key={`${currentProductIndex}-${index}`}
                                    productIcon={assets[product.image]}
                                    productName={product.heading}
                                    productDescription={product.description}
                                    productPrice={product.price}
                                >
                                    {product.productDetails?.map((detail, i) => (
                                        <ProductCardDetails
                                            key={i}
                                            productCharacteristicIcon={assets[detail.productCharacteristicIcon]}
                                            productCharacteristic={detail.productCharacteristic}
                                        />
                                    ))}
                                </ProductCard>
                            ))
                    )}
                </Slider>
                <ProductSlider
                    currentPage={currentPage}
                    lastPage={totalPages}
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
                    products={feedbacks}
                    currentIndex={currentFeedbackPage * feedbacksPerPage}
                    direction={feedbackDirection}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    isMobile={isMobile}
                >
                    {feedbacks
                        .slice(
                            currentFeedbackPage * feedbacksPerPage,
                            currentFeedbackPage * feedbacksPerPage + feedbacksPerPage
                        )
                        .map((dbFeedback: IFeedbackFromDB) => (
                            <Feedback
                                key={dbFeedback.feedback_id}
                                text={transformFeedbackData(dbFeedback)}
                            />
                        ))}
                </Slider>

                <ProductSlider
                    currentPage={currentFeedbackPage + 1}
                    lastPage={Math.ceil(feedbacks.length / feedbacksPerPage)}
                    onClickNext={handleNextFeedback}
                    onClickPrev={handlePrevFeedback}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
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
                    products={questions}
                    currentIndex={currentQuestionPage * questionsPerPage}
                    direction={feedbackDirection}
                    handleNext={handleNextQuestion}
                    handlePrev={handlePrevQuestion}
                    isMobile={isMobile}
                >
                    {questions
                        .slice(
                            currentQuestionPage * questionsPerPage,
                            currentQuestionPage * questionsPerPage + questionsPerPage
                        )
                        .map((dbQuestion) => (
                            <Questions
                                key={dbQuestion.question_id}
                                text={transformQuestionData(dbQuestion)}
                            />
                        ))}
                </Slider>
                <ProductSlider
                    currentPage={currentQuestionPage + 1}
                    lastPage={Math.ceil(questions.length / questionsPerPage)}
                    onClickNext={handleNextQuestion}
                    onClickPrev={handlePrevQuestion}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </section>
        </div>
    );
};