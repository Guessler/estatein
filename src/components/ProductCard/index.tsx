import { FC } from "react";
import { Button } from "../UI/Button";
import { ProductChildren } from "../../types/interfaces";
import { AnimatedBox } from "../../components/common/Animated/AnimatedBox";

const fadeIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
};

export const ProductCard: FC<ProductChildren> = ({ productIcon, productName, productDescription, productPrice, children }) => {
    return (
        <AnimatedBox 
            className="product-card" 
            initial={{ opacity: 0, scale: 0.9 } }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} 
            variants={fadeIn}
        >
            <img
                className="product-card__image"
                src={productIcon}
                alt={productIcon}
            />
            <h3 className="product-card__title card-heading-text">{productName}</h3>
            <span className="description-text">
                {productDescription}... Read More
            </span>
            <div className="product-card__details-flex">
                {children}
            </div>
            <div className="product-card__price">
                <div className="product-card__price-container">
                    <span className="description-text">Price</span>
                    <b className="card-heading-text">${productPrice}</b>
                </div>
                <Button variant="secondary">
                    View Property Details
                </Button>
            </div>
        </AnimatedBox>
    );
};
