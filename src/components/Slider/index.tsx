import { AnimatedBox } from "../common/AnimatedBox";
import { FC } from "react";
import { SliderProps} from "../../types/interfaces"

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
