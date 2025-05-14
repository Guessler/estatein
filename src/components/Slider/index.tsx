import { AnimatedBox } from "../common/AnimatedBox";
import { FC } from "react";
import { SliderProps } from "../../types/interfaces";

export const Slider: FC<SliderProps<{ id: string; name: string }>> = ({
    items,
    currentIndex,
    direction,
    isMobile,
    itemsToShow = 3,
    children
}) => {
    const visibleItems = isMobile ? 1 : itemsToShow;

    const animationKey = isMobile 
        ? `mobile-${currentIndex}`
        : `desktop-${currentIndex}-${Math.min(currentIndex + visibleItems - 1, items.length - 1)}`;

    return (
        <div className="slider-container">
            <AnimatedBox
                className="products"
                key={animationKey}
                initial={{
                    x: direction > 0 ? (isMobile ? 100 : 50) : (isMobile ? -100 : -50),
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
        </div>
    );
};