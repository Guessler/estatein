import { useEffect, useMemo, useState } from "react";
import { assets } from "../utils/exports/directories/assets";
import { Button } from "../components/UI/Button";
import { Option } from "../components/Option";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { AnimatedBox } from "../components/common/Animated/AnimatedBox";
import { AnimatedImage } from "../components/common/Animated/AnimatedImg";
// import AnimatedSection from "../components/common/Animated/AnimatedSection";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { FeedbackFromDB, IQuestionFromDB } from "../types/interfaces";
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
import { usePaginationHandlers } from "../hooks/usePaginationHandlers";
import { HOME_PAGE } from "../consts/text/HomePageText";
import { Popup } from "../components/UI/Popup/Popup";
import { TitleAndText } from "../components/TitleAndText";
import { useOnScreen } from "../hooks/useOnScreen";

export const HomePage = () => {
    const isMobile = useIsMobile();
    const adaptivePerPage = isMobile ? 1 : 3;

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
    } = usePaginator<FeedbackFromDB>(feedbacks, adaptivePerPage);

    const {
        currentPage: questionPage,
        nextPage: nextQuestion,
        prevPage: prevQuestion,
        paginatedItems: questionsToShow
    } = usePaginator<IQuestionFromDB>(questions, adaptivePerPage);

    const [feedbackDirection, setFeedbackDirection] = useState(1);
    const feedbackHandlers = usePaginationHandlers({
        directionSetter: setFeedbackDirection,
        onNext: nextFeedback,
        onPrev: prevFeedback,
    });

    const questionsHandlers = usePaginationHandlers({
        directionSetter: setFeedbackDirection,
        onNext: nextQuestion,
        onPrev: prevQuestion,
    });

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
            originalData: q,
        }));
    }, [questionsToShow]);

    const [selectedQuestion, setSelectedQuestion] = useState<IQuestionFromDB | null>(null);

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

    // Используем useOnScreen для отслеживания видимости секций
    const { ref: optionsWrapperRef, isVisible: isOptionsVisible } = useOnScreen("0px");
    const { ref: allHousingRef, isVisible: isAllHousingVisible } = useOnScreen("0px");
    const { ref: feedbackSectionRef, isVisible: isFeedbackSectionVisible } = useOnScreen("0px");
    const { ref: questionsSectionRef, isVisible: isQuestionsSectionVisible } = useOnScreen("0px");

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
                                {HOME_PAGE.HERO.HEADING}
                            </AnimatedBox>
                            <AnimatedBox
                                className="description-text"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            >
                                {HOME_PAGE.HERO.DESCRIPTION}
                            </AnimatedBox>
                        </div>
                        <AnimatedBox
                            className="first-slide__buttons"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                        >
                            <Button>{HOME_PAGE.HERO.BUTTON_PRIMARY}</Button>
                            <Button variant="secondary">{HOME_PAGE.HERO.BUTTON_SECONDINARY}</Button>
                        </AnimatedBox>
                        <AnimatedBox
                            className="mobile-container"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                        >
                            <div className="ad-block-row">
                                <AdBlock number="200+" text={HOME_PAGE.AD_BLOCK.HAPPY_CUSTOMERS} />
                                <AdBlock number="10k+" text={HOME_PAGE.AD_BLOCK.PROPERTIES_FOR_CLIENTS} />
                            </div>
                            <AdBlock number="16+" text={HOME_PAGE.AD_BLOCK.YEARS_OF_EXPERIANCE} />
                        </AnimatedBox>
                    </AnimatedBox>
                </main>
            </AnimatedSection>

            <AnimatedSection
                ref={optionsWrapperRef}
                initial={{ opacity: 0 }}
                animate={isOptionsVisible ? { opacity: 1 } : { opacity: 0 }}
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

            <AnimatedSection
                ref={allHousingRef} // Теперь это работает
                initial={{ opacity: 0, y: 50 }}
                animate={isAllHousingVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Анимация при видимости
                transition={{ duration: 1 }}
            >
                <AllHousing />
            </AnimatedSection>

            <AnimatedSection
                ref={feedbackSectionRef} // Теперь это работает
                className="container products-slide"
                initial={{ opacity: 0 }}
                animate={isFeedbackSectionVisible ? { opacity: 1 } : { opacity: 0 }} // Анимация при видимости
                transition={{ duration: 1 }}
            >
                <div>
                    <h2 className="second-heading">{HOME_PAGE.FEEDBACKSECTION.HEADING}</h2>
                    <p className="description-text">
                        {HOME_PAGE.FEEDBACKSECTION.DESCRIPTION}
                    </p>
                </div>

                <Slider
                    items={memoizedFeedbacks}
                    currentIndex={feedbackPage * adaptivePerPage}
                    direction={feedbackDirection}
                    handleNext={feedbackHandlers.handleNext}
                    handlePrev={feedbackHandlers.handlePrev}
                    isMobile={isMobile}
                >
                    {memoizedFeedbacks.map(feedback => (
                        <Feedback key={feedback.id} text={feedback} />
                    ))}
                </Slider>

                <ProductSlider
                    currentPage={feedbackPage + 1}
                    lastPage={Math.ceil(feedbacks.length / adaptivePerPage)}
                    onClickNext={feedbackHandlers.handleNext}
                    onClickPrev={feedbackHandlers.handlePrev}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </AnimatedSection>

            <AnimatedSection
                ref={questionsSectionRef} // Теперь это работает
                className="container products-slide"
                initial={{ opacity: 0 }}
                animate={isQuestionsSectionVisible ? { opacity: 1 } : { opacity: 0 }} // Анимация при видимости
                transition={{ duration: 1 }}
            >
                <div>
                    <h2 className="second-heading">{HOME_PAGE.QUESTIONS.HEADING}</h2>
                    <p className="description-text">
                        {HOME_PAGE.QUESTIONS.DESCRIPTION}
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
