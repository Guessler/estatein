import { FC } from "react";
import { ButtonProps } from "../../types/interfaces"

export const Button: FC<ButtonProps> = ({ children, variant = "primary", onClick, className = "", disabled }) => {
    return (
        <button
            disabled= {disabled}
            onClick={onClick}
            className={`btn btn--${variant} cursor-p header-items-text ${className}`}
        >
            {children}
        </button>
    );
};