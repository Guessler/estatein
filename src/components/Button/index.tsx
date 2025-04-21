import { FC, ReactNode } from "react";

interface IButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    onClick?: React.MouseEventHandler;
}

export const Button: FC<IButtonProps> = ({ children, variant = "primary", onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`btn btn--${variant} cursor-p header-items-text`}
        >
            {children}
        </button>
    );
};