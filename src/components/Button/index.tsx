import { FC } from "react";
import { IButtonProps } from "../../types/interfaces"

export const Button: FC<IButtonProps> = ({ children, variant = "primary", onClick, className = "", disabled }) => {
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