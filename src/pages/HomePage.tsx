import { useCallback, useMemo, useState } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/UI/Button";
import { Option } from "../components/Option";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { AnimatedBox } from "../components/common/Animated/AnimatedBox";
import { AnimatedImage } from "../components/common/Animated/AnimatedImg";
import { AnimatedSection } from "../components/common/Animated/AnimatedSection";
import { FeedbackFromDB, IQuestionFromDB } from "../types/interfaces";
// import { FeedbackText, QuestionText } from "../types/interfaces";
import { Slider } from "../components/Slider";
import { Feedback } from "../components/Feedback";
import { ProductSlider } from "../components/Slider/ProductSlider";
import { Questions } from "../components/Questions";
import { useQuery } from "@tanstack/react-query";
import { fetchFeedbacks } from "../services/feedbacks";
import { fetchQuestions } from "../services/questions";
import { AllHousing } from "../components/AllHousing";
import { AdBlock } from "../components/adBlock";
import { useIsMobile } from "../hooks/useIsMobile";
import { usePaginator } from "../hooks/usePaginator";

export const HomePage = () => {
    const isMobile = useIsMobile();
    const feedbacksPerPage = isMobile ? 1 : 3;
    const questionsPerPage = isMobile ? 1 : 3;

    const { data: feedbacks = [] } = useQuery({
        queryKey: ["fetchFeedbacks"],
        queryFn: fetchFeedbacks,
    });

    const { data: questions = [] } = useQuery<IQuestionFromDB[]>({
        queryKey: ["fetchQuestions"],
        queryFn: fetchQuestions,
    });

    const {
        currentPage: feedbackPage,
        nextPage: nextFeedback,
        prevPage: prevFeedback,
        paginatedItems: feedbacksToShow
    } = usePaginator<FeedbackFromDB>(feedbacks, feedbacksPerPage);

    const {
        currentPage: questionPage,
        nextPage: nextQuestion,
        prevPage: prevQuestion,
        paginatedItems: questionsToShow
    } = usePaginator<IQuestionFromDB>(questions, questionsPerPage);

    // const transformFeedbackData = useCallback((dbFeedback: FeedbackFromDB): FeedbackText => ({
    //     heading: dbFeedback.heading,
    //     description: dbFeedback.description,
    //     userName: dbFeedback.user_name,
    //     userLocation: dbFeedback.user_location,
    //     stars: dbFeedback.star_count,
    //     userIcon: dbFeedback.icon,
    // }), []);

    // const transformQuestionData = (dbQuestion: IQuestionFromDB): QuestionText => ({
    //     heading: dbQuestion.heading,
    //     description: dbQuestion.description,
    // });

    const [feedbackDirection, setFeedbackDirection] = useState(1);

    const handleNextFeedback = useCallback(() => {
        setFeedbackDirection(1);
        nextFeedback();
    }, [setFeedbackDirection, nextFeedback])


    const handlePrevFeedback = useCallback(() => {
        setFeedbackDirection(-1);
        prevFeedback();
    }, [setFeedbackDirection, prevFeedback])

    const handleNextQuestion = useCallback(() => {
        setFeedbackDirection(1);
        nextQuestion();
    }, [setFeedbackDirection, nextQuestion])

    const handlePrevQuestion = useCallback(() => {
        setFeedbackDirection(-1);
        prevQuestion();
    }, [setFeedbackDirection, prevQuestion])

    const memoizedFeedbacks = useMemo(() => {
        return feedbacksToShow.map(feedback => ({
            id: String(feedback.feedback_id),
            name: feedback.heading,
            heading: feedback.heading,
            description: feedback.description,
            userName: feedback.user_name,
            userLocation: feedback.user_location,
            stars: feedback.star_count,
            userIcon: feedback.icon,
        }));
    }, [feedbacksToShow]);

    const memoizedQuestions = useMemo(() => {
        return questionsToShow.map(q => ({
            id: String(q.question_id),
            name: q.heading,
            heading: q.heading,
            description: q.description,
        }));
    }, [questionsToShow]);

    return (
        <>
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

            <AllHousing />

            <AnimatedSection className="container products-slide">
                <div>
                    <h2 className="second-heading">What Our Clients Say</h2>
                    <p className="description-text">
                        Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                    </p>
                </div>

                <Slider
                    items={memoizedFeedbacks}
                    currentIndex={feedbackPage * feedbacksPerPage}
                    direction={feedbackDirection}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    isMobile={isMobile}
                >
                    {memoizedFeedbacks.map(feedback => (
                        <Feedback key={feedback.id} text={feedback} />
                    ))}
                </Slider>

                <ProductSlider
                    currentPage={feedbackPage + 1}
                    lastPage={Math.ceil(feedbacks.length / feedbacksPerPage)}
                    onClickNext={handleNextFeedback}
                    onClickPrev={handleNextFeedback}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </AnimatedSection>

            <AnimatedSection className="container products-slide">
                <div>
                    <h2 className="second-heading">Frequently Asked Questions</h2>
                    <p className="description-text">
                        Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
                    </p>
                </div>

                <Slider
                    items={memoizedQuestions}
                    currentIndex={questionPage * questionsPerPage}
                    direction={feedbackDirection}
                    handleNext={handleNextQuestion}
                    handlePrev={handlePrevQuestion}
                    isMobile={isMobile}
                >
                    {memoizedQuestions.map((question) => (
                        <Questions key={question.id} text={question}
                        />
                    ))}
                </Slider>

                <ProductSlider
                    currentPage={questionPage + 1}
                    lastPage={Math.ceil(questions.length / questionsPerPage)}
                    onClickNext={handleNextQuestion}
                    onClickPrev={handlePrevQuestion}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </AnimatedSection>
        </>
    );
};