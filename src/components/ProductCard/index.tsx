import { assets } from "../../utils/exports/directories/assets";
import { Button } from "../Button";

export const ProductCard = () => {
    return (
        <div className="product-card">
            <img
                className="product-card__image"
                src={assets['Image-1']}
                alt="Seaside Serenity Villa"
            />
            <h3 className="product-card__title card-heading-text">Seaside Serenity Villa</h3>
            <span className="description-text">
                A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More
            </span>
            <div className="product-card__details">
                <img
                    className="product-card__icon"
                    src={assets['bedroom']}
                    alt="Bedroom Icon"
                />
                <span className="ad-text-medium">4-Bedroom</span>
            </div>
            <div className="product-card__price">
            <div className="product-card__price-container">
                <span className="description-text">Price</span>
                <b className="card-heading-text">$550,000</b>
            </div>
            <Button
                variant="secondary"
            >
                View Property Details
            </Button>
            </div>
        </div>
    );
};