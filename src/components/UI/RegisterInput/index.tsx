import { FC } from "react";
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
    error?: boolean; // New prop for error state
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
    error // Destructure the error prop
}) => {
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
                    <>
                        <input 
                            onChange={(e) => onChange(e.target.value)} 
                            value={value}  
                            className={`${isLarge ? `register-input header-items-text large-input ${largest ? "largest-input" : ""}` : `register-input header-items-text ${className || ''}`}`} 
                            type="text" 
                            placeholder={description} 
                        />
                        {isArrow && <img className="arrow-list" src={assets["arrow-list"]} alt={assets["arrow-list"]} />}
                    </>
                )}
            </div>
        </div>
    );
};
