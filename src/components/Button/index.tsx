import { FC } from "react";
import { IButtonProps } from "../../types/interfaces"

export const Button: FC<IButtonProps> = ({ children, variant = "primary", onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn--${variant} cursor-p header-items-text ${className}`}
        >
            {children}
        </button>
    );
};