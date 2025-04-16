import { AnimatedBox } from "../common/AnimatedBox";
import { FC, ReactNode } from "react";

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
    children?: ReactNode
}

export const Slider: FC<SliderProps> = ({
    products,
    currentIndex,
    isMobile,
    itemsToShow = 2,
    children
}) => {
    const variants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({
            x: dir > 0 ? -1000 : 1000,
            opacity: 0
        })
    };

    const visibleItems = isMobile ? 1 : itemsToShow;
    const endIndex = Math.min(currentIndex + visibleItems - 1, products.length);

    return (
        <div className="slider-container">
                <AnimatedBox
                    className="products-grid"
                    key={`${currentIndex}-${endIndex}`}
                    variants={variants}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    {/* {products.slice(currentIndex - 1, endIndex).map((item, index) => ( */}
                        {children}
                    {/* ))} */}
                </AnimatedBox>
        </div>
    );
};
