import { Button } from "../components/Button"
import { AnimatedSection } from "../components/common/AnimatedSection"
import { assets } from "../utils/exports/directories/assets"

export const Properties = () => {
    return (
        <div>
            <AnimatedSection className="container">
                <div className="heading-gap">
                    <h1 className="heading">Find Your Dream Property</h1>
                    <p className="description-text">Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey </p>
                </div>
                <div className="search-flex">
                    <div className="search-villa search-villa">
                        <input className="card-heading-text search-property" type="text" placeholder="Search For A Property" />
                        <Button className="search-property__button" variant="secondary">
                            <img src={assets["Loop"]} alt={assets["Loop"]} />
                            Find Property
                        </Button>
                    </div>
                    <div>
                        <div className="villa-description">
                            <div className="villa-input">
                                <div className="villa-input__location">
                                    <img src={assets['location']} alt={assets['location']} />
                                    <div className="villa-input__stick"></div>
                                    <p className="ad-text-medium">Location</p>
                                </div>
                                <div>
                                    <button className="drop-down">
                                        <img src={assets['arrow-bottom']} alt={assets['arrow-bottom']} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AnimatedSection>
        </div>
    )
}