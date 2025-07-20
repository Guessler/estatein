import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { Questions } from "../components/UI/Questions";
import { RegisterInput } from "../components/UI/RegisterInput";
import { Slider } from "../components/UI/Slider";
import { ProductSlider } from "../components/UI/Slider/ProductSlider";
import { TitleAndText } from "../components/UI/TitleAndText";
import { Button } from "../components/UI/Button";
import { Popup } from "../components/UI/Popup/Popup";
import { useIsMobile } from "../hooks/useIsMobile";
import { useOnScreen } from "../hooks/useOnScreen";
import { usePaginator } from "../hooks/usePaginator";
import { usePaginationHandlers } from "../hooks/usePaginationHandlers";
import { assets } from "../utils/exports/directories/assets";
import { IQuestionFromDB } from "../types/interfaces";
import { fetchQuestions } from "../services/questions";
import { useLocation } from "react-router-dom";

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
    const location = useLocation();
    const { product } = location.state || {};
    const isMobile = useIsMobile();
    const adaptivePerPage = isMobile ? 1 : 3;

    const { data: questions = [] } = useQuery<IQuestionFromDB[]>({
        queryKey: ["fetchQuestions"],
        queryFn: fetchQuestions,
    });

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

    // Form state management
    const [inputValues, setInputValues] = useState<string[]>(Array(PropertyPageInfo.length).fill(''));
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<boolean[]>(Array(PropertyPageInfo.length).fill(false));
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(false);

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

    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);

        const newErrors = [...errors];
        newErrors[index] = false;
        setErrors(newErrors);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+?[1-9]\d{0,2}[ -]?\(?\d{1,4}?\)?[ -]?\d{1,4}[ -]?\d{1,4}$/;
        return phoneRegex.test(phone);
    };

    const validateName = (name: string) => {
        const nameRegex = /^[^\d]*$/;
        return nameRegex.test(name);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (checkboxError) {
            setCheckboxError(false);
        }
    };

    const handleSendMessage = async () => {
        const firstNameIndex = PropertyPageInfo.findIndex(item => item.heading === "First Name");
        const lastNameIndex = PropertyPageInfo.findIndex(item => item.heading === "Last Name");
        const emailIndex = PropertyPageInfo.findIndex(item => item.heading === "Email");
        const phoneIndex = PropertyPageInfo.findIndex(item => item.heading === "Phone");

        const firstNameInput = inputValues[firstNameIndex];
        const lastNameInput = inputValues[lastNameIndex];
        const emailInput = inputValues[emailIndex];
        const phoneInput = inputValues[phoneIndex];

        let hasError = false;
        const newErrors = Array(PropertyPageInfo.length).fill(false);

        if (!validateName(firstNameInput)) {
            newErrors[firstNameIndex] = true;
            hasError = true;
        }
        if (!validateName(lastNameInput)) {
            newErrors[lastNameIndex] = true;
            hasError = true;
        }
        if (!validateEmail(emailInput)) {
            newErrors[emailIndex] = true;
            hasError = true;
        }
        if (!validatePhone(phoneInput)) {
            newErrors[phoneIndex] = true;
            hasError = true;
        }

        inputValues.forEach((value, index) => {
            if (value.trim() === '' && index !== PropertyPageInfo.length - 1) {
                newErrors[index] = true;
                hasError = true;
            }
        });

        if (!isChecked) {
            setCheckboxError(true);
            hasError = true;
        } else {
            setCheckboxError(false);
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        const formData = {
            firstName: firstNameInput,
            lastName: lastNameInput,
            email: emailInput,
            phone: phoneInput,
            property: product?.heading || "Seaside Serenity Villa",
            message: message,
            agreement: isChecked
        };

        try {
            const response = await fetch('https://your-backend.com/api/property-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Property inquiry successfully sent');
                alert('Your property inquiry has been sent!');
                setInputValues(Array(PropertyPageInfo.length).fill(''));
                setMessage('');
                setIsChecked(false);
                setErrors(Array(PropertyPageInfo.length).fill(false));
                setCheckboxError(false);
            } else {
                throw new Error('Error submitting property inquiry');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit the form. Please try again later.');
        }
    };

    const [elementsToShow, setElementsToShow] = useState(9);
    const [bigElemToShow, setBigElemToShow] = useState(2);
    
    useEffect(() => {
        const checkScreenSize = () => {
            const isSmallScreen = window.innerWidth <= 1596;
            setElementsToShow(isSmallScreen ? 3 : 9);
            setBigElemToShow(isSmallScreen ? 1 : 2);
        };
    
        checkScreenSize();
    
        window.addEventListener('resize', checkScreenSize);
    
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

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
                    <h1 className="card-text">{product?.heading || "Seaside Serenity Villa"}</h1>
                    <div>
                        <span className="ad-text-medium">Price</span>
                        <b className="card-heading-text">${product?.price?.toLocaleString() || "1,250,000"}</b>
                    </div>
                </div>
                <div className="property-propduct__slider-twister">
                    <div className="property-propduct__slider-top">

                        <div className="small-img">
                            {Array.from({ length: elementsToShow }).map((_, i) => (
                                <img
                                    key={i}
                                    src={assets[product?.image || 'Image-1']}
                                    alt={product?.heading ? `${product.heading} - ${i + 1}` : 'Property Image'}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="property-propduct__slider-photos">
                        {Array.from({ length: bigElemToShow }).map((_, i) => (
                            <img
                                key={`thumb-${i}`}
                                src={assets[product?.image || 'Image-1']}
                                alt={product?.heading ? `Thumbnail ${i + 1}` : 'Thumbnail'}
                            />
                        ))}
                    </div>
                    <div className="property-propduct__slider-switcher">
                        <Button variant="circle-button">
                            <img className="rotated-arrow" src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className="property-product__slider-page"></div>
                        ))}
                        <Button variant="circle-button">
                            <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection className="container property-page-description">
                <div className="property-page-description-block">
                    <p className="card-heading-text">Description</p>
                    <span className="description-text">
                        Discover your own piece of paradise with the Seaside Serenity Villa. With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.
                    </span>
                    <hr className="separation-horizontal" />
                    <div className="property-page-description__conditions-wrapper">
                        <div className="property-page-description__conditions">
                            <div>
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
                        <h2 className="second-heading">Inquire About {product?.heading || "Seaside Serenity Villa"}</h2>
                        <p className="description-text">
                            Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.
                        </p>
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
                                value={inputValues[index]}
                                onChange={(value) => handleInputChange(index, value)}
                                error={errors[index]}
                            />
                        ))}
                        <p className="options-text">Message</p>
                        <textarea
                            className="header-items-text registered-box-text-area"
                            placeholder="Enter your Message here.."
                            value={message}
                            onChange={handleMessageChange}
                        ></textarea>
                        <div className="register__send-message">
                            <div className="flex">
                                <input
                                    className={`register-checkbox ${checkboxError ? 'error' : ''}`}
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={handleCheckboxChange}
                                />
                                <p className={!isChecked && checkboxError ? 'red header-items-text' : 'header-items-text'}>
                                    I agree with Terms of Use and Privacy Policy
                                </p>
                            </div>
                            <Button variant="secondary" onClick={handleSendMessage}>
                                Send Your Message
                            </Button>
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
                    <hr />
                    <span className="description-text">
                        The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                    </span>
                </div>
                <div className="property-page__more">
                    <div>
                        <span className="description-text">Listing Price</span>
                        <h2 className="ad-text-fat">${product?.price?.toLocaleString() || "1,250,000"}</h2>
                    </div>
                    <div className="property-page__more-info">
                        <div>
                            <h3 className="card-heading-text">Additional Fees</h3>
                            <Button>Learn More</Button>
                        </div>
                        <hr className="separation-horizontal" />
                        <div>
                            <div>
                                <span className="description-text">Property Transfer Tax</span>
                                <div>
                                    <h3 className="card-heading-text">$25,000</h3>
                                </div>
                            </div>
                        </div>
                    </div>
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