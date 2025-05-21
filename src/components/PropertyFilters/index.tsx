import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"

interface PropertyFiltersProps {
    image: string,
    imageName: string,
}


export const PropertyFilters:FC<PropertyFiltersProps> = ({image, imageName}) => {
    return (
            <div className="villa-input">
                <div className="villa-input__location">
                    <img src={assets[image]} alt={assets['location']} />
                    <div className="villa-input__stick"></div>
                    <p className="ad-text-medium">{imageName}</p>
                </div>
                <div>
                    <button className="drop-down">
                        <img src={assets['arrow-bottom']} alt={assets['arrow-bottom']} />
                    </button>
                </div>
            </div>
    )
}