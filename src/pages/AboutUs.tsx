import { AnimatedSection } from "../components/common/AnimatedSection"
import { AdBlock } from "../components/adBlock"
import { AnimatedImage } from "../components/common/AnimatedImg"
import { assets } from "../utils/exports/directories/assets"
import { AnimatedBox } from "../components/common/AnimatedBox"
import { OurValues } from "../components/OurValues"
import { Achievements } from "../components/Achievements"
export const AboutUs = () => {

    const data = [
        {
            heading: "Trust",
            description: "Trust is the cornerstone of every successful real estate transaction.",
            image: assets["starValues"]
        },
        {
            heading: "Excellence",
            description: "We set the bar high for ourselves. From the properties we list to the services we provide.",
            image: assets["ClientValues"]
        },
        {
            heading: "Client-Centric",
            description: "Your dreams and needs are at the center of our universe. We listen, understand.",
            image: assets["exellentValues"]
        },
        {
            heading: "Our Commitment",
            description: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
            image: assets["starValues"]
        },
    ]

    const achievementsData = [
        {
            heading: "3+ Years of Excellence",
            description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate."
        },
        {
            heading: "Happy Clients",
            description: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do."
        },
        {
            heading: "Industry Recognition",
            description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence."
        },
    ]

    return (
        <div>
            <AnimatedSection className="container first-slide">
                <div className="apartaments-container AboutUs__image-size">
                    <AnimatedImage
                        src={assets["Group"]}
                        alt={assets["Group"]}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    />
                    <AnimatedImage className="apartments" src={assets['AboutUsHouse']} alt={assets['AboutUsHouse']} />
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
                        <OurValues items={data} />
                    </AnimatedBox>
                </div>
            </AnimatedSection>
            <AnimatedSection className="container achivements">
                <div className="heading-gap">
                    <h1 className="heading">Our Achievements</h1>
                    <p className="description-text">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</p>
                </div>
                <div className="achievements-container">
                    {achievementsData.map((item, index) => (
                        <Achievements key={index} heading={item.heading} description={item.description} />
                    ))}
                </div>
            </AnimatedSection>
        </div>
    )
}