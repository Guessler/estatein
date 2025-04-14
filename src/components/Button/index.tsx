import { FC, ReactNode } from "react";

interface IButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    onClick?: React.MouseEventHandler; // Переименовано из click в onClick
}

export const Button: FC<IButtonProps> = ({ children, variant = "primary", onClick }) => {
    return (
        <button
            onClick={onClick} // Теперь onClick соответствует интерфейсу
            className={`btn btn--${variant} cursor-p header-items-text`}
        >
            {children}
        </button>
    );
};