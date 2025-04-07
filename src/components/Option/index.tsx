import { FC, ReactNode } from "react";
import { assets } from "../../utils/exports/directories/assets"

interface IOption {
    text: ReactNode,
    middleImage: string
}

export const Option:FC<IOption> = ({text, middleImage}) => {
    return (
        <div className="wishes-block__option">
            <img className="Icon-arrow-top" src={assets['Icon-arrow-top']} alt={assets['Icon-arrow-top']} />
            <img className="middle-icon" src={middleImage} alt={middleImage} />
            <p className="options-text text-width">{text}</p>
        </div>
    )
}