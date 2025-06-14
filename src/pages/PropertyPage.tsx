import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { Questions } from "../components/Questions";
import { RegisterInput } from "../components/RegisterInput";
import { Slider } from "../components/Slider";
import { ProductSlider } from "../components/Slider/ProductSlider";
import { TitleAndText } from "../components/TitleAndText";
import { Button } from "../components/UI/Button";
import { Popup } from "../components/UI/Popup/Popup";
import { useIsMobile } from "../hooks/useIsMobile";
import { useOnScreen } from "../hooks/useOnScreen";
import { usePaginator } from "../hooks/usePaginator";
import { usePaginationHandlers } from "../hooks/usePaginationHandlers";
import { assets } from "../utils/exports/directories/assets";
import { IQuestionFromDB } from "../types/interfaces";
import { fetchQuestions } from "../services/questions";

const PropertyPageInfo = [
    {
        id: Date.now(),
        heading: "First Name",
        description: "Enter First Name"
    },
    {
        id: Date.now(),
        heading: "Last Name",
        description: "Enter Last Name"
    },
    {
        id: Date.now(),
        heading: "Email",
        description: "Enter your Email"
    },
    {
        id: Date.now(),
        heading: "Phone",
        description: "Enter Phone Number"
    },
    {
        id: Date.now(),
        heading: "Selected Property",
        description: "Seaside Serenity Villa, Malibu, California",
        isLarge: true,
        isBasic: false,
        isArrow: false,
        largest: true
    },
];

export const PropertyPage = () => {
    const isMobile = useIsMobile();
    const adaptivePerPage = isMobile ? 1 : 3;

    // Questions data fetching
    const { data: questions = [] } = useQuery<IQuestionFromDB[]>({
        queryKey: ["fetchQuestions"],
        queryFn: fetchQuestions,
    });

    // Questions pagination
    const {
        currentPage: questionPage,
        nextPage: nextQuestion,
        prevPage: prevQuestion,
        paginatedItems: questionsToShow
    } = usePaginator<IQuestionFromDB>(questions, adaptivePerPage);

    const [feedbackDirection, setFeedbackDirection] = useState(1);
    const questionsHandlers = usePaginationHandlers({
        directionSetter: setFeedbackDirection,
        onNext: nextQuestion,
        onPrev: prevQuestion,
    });

    const memoizedQuestions = useMemo(() => {
        return questionsToShow.map(q => ({
            id: String(q.question_id),
            name: q.heading,
            heading: q.heading,
            description: q.description,
            originalData: q,
        }));
    }, [questionsToShow]);

    const [selectedQuestion, setSelectedQuestion] = useState<IQuestionFromDB | null>(null);
    const { ref: questionsSectionRef, isVisible: isQuestionsSectionVisible } = useOnScreen("0px");

    // Lock scroll when popup is open
    useEffect(() => {
        if (selectedQuestion) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedQuestion]);

    return (
        <>
            {selectedQuestion && (
                <Popup onClose={() => setSelectedQuestion(null)}>
                    <TitleAndText
                        heading={selectedQuestion.heading}
                        description={selectedQuestion.description}
                    />
                </Popup>
            )}

            <AnimatedSection className="container property-product">
                <div className="property-product__slider">
                    <h1 className="card-text">Seaside Serenity Villa</h1>
                    <div><span className="ad-text-medium">Price</span> <b className="card-heading-text">$1,250,000</b></div>
                </div>
                <div className="property-propduct__slider-twister">
                    <div className="property-propduct__slider-top">
                        <div>
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                        </div>
                    </div>
                    <div className="property-propduct__slider-photos">
                        <img src={assets['Image-1']} alt={assets['Image-1']} />
                        <img src={assets['Image-1']} alt={assets['Image-1']} />
                    </div>
                    <div className="property-propduct__slider-switcher">
                        <Button
                            variant="circle-button"
                        >
                            <img className="rotated-arrow" src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <Button
                            variant="circle-button"
                        >
                            <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container property-page-description">
                <div className="property-page-description-block">
                    <p className="card-heading-text">Description</p>
                    <span className="description-text">Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</span>
                    <hr className="separation-horizontal" />
                    <div className="property-page-description__conditions-wrapper">
                        <div className="property-page-description__conditions">
                            <div >
                                <img src={assets['bedroom']} alt={assets['bedroom']} />
                                <span className="description-text">Bedrooms</span>
                            </div>
                            <h3 className="card-heading-text">04</h3>
                        </div>
                        <hr className="separation-vetrical" />
                    </div>
                </div>
                <div className="property-page-description-block">
                    <h2 className="card-heading-text">Key Features and Amenities</h2>
                    <div className="property-page-description-block__feature">
                        <div></div>
                        <img src={assets['flash-property']} alt={assets['flash-property']} />
                        <span className="description-text">Expansive oceanfront terrace for outdoor entertaining</span>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container">
                <div className="property-page__register">
                    <div className="property-page__register-text">
                        <h2 className="second-heading">Inquire About Seaside Serenity Villa</h2>
                        <p className="description-text">Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.</p>
                    </div>
                    <div className="register-box property-page-register-box">
                        {PropertyPageInfo.map((item, index) => (
                            <RegisterInput
                                className="contacts-input"
                                key={index}
                                heading={item.heading}
                                description={item.description}
                                isArrow={item.isArrow}
                                isLarge={item.isLarge}
                                isBasic={item.isBasic}
                                largest={item.largest}
                            />
                        ))}
                        <p className="options-text">Message</p>
                        <textarea className="header-items-text registered-box-text-area" placeholder="Enter your Message here.."></textarea>

                        <div className="register__send-message">
                            <div className="flex">
                                <input className="register-checkbox" type="checkbox" />
                                <p className="header-items-text">I agree with Terms of Use and Privacy Policy</p>
                            </div>
                            <Button variant="secondary">Send Your Message</Button>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container property-page__details">
                <TitleAndText
                    heading="Comprehensive Pricing Details"
                    description="At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision"
                />

                <div className="property-page__note">
                    <h2 className="card-heading-text">Note</h2>
                    <hr className=""/>
                    <span className="description-text">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</span>
                </div>
            </AnimatedSection>

            <AnimatedSection
                ref={questionsSectionRef}
                className="container products-slide"
                initial={{ opacity: 0 }}
                animate={isQuestionsSectionVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div>
                    <h2 className="second-heading">Frequently Asked Questions</h2>
                    <p className="description-text">
                        Find answers to common questions about our properties, services, and the buying process.
                    </p>
                </div>

                <Slider
                    items={memoizedQuestions}
                    currentIndex={questionPage * adaptivePerPage}
                    direction={feedbackDirection}
                    handleNext={questionsHandlers.handleNext}
                    handlePrev={questionsHandlers.handlePrev}
                    isMobile={isMobile}
                >
                    {memoizedQuestions.map((question) => (
                        <Questions
                            key={question.id}
                            text={question}
                            onClick={() => setSelectedQuestion(question.originalData)}
                        />
                    ))}
                </Slider>

                <ProductSlider
                    currentPage={questionPage + 1}
                    lastPage={Math.ceil(questions.length / adaptivePerPage)}
                    onClickNext={questionsHandlers.handleNext}
                    onClickPrev={questionsHandlers.handlePrev}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </AnimatedSection>
        </>
    );
};