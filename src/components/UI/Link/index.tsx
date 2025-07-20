import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
    children: ReactNode;
    to: string;
    className?: string
}

export const CustomLink = ({ children, to, className }: CustomLinkProps) => {
    return (
        <Link className={className} to={to} onClick={() => window.scrollTo(0, 0)}>
            {children}
        </Link>
    );
};