import { FC, ReactNode } from "react";

interface IButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "circle-button";
    onClick?: React.MouseEventHandler;
    className?: string;
}

// Компонент Button
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