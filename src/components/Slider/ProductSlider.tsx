import { FC, ReactNode } from "react";
import { Button } from "../UI/Button";

// Обновленный интерфейс для пропсов ProductSlider
interface ProductSliderProps {
    currentPage: number;
    lastPage: number;
    onClickNext: () => void;
    onClickPrev: () => void;
    children: ReactNode;
}

export const ProductSlider: FC<ProductSliderProps> = ({
    currentPage,
    lastPage,
    onClickNext,
    onClickPrev,
    children
}) => {
    return (
        <div className="product-slider">
            <span className="switched-text">
                {Math.min(currentPage, lastPage)} of {lastPage}
            </span>
            <div className="product-slider__switcher">
                <Button 
                    variant="circle-button" 
                    className="rotated-arrow" 
                    onClick={onClickPrev}
                    disabled={currentPage <= 1}
                >
                    {children}
                </Button>
                <Button 
                    variant="circle-button" 
                    onClick={onClickNext}
                    disabled={currentPage >= lastPage}
                >
                    {children}
                </Button>
            </div>
        </div>
    );
};