import { FC } from "react"
import { BaseEntity } from "../../types/interfaces"

export const TitleAndText:FC<BaseEntity> = ({ heading, description }) => {
    return (
        <div className="heading-gap">
            <h2 className="second-heading">{heading}</h2>
            <p className="description-text">
                {description}
            </p>
        </div>
    )
}