import { FC, ReactNode } from "react"

interface IProductDetailsChilds {
    productCharacteristicIcon?: string | undefined,
    productCharacteristic?: ReactNode,

}

export const ProductCardDetails: FC<IProductDetailsChilds> = ({ productCharacteristicIcon, productCharacteristic }) => {
    return (
        <div className="product-card__details">
            <img
                className="product-card__icon"
                src={productCharacteristicIcon}
                alt={productCharacteristicIcon}
            />
            <span className="ad-text-medium">{productCharacteristic}</span>
        </div>
    )
}
