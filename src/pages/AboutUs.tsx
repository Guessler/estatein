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

export const AboutUs = () => {
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
                    <div className="heading-gap">
                        <h1 className="heading">Our Journey</h1>
                        <p className="description-text">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>
                    </div>
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
                <div className="heading-gap">
                    <h1 className="heading">Our Achievements</h1>
                    <p className="description-text">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className="card-container">
                    {achievementsData.map((item, index) => (
                        <Card variant="basic" key={index} heading={item.heading} description={item.description} />
                    ))}
                </div>
            </AnimatedSection>
            <AnimatedSection className="container spacing">
                <div className="heading-gap">
                    <h1 className="heading">Navigating the Estatein Experience</h1>
                    <p className="description-text">At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.</p>
                </div>
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
                <div className="heading-gap">
                    <h1 className="heading">Meet the Estatein Team</h1>
                    <p className="description-text">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
                </div>
                <div className="personal-container">
                    {ourPersonalDate.map((item, index) => (
                        <OurTeamCard key={index} image={item.image} name={item.name} profession={item.profession} />
                    ))}
                </div>
            </AnimatedSection>

            {/* <AnimatedSection> */}
                {/* <div className="heading-gap">
                    <h1 className="heading">Meet the Estatein Team</h1>
                    <p className="description-text">At Estatein, our success is driven by the dedication and expertise of our team. Get to know the people behind our mission to make your real estate dreams a reality.</p>
                </div> */}
                {/* <Slider>

                </Slider> */}
            {/* </AnimatedSection> */}
        </div>
    )
}