import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { OptionsWrapper } from "../components/Option/OptionsWrapper";
import { TitleAndText } from "../components/TitleAndText";
import { Option } from "../components/Option";
import { assets } from "../utils/exports/directories/assets";
import { RegisterInput } from "../components/RegisterInput";
import { Button } from "../components/UI/Button";
import { connectUs } from "../data";
import { ProductCardDetails } from "../components/ProductCard/ProductCardDetails";
import { useOnScreen } from "../hooks/useOnScreen";
import { CONTACTS_PAGE } from "../consts/text/en/ContactsText";


const images = [
    assets["computers"],
    assets["personal"],
    assets["second-personal"],
    assets["third-personal"],
    assets["fourth-personal"],
];

export const Contacts = () => {
    const { ref: introRef, isVisible: isIntroVisible } = useOnScreen("0px");
    const { ref: optionsRef, isVisible: isOptionsVisible } = useOnScreen("0px");
    const { ref: connectRef, isVisible: isConnectVisible } = useOnScreen("0px");
    const { ref: locationsRef, isVisible: isLocationsVisible } = useOnScreen("0px");
    const { ref: worldRef, isVisible: isWorldVisible } = useOnScreen("0px");

    return (
        <>
            {/* Intro Section */}
            <AnimatedSection
                ref={introRef}
                className="container property-slide"
                initial={{ opacity: 0 }}
                animate={isIntroVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={CONTACTS_PAGE.INTRO.HEADING}
                    description={CONTACTS_PAGE.INTRO.DESCRIPTION}
                />
            </AnimatedSection>

            {/* Options Section */}
            <AnimatedSection
                ref={optionsRef}
                initial={{ opacity: 0 }}
                animate={isOptionsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <OptionsWrapper>
                    <Option text={CONTACTS_PAGE.OPTIONS.EMAIL} middleImage={assets["shop"]} />
                    <Option text={CONTACTS_PAGE.OPTIONS.PHONE} middleImage={assets["camera"]} />
                    <Option text={CONTACTS_PAGE.OPTIONS.HEADQUARTERS} middleImage={assets["Management"]} />
                    <Option text={CONTACTS_PAGE.OPTIONS.INVESTMENTS} middleImage={assets["Smart-Investments"]} />
                </OptionsWrapper>
            </AnimatedSection>

            {/* Connect Section */}
            <AnimatedSection
                ref={connectRef}
                className="container property-slide"
                initial={{ opacity: 0 }}
                animate={isConnectVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={CONTACTS_PAGE.CONNECT.HEADING}
                    description={CONTACTS_PAGE.CONNECT.DESCRIPTION}
                />

                <div className="register-box">
                    {connectUs.map((item, index) => (
                        <RegisterInput
                            className="contacts-input"
                            key={index}
                            heading={item.heading}
                            description={item.description}
                            isArrow={item.isArrow}
                            isLarge={item.isLarge}
                            isBasic={item.isBasic}
                        />
                    ))}
                    <p className="options-text">Message</p>
                    <textarea
                        className="header-items-text registered-box-text-area"
                        placeholder={CONTACTS_PAGE.CONNECT.MESSAGE_PLACEHOLDER}
                    ></textarea>

                    <div className="register__send-message">
                        <div className="flex">
                            <input className="register-checkbox" type="checkbox" />
                            <p className="header-items-text">{CONTACTS_PAGE.CONNECT.AGREEMENT_TEXT}</p>
                        </div>
                        <Button variant="secondary">{CONTACTS_PAGE.CONNECT.BUTTON_SEND_MESSAGE}</Button>
                    </div>
                </div>
            </AnimatedSection>

            {/* Locations Section */}
            <AnimatedSection
                ref={locationsRef}
                className="container"
                initial={{ opacity: 0 }}
                animate={isLocationsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <TitleAndText
                    heading={CONTACTS_PAGE.LOCATIONS.HEADING}
                    description={CONTACTS_PAGE.LOCATIONS.DESCRIPTION}
                />
                <div className="office-locations__show">
                    <button className="header-items-text office-locations-btn office-locations-btn__active">
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_ALL}
                    </button>
                    <button className="header-items-text office-locations-btn">
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_REGIONAL}
                    </button>
                    <button className="header-items-text office-locations-btn">
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_INTERNATIONAL}
                    </button>
                </div>
                <div className="office-locations__cards">
                    <div className="office-locations__card">
                        <div className="office-locations__card-text">
                            <p className="header-items-text">{CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_HEADING}</p>
                            <h2 className="card-text">{CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_ADDRESS}</h2>
                            <p className="ad-text-medium">
                                {CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_DESCRIPTION}
                            </p>
                        </div>
                        <ProductCardDetails
                            productCharacteristicIcon={assets["Email"]}
                            productCharacteristic={CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_HEADING}
                        />
                        <Button variant="secondary">{CONTACTS_PAGE.LOCATIONS.BUTTON_GET_DIRECTION}</Button>
                    </div>
                    <div className="office-locations__card">
                        <div className="office-locations__card-text">
                            <p className="header-items-text">{CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_HEADING}</p>
                            <h2 className="card-text">{CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_ADDRESS}</h2>
                            <p className="ad-text-medium">
                                {CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_DESCRIPTION}
                            </p>
                        </div>
                        <ProductCardDetails
                            productCharacteristicIcon={assets["Email"]}
                            productCharacteristic={CONTACTS_PAGE.LOCATIONS.LOCATION_CARD_HEADING}
                        />
                        <Button variant="secondary">{CONTACTS_PAGE.LOCATIONS.BUTTON_GET_DIRECTION}</Button>
                    </div>
                </div>
            </AnimatedSection>

            {/* World Section */}
            <AnimatedSection
                ref={worldRef}
                className="container"
                initial={{ opacity: 0 }}
                animate={isWorldVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className="estatein-world">
                    {images.map((item, index) => (
                        <img key={index} src={item} alt={`Estatein Image ${index + 1}`} />
                    ))}
                    <div className="estatein-world__text-block">
                        <div className="estatein-world__text">
                            <h2 className="second-heading">{CONTACTS_PAGE.WORLD.HEADING}</h2>
                            <p className="description-text">{CONTACTS_PAGE.WORLD.DESCRIPTION}</p>
                        </div>
                        <img src={assets["friendly-personal"]} alt="Friendly Personal" />
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};