import AnimatedSection from "../components/common/Animated/AnimatedSection"
import { Button } from "../components/UI/Button"
import { assets } from "../utils/exports/directories/assets"

export const PropertyPage = () => {
    return (
        <>
            <AnimatedSection className="container property-product">
                <div className="property-product__slider">
                    <h1 className="card-text">Seaside Serenity Villa</h1>
                    <div><span className="ad-text-medium">Price</span> <b className="card-heading-text">$1,250,000</b></div>
                </div>
                <div className="property-propduct__slider-twister">
                    <div className="property-propduct__slider-top">
                        <div>
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                            <img src={assets['Image-1']} alt={assets['Image-1']} />
                        </div>
                    </div>
                    <div className="property-propduct__slider-photos">
                        <img src={assets['Image-1']} alt={assets['Image-1']} />
                        <img src={assets['Image-1']} alt={assets['Image-1']} />
                    </div>
                    <div className="property-propduct__slider-switcher">
                        <Button
                            variant="circle-button"
                        >
                            <img className="rotated-arrow" src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <div className="property-product__slider-page"></div>
                        <Button
                            variant="circle-button"
                        >
                            <img src={assets["Vector (Stroke)"]} alt="Slider arrow" />
                        </Button>
                    </div>
                </div>
            </AnimatedSection>
            <AnimatedSection className="container">
                <div>
                    <p>Description</p>
                    <span>Discover your own piece of paradise with the Seaside Serenity Villa. T With an open floor plan, breathtaking ocean views from every room, and direct access to a pristine sandy beach, this property is the epitome of coastal living.</span>
                </div>
                <div>
                    <h2>Key Features and Amenities</h2>
                    <div></div>
                </div>
            </AnimatedSection>
        </>
    )
}