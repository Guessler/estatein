import { AnimatedSection } from "../components/common/Animated/AnimatedSection"
import { OptionsWrapper } from "../components/Option/OptionsWrapper"
import { TitleAndText } from "../components/TitleAndText"
import { assets } from "../utils/exports/directories/assets"
import { Option } from "../components/Option"
import { OurValues } from "../components/OurValues"

import { informedDecisions, propertyManagement, propertyValue } from "../data"
import { Button } from "../components/UI/Button"
export const Services = () => {
    return (
        <>
            <AnimatedSection className="container property-slide">
                <TitleAndText heading="Elevate Your Real Estate Experience" description="Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams." />
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

            <AnimatedSection className="container property-value-block">
                <TitleAndText heading="Unlock Property Value" description="Selling your property should be a rewarding experience, and at Estatein, we make sure it is. Our Property Selling Service is designed to maximize the value of your property, ensuring you get the best deal possible. Explore the categories below to see how we can help you at every step of your selling journey" />
                <div className="property-value">
                    <OurValues items={propertyValue} />
                    <div className="property-value__unlock-property">
                        <div className="property-value__text-gap">
                            <img className="property-value__image" src={assets['property-value-back']} alt={assets['property-value-back']} />

                            <div className="property-value__flex">
                                <h2 className="card-text">Unlock the Value of Your Property Today</h2>
                                <Button>Learn More</Button>
                            </div>
                            <p className="description-text">Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container property-value-block">
                <TitleAndText heading="Effortless Property Management" description="Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership, offering comprehensive solutions tailored to your needs. Explore the categories below to see how we can make property management effortless for you" />
                <div className="property-value">
                    <OurValues items={propertyManagement} />
                    <div className="property-value__unlock-property">
                        <div className="property-value__text-gap">
                            <img className="property-value__image" src={assets['property-value-back']} alt={assets['property-value-back']} />

                            <div className="property-value__flex">
                                <h2 className="card-text">Experience Effortless Property Management</h2>
                                <Button>Learn More</Button>
                            </div>
                            <p className="description-text">Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container">
                <div className="informed-decisions">
                    <div className="informed-decisions__text">
                        <TitleAndText heading="Smart Investments, Informed Decisions" description="Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions." />
                        <div className="property-value__unlock-property small-unlock-property">
                            <div className="property-value__text-gap">
                                <img className="property-value__image" src={assets['property-value-back']} alt={assets['property-value-back']} />

                                <div className="property-value__flex">
                                    <h2 className="card-heading-text">Unlock Your Investment Potential</h2>
                                </div>
                                <p className="description-text">Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.</p>
                                <Button>Learn More</Button>
                            </div>
                        </div>
                    </div>
                    <div className="informed-decisions__cards">
                    <OurValues items={informedDecisions} />
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
}