import { FC } from "react"
import { Button } from "../Button"
import { IProduct } from "../../types/interfaces"


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