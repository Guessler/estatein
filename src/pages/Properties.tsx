import { Button } from "../components/UI/Button";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { assets } from "../utils/exports/directories/assets";
import { PropertyFilters } from "../components/UI/PropertyFilters";
import { propertyFiltersData } from "../data";
import { AllHousing } from "../components/UI/AllHousing";
import { TitleAndText } from "../components/UI/TitleAndText";
import { useIsMobile } from "../hooks/useIsMobile";
import { RegisterInput } from "../components/UI/RegisterInput";
import { registerInformation } from "../data";
import { AnimatedBox } from "../components/common/Animated/AnimatedBox";
import { useOnScreen } from "../hooks/useOnScreen";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/interfaces";
import { fetchProducts } from "../services/products";
import { PROPERTIES_PAGE } from "../consts/text/en/PropertiesText";

export const Properties = () => {
    const isMobile = useIsMobile();

    const { ref: heroSectionRef, isVisible: isHeroVisible } = useOnScreen("0px");
    const { ref: filtersSectionRef, isVisible: isFiltersVisible } = useOnScreen("0px");
    const { ref: allHousingSectionRef, isVisible: isAllHousingVisible } = useOnScreen("0px");
    const { ref: registrationSectionRef, isVisible: isRegistrationVisible } = useOnScreen("0px");

    const [searchProperty, setSearchProperty] = useState("");
    const [showProperties, setShowProperties] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [isChecked, setIsChecked] = useState<boolean>(false); // Checkbox state
    const [checkboxError, setCheckboxError] = useState<boolean>(false); // Checkbox error state
    const [inputValues, setInputValues] = useState<string[]>(Array(registerInformation.length).fill('')); // State for input values
    const [inputErrors, setInputErrors] = useState<boolean[]>(Array(registerInformation.length).fill(false)); // State for input errors

    const { data: fetchedProductsData = [] } = useQuery({
        queryKey: ["fetchProducts"],
        queryFn: fetchProducts,
    });

    const handleShowProperties = () => {
        const filtered = fetchedProductsData.filter((product: Product) =>
            product.heading?.toLowerCase().includes(searchProperty.toLowerCase())
        );
        setFilteredProducts(filtered);
        setShowProperties(true);
    };

    const handleSendMessage = () => {
        if (!isChecked) {
            setCheckboxError(true);
            return;
        }

        setCheckboxError(false);

        const errors = inputValues.map(value => value.trim() === '');
        setInputErrors(errors);

        if (errors.some(error => error)) {
            return;
        }

        alert('Message sent!');
    };

    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value;
        setInputValues(newValues);

        const newErrors = [...inputErrors];
        newErrors[index] = value.trim() === '';
        setInputErrors(newErrors);
    };

    return (
        <div>
            <AnimatedSection
                ref={heroSectionRef}
                className="container property-slide first-slide"
                initial={{ opacity: 0 }}
                animate={isHeroVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TitleAndText
                    heading={PROPERTIES_PAGE.HERO.HEADING}
                    description={PROPERTIES_PAGE.HERO.DESCRIPTION}
                />
                <div className="search-flex">
                    <div className="search-villa__border">
                        <div className="search-villa">
                            <input
                                value={searchProperty}
                                onChange={(e) => setSearchProperty(e.target.value)}
                                className="card-heading-text search-property"
                                type="text"
                                placeholder={PROPERTIES_PAGE.HERO.SEARCH_PLACEHOLDER}
                            />
                            <Button
                                onClick={handleShowProperties}
                                className="search-property__button"
                                variant="secondary"
                            >
                                <img src={assets["Loop"]} alt="Search Icon" />
                                {!isMobile && PROPERTIES_PAGE.HERO.BUTTON_FIND_PROPERTY}
                            </Button>
                        </div>
                    </div>

                    <AnimatedSection
                        ref={filtersSectionRef}
                        className="villa-description-flex"
                    >
                        <div className="villa-description-flex">
                            {propertyFiltersData.map((item, index) => (
                                <AnimatedBox
                                    key={item.id}
                                    className="filter-animation"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isFiltersVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <PropertyFilters
                                        listValue={item.dropDown}
                                        image={item.image}
                                        imageName={item.imageName}
                                    />
                                </AnimatedBox>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </AnimatedSection>

            <AnimatedSection
                ref={allHousingSectionRef}
                className="container all-housing-section"
                initial={{ opacity: 0 }}
                animate={isAllHousingVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <AllHousing
                    searchText={showProperties ? searchProperty : ""}
                    products={showProperties ? filteredProducts : fetchedProductsData}
                />
            </AnimatedSection>

            <AnimatedSection
                ref={registrationSectionRef}
                className="container registration-spacing"
                initial={{ opacity: 0 }}
                animate={isRegistrationVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TitleAndText
                    heading={PROPERTIES_PAGE.REGISTRATION.HEADING}
                    description={PROPERTIES_PAGE.REGISTRATION.DESCRIPTION}
                />

                <div className="register-box">
                    {registerInformation.map((item, index) => (
                        <AnimatedBox
                            key={index}
                            className="input-animation"
                            initial={{ opacity: 0, y: 20 }}
                            animate={isRegistrationVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <RegisterInput
                                heading={item.heading}
                                description={item.description}
                                isArrow={item.isArrow}
                                isLarge={item.isLarge}
                                isBasic={item.isBasic}
                                value={inputValues[index]}
                                onChange={(value) => handleInputChange(index, value)}
                                error={inputErrors[index]}
                            />
                        </AnimatedBox>
                    ))}
                    <p className="options-text">Message</p>
                    <textarea
                        className="header-items-text registered-box-text-area"
                        placeholder={PROPERTIES_PAGE.REGISTRATION.MESSAGE_PLACEHOLDER}
                    ></textarea>

                    <div className="register__send-message">
                        <div className="flex">
                            <input 
                                className={`register-checkbox ${checkboxError ? 'error' : ''}`} 
                                type="checkbox" 
                                checked={isChecked} 
                                onChange={() => setIsChecked(!isChecked)} 
                            />
                            <p className={`header-items-text ${checkboxError ? 'red' : ''}`}>
                                {PROPERTIES_PAGE.REGISTRATION.AGREEMENT_TEXT}
                            </p>
                        </div>
                        <Button variant="secondary" onClick={handleSendMessage}>
                            {PROPERTIES_PAGE.REGISTRATION.BUTTON_SEND_MESSAGE}
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};
