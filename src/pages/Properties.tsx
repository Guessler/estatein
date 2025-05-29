import { Button } from "../components/UI/Button"
import { AnimatedSection } from "../components/common/Animated/AnimatedSection"
import { assets } from "../utils/exports/directories/assets"
import { PropertyFilters } from "../components/PropertyFilters"
import { propertyFiltersData } from "../data"
import { AllHousing } from "../components/AllHousing"
import { TitleAndText } from "../components/TitleAndText"

import { useIsMobile } from "../hooks/useIsMobile";
import { RegisterInput } from "../components/RegisterInput"

import {registerInformation} from "../data"

export const Properties = () => {

    const isMobile = useIsMobile();

    return (
        <div>
            <AnimatedSection className="container property-slide">
                <TitleAndText heading="Find Your Dream Property" description="Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey" />
                <div className="search-flex">
                    <div className="search-villa__border">
                        <div className="search-villa search-villa">
                            <input className="card-heading-text search-property" type="text" placeholder="Search For A Property" />
                            <Button className="search-property__button" variant="secondary">
                                <img src={assets["Loop"]} alt={assets["Loop"]} />
                                {!isMobile && "Find Property"}
                            </Button>
                        </div>
                    </div>
                    <div className="villa-description-flex">
                        {propertyFiltersData.map((item, index) => (
                            <PropertyFilters key={index} image={item.image} imageName={item.imageName} />
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <AllHousing />
            <AnimatedSection className="container registration-spacing">
                <TitleAndText heading="Let's Make it Happen" description="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together." />

                <div className="register-box">
                    {
                        registerInformation.map((item, index)=>(
                            <RegisterInput key={index} heading={item.heading} description={item.description} isArrow={item.isArrow} isLarge={item.isLarge} isBasic={item.isBasic}/>
                        ))
                    }
                    <p className="options-text">Message</p>
                    <textarea className="header-items-text registered-box-text-area" placeholder="Enter your Message here.."></textarea>

                    <div className="regiter__send-message">
                        <div className="flex">
                        <input className="register-checkbox" type="checkbox" />
                        <p className="header-items-text">I agree with Terms of Use and Privacy Policy</p>
                        </div>
                        <Button variant="secondary">Send Your Message</Button>
                    </div>
                </div>


            </AnimatedSection>

        </div>
    )
}