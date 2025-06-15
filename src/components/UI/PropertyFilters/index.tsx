import { FC, useState } from "react";
import { assets } from "../../../utils/exports/directories/assets";

interface PropertyFiltersProps {
    image: string;
    imageName: string;
    listValue: string[];
}

export const PropertyFilters: FC<PropertyFiltersProps> = ({ image, imageName, listValue }) => {
    const [ selectedValue, setSelecterValue] = useState('')
    const [isDropDownOpen, setIsDropDownOpen ] = useState(false)

    const handleCloseDropDown = (location: string) => {
        setSelecterValue(location)
        setIsDropDownOpen(false)
    }

    return (
        <div className="villa-input">
            <div className="villa-input__location">
                <img src={assets[image]} alt={imageName} />
                <div className="villa-input__stick"></div>
                <p className="ad-text-medium">{selectedValue || imageName}</p>
            </div>
            <div>
                <button onClick={()=> setIsDropDownOpen(!isDropDownOpen)} className="drop-down">
                    <img src={assets['arrow-bottom']} alt="arrow" />
                </button>
            </div>
            {isDropDownOpen && (
                <div className="villa-input__drop-down-list">
                    {listValue.map((location, index) => (
                        <div onClick={() => handleCloseDropDown(location)} key={index} className="villa-input__drop-down-oprions cursor-pointer">
                            <p className="header-items-text">{location}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
