import { FC } from "react";
import { assets } from "../../utils/exports/directories/assets"
import { OprionProps } from "../../types/interfaces"

export const Option:FC<OprionProps> = ({text, middleImage}) => {
    return (
        <div className="wishes-block__option">
            <img className="Icon-arrow-top" src={assets['Icon-arrow-top']} alt={assets['Icon-arrow-top']} />
            <img className="middle-icon" src={middleImage} alt={middleImage} />
            <p className="options-text text-width">{text}</p>
        </div>
    )
}