import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { OptionsWrapper } from "../components/UI/Option/OptionsWrapper";
import { TitleAndText } from "../components/UI/TitleAndText";
import { assets } from "../utils/exports/directories/assets";
import { Option } from "../components/UI/Option";
import { OurValues } from "../components/UI/OurValues";
import { informedDecisions, propertyManagement, propertyValue } from "../data";
import { Button } from "../components/UI/Button";
import { useOnScreen } from "../hooks/useOnScreen";
import { SERVICES_PAGE } from "../consts/text/en/ServicesText";
import { CustomLink } from "../components/UI/Link";


export const Services = () => {
    const { ref: introRef, isVisible: isIntroVisible } = useOnScreen("0px");
    const { ref: optionsRef, isVisible: isOptionsVisible } = useOnScreen("0px");
    const { ref: propertyValueRef, isVisible: isPropertyValueVisible } = useOnScreen("0px");
    const { ref: propertyManagementRef, isVisible: isPropertyManagementVisible } = useOnScreen("0px");
    const { ref: informedDecisionsRef, isVisible: isInformedDecisionsVisible } = useOnScreen("0px");

    return (
        <>
            <AnimatedSection
                ref={introRef}
                className="container property-slide first-slide"
                initial={{ opacity: 0 }}
                animate={isIntroVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={SERVICES_PAGE.INTRO.HEADING}
                    description={SERVICES_PAGE.INTRO.DESCRIPTION}
                />
            </AnimatedSection>

            <AnimatedSection
                ref={optionsRef}
                initial={{ opacity: 0 }}
                animate={isOptionsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <CustomLink to={'/properties'}>
                    <OptionsWrapper>
                        <Option text={SERVICES_PAGE.OPTIONS.FIND_HOME} middleImage={assets["shop"]} />


                        <Option text={SERVICES_PAGE.OPTIONS.UNLOCK_PROPERTY} middleImage={assets["camera"]} />
                        <Option
                            text={SERVICES_PAGE.OPTIONS.PROPERTY_MANAGEMENT}
                            middleImage={assets["Management"]}
                        />
                        <Option
                            text={SERVICES_PAGE.OPTIONS.SMART_INVESTMENTS}
                            middleImage={assets["Smart-Investments"]}
                        />
                    </OptionsWrapper>
                </CustomLink>
            </AnimatedSection>

            <AnimatedSection
                ref={propertyValueRef}
                className="container property-value-block"
                initial={{ opacity: 0 }}
                animate={isPropertyValueVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={SERVICES_PAGE.PROPERTY_VALUE.HEADING}
                    description={SERVICES_PAGE.PROPERTY_VALUE.DESCRIPTION}
                />
                <div className="property-value">
                    <OurValues items={propertyValue} />
                    <div className="property-value__unlock-property">
                        <div className="property-value__text-gap">
                            <img
                                className="property-value__image"
                                src={assets["property-value-back"]}
                                alt="Property Value Background"
                            />
                            <div className="property-value__flex">
                                <h2 className="card-text">{SERVICES_PAGE.PROPERTY_VALUE.CTA_HEADING}</h2>
                                <CustomLink to={'/properties'}><Button>{SERVICES_PAGE.PROPERTY_VALUE.CTA_BUTTON}</Button></CustomLink>
                            </div>
                            <p className="description-text">
                                {SERVICES_PAGE.PROPERTY_VALUE.CTA_DESCRIPTION}
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection
                ref={propertyManagementRef}
                className="container property-value-block"
                initial={{ opacity: 0 }}
                animate={isPropertyManagementVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={SERVICES_PAGE.PROPERTY_MANAGEMENT.HEADING}
                    description={SERVICES_PAGE.PROPERTY_MANAGEMENT.DESCRIPTION}
                />
                <div className="property-value">
                    <OurValues items={propertyManagement} />
                    <div className="property-value__unlock-property">
                        <div className="property-value__text-gap">
                            <img
                                className="property-value__image"
                                src={assets["property-value-back"]}
                                alt="Property Value Background"
                            />
                            <div className="property-value__flex">
                                <h2 className="card-text">{SERVICES_PAGE.PROPERTY_MANAGEMENT.CTA_HEADING}</h2>
                                <CustomLink to={'/properties'}><Button>{SERVICES_PAGE.PROPERTY_MANAGEMENT.CTA_BUTTON}</Button></CustomLink>
                            </div>
                            <p className="description-text">
                                {SERVICES_PAGE.PROPERTY_MANAGEMENT.CTA_DESCRIPTION}
                            </p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection
                ref={informedDecisionsRef}
                className="container"
                initial={{ opacity: 0 }}
                animate={isInformedDecisionsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="informed-decisions">
                    <div className="informed-decisions__text">
                        <TitleAndText
                            heading={SERVICES_PAGE.INVESTMENTS.HEADING}
                            description={SERVICES_PAGE.INVESTMENTS.DESCRIPTION}
                        />
                        <div className="property-value__unlock-property small-unlock-property">
                            <div className="property-value__text-gap">
                                <img
                                    className="property-value__image"
                                    src={assets["property-value-back"]}
                                    alt="Property Value Background"
                                />
                                <div className="property-value__flex">
                                    <h2 className="card-heading-text">{SERVICES_PAGE.INVESTMENTS.CTA_HEADING}</h2>
                                </div>
                                <p className="description-text">
                                    {SERVICES_PAGE.INVESTMENTS.CTA_DESCRIPTION}
                                </p>
                                <CustomLink to={'/properties'}><Button>{SERVICES_PAGE.INVESTMENTS.CTA_BUTTON}</Button></CustomLink>
                            </div>
                        </div>
                    </div>
                    <div className="informed-decisions__cards">
                        <OurValues items={informedDecisions} />
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};