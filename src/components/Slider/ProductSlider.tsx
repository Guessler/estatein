import { FC, ReactNode } from "react"
import { Button } from "../Button"

interface IProduct {
    currentPage?: ReactNode,
    lastPage?: ReactNode,
    onClickNext?: React.MouseEventHandler; 
    onClickPrev?: React.MouseEventHandler;
    children?: ReactNode
}

export const ProductSlider:FC<IProduct> = ({currentPage, lastPage, onClickNext, onClickPrev, children}) => {
    return (
        <div className="product-slider">
            <span className="switched-text">{currentPage} of {lastPage}</span>
            <div className="product-slider__switcher">
                <Button variant="circle-button" className="rotated-arrow" onClick={onClickPrev}>{children}</Button>
                <Button variant="circle-button" onClick={onClickNext}>{children}</Button>
            </div>
        </div>
    )
}