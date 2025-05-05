import { AnimatedSection } from "../components/common/AnimatedSection"
import { AdBlock } from "../components/adBlock"
import { AnimatedImage } from "../components/common/AnimatedImg"
import { assets } from "../utils/exports/directories/assets"
import { AnimatedBox } from "../components/common/AnimatedBox"
export const AboutUs = () => {
    return (
        <div>
            <AnimatedSection >
                <div className="container first-slide">
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
                        <h1 className="heading">Our Journey</h1>
                        <p className="description-text">Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.</p>

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
                </div>

            </AnimatedSection>
        </div>
    )
}