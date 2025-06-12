import { Button } from "../components/UI/Button";
import AnimatedSection from "../components/common/Animated/AnimatedSection";
import { assets } from "../utils/exports/directories/assets";
import { PropertyFilters } from "../components/PropertyFilters";
import { propertyFiltersData } from "../data";
import { AllHousing } from "../components/AllHousing";
import { TitleAndText } from "../components/TitleAndText";
import { useIsMobile } from "../hooks/useIsMobile";
import { RegisterInput } from "../components/RegisterInput";
import { registerInformation } from "../data";
import { AnimatedBox } from "../components/common/Animated/AnimatedBox";
import { useOnScreen } from "../hooks/useOnScreen";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/interfaces";
import { fetchProducts } from "../services/products";

export const Properties = () => {
    const isMobile = useIsMobile();

    const { ref: heroSectionRef, isVisible: isHeroVisible } = useOnScreen("0px");
    const { ref: filtersSectionRef, isVisible: isFiltersVisible } = useOnScreen("0px");
    const { ref: allHousingSectionRef, isVisible: isAllHousingVisible } = useOnScreen("0px");
    const { ref: registrationSectionRef, isVisible: isRegistrationVisible } = useOnScreen("0px");

    const [searchProperty, setSearchProperty] = useState('');
    const [showProperties, setShowProperties] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

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
                    heading="Find Your Dream Property" 
                    description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey begins here." 
                />
                <div className="search-flex">
                    <div className="search-villa__border">
                        <div className="search-villa">
                            <input 
                                value={searchProperty}
                                onChange={(e) => setSearchProperty(e.target.value)}
                                className="card-heading-text search-property" 
                                type="text" 
                                placeholder="Search For A Property" 
                            />
                            <Button onClick={handleShowProperties} className="search-property__button" variant="secondary">
                                <img src={assets["Loop"]} alt="Search Icon" />
                                {!isMobile && "Find Property"}
                            </Button>
                        </div>
                    </div>
                    <AnimatedSection ref={filtersSectionRef} className="villa-description-flex">
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
                <AllHousing searchText={showProperties ? searchProperty : ""} products={showProperties ? filteredProducts : fetchedProductsData} />
            </AnimatedSection>

            <AnimatedSection
                ref={registrationSectionRef}
                className="container registration-spacing"
                initial={{ opacity: 0 }}
                animate={isRegistrationVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <TitleAndText 
                    heading="Let's Make it Happen" 
                    description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together." 
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
                            />
                        </AnimatedBox>
                    ))}
                    <p className="options-text">Message</p>
                    <textarea 
                        className="header-items-text registered-box-text-area" 
                        placeholder="Enter your Message here.."
                    ></textarea>

                    <div className="register__send-message">
                        <div className="flex">
                            <input className="register-checkbox" type="checkbox" />
                            <p className="header-items-text">I agree with Terms of Use and Privacy Policy</p>
                        </div>
                        <Button variant="secondary">Send Your Message</Button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};
