import { FC, ReactNode } from "react";
import { Button } from "../Button";

interface IProductChildren {
    productIcon?: string | undefined,
    productName?: ReactNode,
    productDescription?: ReactNode,
    productPrice?: ReactNode,
    children?: ReactNode
}

export const ProductCard: FC<IProductChildren> = ({ productIcon, productName, productDescription, productPrice, children }) => {
    return (
        <div className="product-card">
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
                    <b className="card-heading-text">{productPrice}</b>
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