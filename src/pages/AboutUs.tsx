import { AnimatedSection } from "../components/common/AnimatedSection"
import { AdBlock } from "../components/adBlock"
import { AnimatedImage } from "../components/common/AnimatedImg"
import { assets } from "../utils/exports/directories/assets"
import { AnimatedBox } from "../components/common/AnimatedBox"
import { OurValues } from "../components/OurValues"
import { Card } from "../components/Card"
import { valuesData } from "../data"
import { achievementsData } from "../data"
import { experienceData } from "../data"
import { OurTeamCard } from "../components/OurTeamCard"
import { ourPersonalDate } from "../data"
import { ValuedClientsFeedback } from "../components/ValuedClientsFeedback"
import { Slider } from "../components/Slider"
import { ProductSlider } from "../components/Slider/ProductSlider"
import { ValuedClientsData } from "../data"
import { useEffect, useState } from "react"
import { TitleAndText } from "../components/TitleAndText"

export const AboutUs = () => {

    const [currentFeedbackPage, setCurrentFeedbackPage] = useState(0);
    const [feedbackDirection, setFeedbackDirection] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const feedbacksPerPage = isMobile ? 1 : 1;



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1596);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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


    return (
        <div>
            <AnimatedSection className="container first-slide padding-top">
                <div className="apartaments-container AboutUs__image-size">
                    <AnimatedImage
                        src={assets["Group"]}
                        alt={assets["Group"]}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <AnimatedImage
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="apartments" src={assets['AboutUsHouse']} alt={assets['AboutUsHouse']} />
                </div>
                <div className="first-slide__spacing">
                    <TitleAndText heading="Our Journey" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients." />
                    <AnimatedBox
                        className="mobile-container "
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
                </div>
            </AnimatedSection>
            <AnimatedSection className="container values-section">
                <div className="values-text">
                    <h1 className="heading">Our Values</h1>
                    <p className="description-text">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className="values-wrapper">
                    <AnimatedBox
                        className="values-container"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.8 }}>
                        <OurValues items={valuesData} />
                    </AnimatedBox>
                </div>
            </AnimatedSection>
            <AnimatedSection className="container achivements">
                <TitleAndText heading="Our Achievements" description="Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary." />
                <div className="card-container">
                    {achievementsData.map((item, index) => (
                        <Card variant="basic" key={index} heading={item.heading} description={item.description} />
                    ))}
                </div>
            </AnimatedSection>
            <AnimatedSection className="container spacing">
            <TitleAndText heading="Navigating the Estatein Experience" description="At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works." />
                <div className="card-container">
                    {experienceData.map((item, index) => (
                        <div>
                            <div className="card-container__line">
                                <div className="purple-line"></div>
                                <p className="switched-text centered-text">Step 0{index += 1}</p>
                            </div>
                            <Card variant="purple" key={index} heading={item.heading} description={item.description} />
                        </div>
                    ))}
                </div>
            </AnimatedSection>
            <AnimatedSection className="container spacing">
            <TitleAndText heading="Meet the Estatein Team" description="At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality." />
                <div className="personal-container">
                    {ourPersonalDate.map((item, index) => (
                        <OurTeamCard key={index} image={item.image} name={item.name} profession={item.profession} />
                    ))}
                </div>
            </AnimatedSection>

            <AnimatedSection className="container our-valued-clients-gap">
            <TitleAndText heading="Our Valued Clients" description="Hear what our clients have to say about their experience with Estatein." />

                <Slider
                    items={ValuedClientsData.map(item => ({
                        id: item.id,
                        name: item.corporationName
                    }))}
                    currentIndex={currentFeedbackPage}
                    direction={feedbackDirection}
                    isMobile={isMobile}
                    handleNext={handleNextFeedback}
                    handlePrev={handlePrevFeedback}
                    itemsToShow={2}
                >
                    {ValuedClientsData.slice(
                        currentFeedbackPage * feedbacksPerPage,
                        (currentFeedbackPage + 1) * feedbacksPerPage
                    ).map((feedback, index) => (
                        <ValuedClientsFeedback key={index} feedback={feedback} />
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
    )
}