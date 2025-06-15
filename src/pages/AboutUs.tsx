import { useEffect, useState } from "react";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { AdBlock } from "../components/adBlock";
import { AnimatedImage } from "../components/common/Animated/AnimatedImg";
import { assets } from "../utils/exports/directories/assets";
import { AnimatedBox } from "../components/common/Animated/AnimatedBox";
import { OurValues } from "../components/OurValues";
import { Card } from "../components/Card";
import { valuesData, achievementsData, experienceData } from "../data";
import { OurTeamCard } from "../components/OurTeamCard";
import { ourPersonalDate } from "../data";
import { ValuedClientsFeedback } from "../components/ValuedClientsFeedback";
import { Slider } from "../components/Slider";
import { ProductSlider } from "../components/Slider/ProductSlider";
import { ValuedClientsData } from "../data";
import { TitleAndText } from "../components/TitleAndText";
import { ABOUT_PAGE } from "../consts/text/en/AboutUsPageText";
import { SmallChat } from "../components/SmallChat";
import { useOnScreen } from "../hooks/useOnScreen";

export const AboutUs = () => {
    const [currentFeedbackPage, setCurrentFeedbackPage] = useState(0);
    const [feedbackDirection, setFeedbackDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState<{
        icon: string;
        name: string;
        post: string;
    } | null>(null);
    const [initialMessage, setInitialMessage] = useState("");
    const [chatValues, setChatValues] = useState<{ [key: string]: string }>({});
    const feedbacksPerPage = isMobile ? 1 : 2;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNextFeedback = () => {
        if (currentFeedbackPage < Math.ceil(ValuedClientsData.length / feedbacksPerPage) - 1) {
            setFeedbackDirection(1);
            setCurrentFeedbackPage(currentFeedbackPage + 1);
        }
    };

    const handlePrevFeedback = () => {
        if (currentFeedbackPage > 0) {
            setFeedbackDirection(-1);
            setCurrentFeedbackPage(currentFeedbackPage - 1);
        }
    };

    const handleChange = (employeeName: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setChatValues((prev) => ({
            ...prev,
            [employeeName]: e.target.value,
        }));
    };

    const handleSendMessage = (
        employee: { icon: string; name: string; post: string },
        message: string
    ) => {
        if (message.trim()) {
            setSelectedEmployee(employee);
            setInitialMessage(message);
            setIsChatOpen(true);
            setChatValues(prev => ({ ...prev, [employee.name]: "" }));
        }
    };

    // Используем useOnScreen для отслеживания видимости секций
    const { ref: heroSectionRef, isVisible: isHeroVisible } = useOnScreen("0px");
    const { ref: valuesSectionRef, isVisible: isValuesVisible } = useOnScreen("0px");
    const { ref: achievementsSectionRef, isVisible: isAchievementsVisible } = useOnScreen("0px");
    const { ref: processSectionRef, isVisible: isProcessVisible } = useOnScreen("0px");
    const { ref: teamSectionRef, isVisible: isTeamVisible } = useOnScreen("0px");
    const { ref: feedbackSectionRef, isVisible: isFeedbackVisible } = useOnScreen("0px");

    return (
        <div className="about-us-page">
            {isChatOpen && selectedEmployee && (
                <SmallChat
                    onClose={() => setIsChatOpen(false)}
                    employee={selectedEmployee}
                    initialMessage={initialMessage}
                />
            )}

            {/* HERO Section */}
            <AnimatedSection
                ref={heroSectionRef}
                className="container first-slide padding-top"
                initial={{ opacity: 0 }}
                animate={isHeroVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="apartaments-container AboutUs__image-size">
                    <AnimatedImage
                        src={assets["Group"]}
                        alt="Company Vision"
                        initial={{ opacity: 0, x: -100 }}
                        animate={isHeroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <AnimatedImage
                        src={assets["AboutUsHouse"]}
                        alt="Dream Home"
                        initial={{ opacity: 0, x: 100 }}
                        animate={isHeroVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="apartments"
                    />
                </div>
                <div className="first-slide__spacing">
                    <TitleAndText
                        heading={ABOUT_PAGE.HERO.HEADING}
                        description={ABOUT_PAGE.HERO.DESCRIPTION}
                    />
                    <AnimatedBox
                        className="mobile-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isHeroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <div className="ad-block-row">
                            <AdBlock number="200+" text="Happy Customers" />
                            <AdBlock number="10k+" text="Properties For Clients" />
                        </div>
                        <AdBlock number="16+" text="Years of Experience" />
                    </AnimatedBox>
                </div>
            </AnimatedSection>

            {/* Values Section */}
            <AnimatedSection
                ref={valuesSectionRef}
                className="container values-section"
                initial={{ opacity: 0 }}
                animate={isValuesVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="values-text">
                    <AnimatedBox
                        initial={{ opacity: 0, y: 20 }}
                        animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <h1 className="heading">{ABOUT_PAGE.OUR_VALUES.HEADING}</h1>
                        <p className="description-text">{ABOUT_PAGE.OUR_VALUES.DESCRIPTION}</p>
                    </AnimatedBox>
                </div>
                <div className="values-wrapper">
                    <AnimatedBox
                        className="values-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={isValuesVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <OurValues items={valuesData} />
                    </AnimatedBox>
                </div>
            </AnimatedSection>

            {/* Achievements Section */}
            <AnimatedSection
                ref={achievementsSectionRef}
                className="container achivements"
                initial={{ opacity: 0 }}
                animate={isAchievementsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <AnimatedBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={isAchievementsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <TitleAndText
                        heading="Our Achievements"
                        description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
                    />
                </AnimatedBox>
                <div className="card-container">
                    {achievementsData.map((item, index) => (
                        <AnimatedBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isAchievementsVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        >
                            <Card variant="basic" heading={item.heading} description={item.description} />
                        </AnimatedBox>
                    ))}
                </div>
            </AnimatedSection>

            {/* Process Section */}
            <AnimatedSection
                ref={processSectionRef}
                className="container spacing"
                initial={{ opacity: 0 }}
                animate={isProcessVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <AnimatedBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={isProcessVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <TitleAndText
                        heading="Navigating the Estatein Experience"
                        description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
                    />
                </AnimatedBox>
                <div className="card-container">
                    {experienceData.map((item, index) => (
                        <AnimatedBox
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isProcessVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        >
                            <div>
                                <div className="card-container__line">
                                    <div className="purple-line"></div>
                                    <p className="switched-text centered-text">Step 0{index + 1}</p>
                                </div>
                                <Card variant="purple" heading={item.heading} description={item.description} />
                            </div>
                        </AnimatedBox>
                    ))}
                </div>
            </AnimatedSection>

            {/* Team Section */}
            <AnimatedSection
                ref={teamSectionRef}
                className="container spacing"
                initial={{ opacity: 0 }}
                animate={isTeamVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <AnimatedBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={isTeamVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <TitleAndText
                        heading="Meet the Estatein Team"
                        description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality."
                    />
                </AnimatedBox>
                <div className="personal-container">
                    {ourPersonalDate.map((person) => (
                        <OurTeamCard
                            key={person.name}
                            image={person.image}
                            name={person.name}
                            profession={person.profession}
                            value={chatValues[person.name] || ""}
                            onChange={handleChange(person.name)}
                            onSendMessage={() => handleSendMessage(
                                {
                                    icon: person.image,
                                    name: person.name,
                                    post: person.profession,
                                },
                                chatValues[person.name] || "Hello"
                            )}
                        />
                    ))}
                </div>
            </AnimatedSection>

            {/* Feedback Section */}
            <AnimatedSection
                ref={feedbackSectionRef}
                className="container our-valued-clients-gap"
                initial={{ opacity: 0 }}
                animate={isFeedbackVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <AnimatedBox
                    initial={{ opacity: 0, y: 20 }}
                    animate={isFeedbackVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <TitleAndText
                        heading="Our Valued Clients"
                        description="Hear what our clients have to say about their experience with Estatein."
                    />
                </AnimatedBox>
                <Slider
                    items={ValuedClientsData.map((item) => ({
                        id: item.id,
                        name: item.corporationName,
                    }))}
                    currentIndex={currentFeedbackPage}
                    direction={feedbackDirection}
                    isMobile={isMobile}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    itemsToShow={feedbacksPerPage}
                >
                    {ValuedClientsData.slice(
                        currentFeedbackPage * feedbacksPerPage,
                        (currentFeedbackPage + 1) * feedbacksPerPage
                    ).map((feedback, idx) => (
                        <ValuedClientsFeedback key={idx} feedback={feedback} />
                    ))}
                </Slider>
                <ProductSlider
                    currentPage={currentFeedbackPage + 1}
                    lastPage={Math.ceil(ValuedClientsData.length / feedbacksPerPage)}
                    onClickNext={handleNextFeedback}
                    onClickPrev={handlePrevFeedback}
                >
                    <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                </ProductSlider>
            </AnimatedSection>
        </div>
    );
};
