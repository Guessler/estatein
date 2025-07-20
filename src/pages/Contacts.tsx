import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { OptionsWrapper } from "../components/UI/Option/OptionsWrapper";
import { TitleAndText } from "../components/UI/TitleAndText";
import { Option } from "../components/UI/Option";
import { assets } from "../utils/exports/directories/assets";
import { RegisterInput } from "../components/UI/RegisterInput";
import { Button } from "../components/UI/Button";
import { connectUs } from "../data";
import { ProductCardDetails } from "../components/UI/ProductCard/ProductCardDetails";
import { useOnScreen } from "../hooks/useOnScreen";
import { CONTACTS_PAGE } from "../consts/text/en/ContactsText";
import { useState } from "react";
import { CustomLink } from "../components/UI/Link";

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

    const [inputValues, setInputValues] = useState<string[]>(Array(connectUs.length).fill(''));
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<boolean[]>(Array(connectUs.length).fill(false));
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(false); // New state for checkbox error

    const [filter, setFilter] = useState<string>('all');

    const locationsData = [
        {
            heading: "Main Headquarters",
            address: "123 Main St, Cityville, Country",
            description: "Our main office located in the heart of the city, offering full services and support.",
            type: 'all'
        },
        {
            heading: "Support Center",
            address: "987 Support Rd, Help City, Country",
            description: "A dedicated support center to assist customers with queries and issues.",
            type: 'all'
        },
        {
            heading: "Regional Office - North",
            address: "456 North St, Townsville, Country",
            description: "Serving the northern regions with dedicated customer support and local expertise.",
            type: 'regional'
        },
        {
            heading: "International Office - Europe",
            address: "789 Euro St, Europolis, Country",
            description: "Our European office handles international operations and partnerships across the continent.",
            type: 'international'
        },
        {
            heading: "Regional Office - South",
            address: "321 South Ave, Southtown, Country",
            description: "Focused on providing services to the southern regions with a strong local presence.",
            type: 'regional'
        },
        {
            heading: "International Office - Asia",
            address: "654 Asia Blvd, Asiatown, Country",
            description: "This office oversees our operations in Asia, fostering relationships and collaborations.",
            type: 'international'
        },
    ];

    const filteredLocations = locationsData.filter(location =>
        filter === 'all' ? (location.type === 'all' && locationsData.indexOf(location) < 2) : location.type === filter
    );

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
    };

    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);

        const newErrors = [...errors];
        newErrors[index] = false;
        setErrors(newErrors);
    };

    const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
    };

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string) => {
        const phoneRegex = /^\+?[1-9]\d{0,2}[ -]?\(?\d{1,4}?\)?[ -]?\d{1,4}[ -]?\d{1,4}$/;
        return phoneRegex.test(phone);
    };

    const validateName = (name: string) => {
        const nameRegex = /^[^\d]*$/;
        return nameRegex.test(name);
    };

    const handleSendMessage = async () => {
        const emailIndex = connectUs.findIndex(item => item.heading === "Email");
        const phoneIndex = connectUs.findIndex(item => item.heading === "Phone");
        const nameIndex = connectUs.findIndex(item => item.heading === "Name");

        const emailInput = inputValues[emailIndex];
        const phoneInput = inputValues[phoneIndex];
        const nameInput = inputValues[nameIndex];

        let hasError = false;
        const newErrors = Array(connectUs.length).fill(false);

        if (!validateName(nameInput)) {
            newErrors[nameIndex] = true;
            hasError = true;
        }
        if (!validateEmail(emailInput)) {
            newErrors[emailIndex] = true;
            hasError = true;
        }
        if (!validatePhone(phoneInput)) {
            newErrors[phoneIndex] = true;
            hasError = true;
        }

        inputValues.forEach((value, index) => {
            if (value.trim() === '') {
                newErrors[index] = true;
                hasError = true;
            }
        });

        if (!isChecked) {
            setCheckboxError(true);
            hasError = true;
        } else {
            setCheckboxError(false);
        }

        if (hasError) {
            setErrors(newErrors);
            return;
        }

        const formData = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput,
            message: message,
            agreement: isChecked
        };

        try {
            const response = await fetch('https://your-backend.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Сообщение успешно отправлено');
                alert('Ваше сообщение отправлено!');
                setInputValues(Array(connectUs.length).fill(''));
                setMessage('');
                setIsChecked(false);
                setErrors(Array(connectUs.length).fill(false));
                setCheckboxError(false);
            } else {
                throw new Error('Ошибка при отправке формы');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Не удалось отправить форму. Попробуйте позже.');
        }
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (checkboxError) {
            setCheckboxError(false);
        }
    };

    return (
        <>
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

            <AnimatedSection
                ref={optionsRef}
                initial={{ opacity: 0 }}
                animate={isOptionsVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <CustomLink to={'/properties'}>
                    <OptionsWrapper>
                        <Option text={CONTACTS_PAGE.OPTIONS.EMAIL} middleImage={assets["shop"]} />
                        <Option text={CONTACTS_PAGE.OPTIONS.PHONE} middleImage={assets["camera"]} />
                        <Option text={CONTACTS_PAGE.OPTIONS.HEADQUARTERS} middleImage={assets["Management"]} />
                        <Option text={CONTACTS_PAGE.OPTIONS.INVESTMENTS} middleImage={assets["Smart-Investments"]} />
                    </OptionsWrapper>
                </CustomLink>
            </AnimatedSection>

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
                        <div key={index}>
                            <RegisterInput
                                className="contacts-input"
                                heading={item.heading}
                                description={item.description}
                                isArrow={item.isArrow}
                                isLarge={item.isLarge}
                                isBasic={item.isBasic}
                                value={inputValues[index]}
                                onChange={(value) => handleInputChange(index, value)}
                                error={errors[index]}
                                dropdownOptions={item.dropdownOptions || []}
                            />
                        </div>
                    ))}
                    <p className="options-text">Message</p>
                    <textarea
                        value={message}
                        onChange={handleMessageChange}
                        className="header-items-text registered-box-text-area"
                        placeholder={CONTACTS_PAGE.CONNECT.MESSAGE_PLACEHOLDER}
                    ></textarea>

                    <div className="register__send-message">
                        <div className="flex">
                            <input
                                className={`register-checkbox ${checkboxError ? 'error' : ''}`}
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <p className={!isChecked && checkboxError ? 'red header-items-text' : 'header-items-text'}>
                                {CONTACTS_PAGE.CONNECT.AGREEMENT_TEXT}
                            </p>
                        </div>
                        <Button variant="secondary" onClick={handleSendMessage}>
                            {CONTACTS_PAGE.CONNECT.BUTTON_SEND_MESSAGE}
                        </Button>
                    </div>
                </div>
            </AnimatedSection>

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
                    <button
                        className={`header-items-text office-locations-btn ${filter === 'all' ? 'office-locations-btn__active' : ''}`}
                        onClick={() => handleFilterChange('all')}
                    >
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_ALL}
                    </button>
                    <button
                        className={`header-items-text office-locations-btn ${filter === 'regional' ? 'office-locations-btn__active' : ''}`}
                        onClick={() => handleFilterChange('regional')}
                    >
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_REGIONAL}
                    </button>
                    <button
                        className={`header-items-text office-locations-btn ${filter === 'international' ? 'office-locations-btn__active' : ''}`}
                        onClick={() => handleFilterChange('international')}
                    >
                        {CONTACTS_PAGE.LOCATIONS.BUTTON_INTERNATIONAL}
                    </button>
                </div>
                <div className="office-locations__cards">
                    {filteredLocations.map((location, index) => (
                        <div className="office-locations__card" key={index}>
                            <div className="office-locations__card-text">
                                <p className="header-items-text">{location.heading}</p>
                                <h2 className="card-text">{location.address}</h2>
                                <p className="ad-text-medium">{location.description}</p>
                            </div>
                            <ProductCardDetails
                                productCharacteristicIcon={assets["Email"]}
                                productCharacteristic={location.heading}
                            />
                            <Button variant="secondary">{CONTACTS_PAGE.LOCATIONS.BUTTON_GET_DIRECTION}</Button>
                        </div>
                    ))}
                </div>
            </AnimatedSection>

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
