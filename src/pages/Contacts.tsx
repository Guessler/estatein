import { AnimatedSection } from "../components/common/Animated/AnimatedSection"
import { OptionsWrapper } from "../components/Option/OptionsWrapper"
import { TitleAndText } from "../components/TitleAndText"
import { Option } from "../components/Option"
import { assets } from "../utils/exports/directories/assets"
import { RegisterInput } from "../components/RegisterInput"
import { Button } from "../components/UI/Button"
import { connectUs } from "../data"
import { ProductCardDetails } from "../components/ProductCard/ProductCardDetails"

const images = [assets['computers'], assets['personal'], assets['second-personal'], assets['third-personal'], assets["fourth-personal"]]

export const Contacts = () => {
    return (
        <>
            <AnimatedSection className="container property-slide">
                <TitleAndText heading="Get in Touch with Estatein" description="Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation." />
            </AnimatedSection>

            <AnimatedSection
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <OptionsWrapper>
                    <Option text={"info@estatein.com"} middleImage={assets["shop"]} />
                    <Option text={"+1 (123) 456-7890"} middleImage={assets["camera"]} />
                    <Option
                        text={"Main Headquarters"}
                        middleImage={assets["Management"]}
                    />
                    <Option
                        text={"Smart Investments, Informed Decisions"}
                        middleImage={assets["Smart-Investments"]}
                    />
                </OptionsWrapper>
            </AnimatedSection>


            <AnimatedSection className="container property-slide">
                <TitleAndText heading="Let's Connect" description="We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need." />

                <div className="register-box">
                    {
                        connectUs.map((item, index) => (
                            <RegisterInput className="contacts-input" key={index} heading={item.heading} description={item.description} isArrow={item.isArrow} isLarge={item.isLarge} isBasic={item.isBasic} />
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

            <AnimatedSection className="container">
                <TitleAndText heading="Discover Our Office Locations" description="Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you" />
                <div className="office-locations__show">
                    <button className="header-items-text office-locations-btn office-locations-btn__active">All</button>
                    <button className="header-items-text office-locations-btn">Regional</button>
                    <button className="header-items-text office-locations-btn">International</button>
                </div>
                <div className="office-locations__cards">
                    <div className="office-locations__card">
                        <div className="office-locations__card-text">
                            <p className="header-items-text">Main Headquarters</p>
                            <h2 className="card-text">123 Estatein Plaza, City Center, Metropolis</h2>
                            <p className="ad-text-medium">Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                        </div>
                        <ProductCardDetails productCharacteristicIcon={assets['Email']} productCharacteristic="info@estatein.com" />
                        <Button variant="secondary">Get Direction</Button>
                    </div>
                    <div className="office-locations__card">
                        <div className="office-locations__card-text">
                            <p className="header-items-text">Main Headquarters</p>
                            <h2 className="card-text">123 Estatein Plaza, City Center, Metropolis</h2>
                            <p className="ad-text-medium">Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.</p>
                        </div>
                        <ProductCardDetails productCharacteristicIcon={assets['Email']} productCharacteristic="info@estatein.com" />
                        <Button variant="secondary">Get Direction</Button>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection className="container">
                <div className="estatein-world">
                    {
                        images.map((item, index) => (
                            <img  key={index} src={item} alt={item} />
                        ))
                    }
                    <div className="estatein-world__text-block">
                        <div className="estatein-world__text">
                            <h2 className="second-heading">Explore Estatein's World</h2>
                            <p className="description-text">Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
                        </div>
                        <img src={assets['friendly-personal']} alt={assets['friendly-personal']} />
                    </div>
                </div>
            </AnimatedSection>
        </>
    )
}