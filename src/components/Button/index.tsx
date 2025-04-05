import { FC, ReactNode } from "react";

interface IButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
}

export const Button: FC<IButtonProps> = ({ children, variant = "primary" }) => {
    return (
        <button className={`btn btn--${variant} cursor-p header-items-text`}>
            {children}
        </button>
    );
};