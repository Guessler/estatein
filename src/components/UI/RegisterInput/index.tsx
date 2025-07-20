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
    dropdownOptions?: string[];
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
    dropdownOptions = []
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
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
                                style={{ color: '#ffffff' }}
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
                                style={{ color: '#ffffff' }}
                            />
                            <div className="register-input-active"></div>
                        </div>
                    </div>
                ) : (
                    <div className="register-input-container">
                        {isArrow ? (
                            <div 
                                className={`${isLarge ? `register-input header-items-text large-input ${largest ? "largest-input" : ""}` : `register-input header-items-text ${className || ''}`}`}
                                onClick={toggleDropdown}
                                style={{
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    color: value ? '#ffffff' : '#999999'
                                }}
                            >
                                <span style={{ color: value ? '#ffffff' : '#999999' }}>
                                    {value || description}
                                </span>
                                <img 
                                    className={`arrow-list ${isDropdownOpen ? 'arrow-list--open' : ''}`} 
                                    src={assets["arrow-list"]} 
                                    alt={assets["arrow-list"]} 
                                    onClick={toggleDropdown}
                                />
                            </div>
                        ) : (
                            <input 
                                onChange={(e) => onChange(e.target.value)} 
                                value={value}  
                                className={`${isLarge ? `register-input header-items-text large-input ${largest ? "largest-input" : ""}` : `register-input header-items-text ${className || ''}`}`} 
                                type="text" 
                                placeholder={description}
                                style={{ color: '#ffffff' }}
                            />
                        )}
                        {isArrow && dropdownOptions.length > 0 && isDropdownOpen && (
                            <div 
                                className="dropdown-list"
                                style={{
                                    backgroundColor: '#1a1a1a',
                                    border: '1px solid #333'
                                }}
                            >
                                {dropdownOptions.map((option, index) => (
                                    <p 
                                        key={index} 
                                        className="header-items-text cursor-p"
                                        onClick={() => handleOptionSelect(option)}
                                        style={{ 
                                            color: '#ffffff',
                                            padding: '8px 12px',
                                            margin: 0,
                                            borderBottom: '1px solid #333',
                                            backgroundColor: option === value ? '#333' : 'transparent'
                                        }}
                                    >
                                        {option}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};