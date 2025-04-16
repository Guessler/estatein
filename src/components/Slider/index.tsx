import { AnimatedBox } from "../common/AnimatedBox";
import { FC } from "react";

interface Product {
    productIcon: string;
    productName: string;
    productDescription: string;
    productPrice: string;
    productDetails: {
        productCharacteristicIcon: string;
        productCharacteristic: string;
    }[];
}

interface SliderProps {
    products: Product[];
    currentIndex: number;
    direction: number;
    handleNext: () => void;
    handlePrev: () => void;
    isMobile: boolean;
    itemsToShow?: number;
    children?: React.ReactNode;
}

export const Slider: FC<SliderProps> = ({
    products,
    currentIndex,
    direction,
    isMobile,
    itemsToShow = 2,
    children
}) => {
    const visibleItems = isMobile ? 1 : itemsToShow;
    const endIndex = Math.min(currentIndex + visibleItems - 1, products.length);

    return (
        <AnimatedBox
            className="products"
            key={`${currentIndex}-${endIndex}`}
            initial={{
                x: direction > 0 ? 50 : -50,
                opacity: 0
            }}
            animate={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 0.6,
            }}
        >
            {children}
        </AnimatedBox>
    );
};
