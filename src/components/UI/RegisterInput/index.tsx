import { FC, useState } from "react";
import { assets } from "../../../utils/exports/directories/assets";

interface RegisterInputProps {
    heading?: string;
    description: string;
    isArrow: boolean | undefined;
    isLarge?: boolean | undefined;
    isBasic?: boolean | undefined;
    className?: string;
    largest?: boolean;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
    dropdownOptions?: string[]; // Новый проп для опций выпадающего списка
}

export const RegisterInput: FC<RegisterInputProps> = ({ 
    heading, 
    description, 
    isArrow, 
    isLarge, 
    isBasic, 
    className, 
    largest, 
    value, 
    onChange, 
    error,
    dropdownOptions = [] // Значение по умолчанию - пустой массив
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleOptionSelect = (option: string) => {
        onChange(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className="register-text__gap">
            <p className={`options-text ${error ? 'input-error' : ''}`}>{heading}</p> 
            <div className="register-input-place">
                {isBasic ? (
                    <div className="phone-or-email-input">
                        <div className="register-input-place">
                            <img className="email-or-phone-position" src={assets['phone']} alt={assets['phone']} />
                            <input 
                                onChange={(e) => onChange(e.target.value)} 
                                value={value}  
                                className={`register-input header-items-text register-input-big-padding`} 
                                type="text" 
                                placeholder={description} 
                            />
                            <div className="register-input-active"></div>
                        </div>
                        <div className="register-input-place">
                            <img className="email-or-phone-position" src={assets['secondEmail']} alt={assets['secondEmail']} />
                            <input 
                                onChange={(e) => onChange(e.target.value)} 
                                value={value}  
                                className={`register-input header-items-text register-input-big-padding`} 
                                type="text" 
                                placeholder="Enter Your Email" 
                            />
                            <div className="register-input-active"></div>
                        </div>
                    </div>
                ) : (
                    <div className="register-input-container">
                        <input 
                            onChange={(e) => onChange(e.target.value)} 
                            value={value}  
                            className={`${isLarge ? `register-input header-items-text large-input ${largest ? "largest-input" : ""}` : `register-input header-items-text ${className || ''}`}`} 
                            type="text" 
                            placeholder={description} 
                        />
                        {isArrow && (
                            <div className="dropdown-arrow-container">
                                <img 
                                    className={`arrow-list ${isDropdownOpen ? 'arrow-list--open' : ''}`} 
                                    src={assets["arrow-list"]} 
                                    alt={assets["arrow-list"]} 
                                    onClick={toggleDropdown}
                                />
                                {isDropdownOpen && dropdownOptions.length > 0 && (
                                    <div className="dropdown-list">
                                        {dropdownOptions.map((option, index) => (
                                            <p 
                                                key={index} 
                                                className="header-items-text cursor-p"
                                                onClick={() => handleOptionSelect(option)}
                                            >
                                                {option}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};