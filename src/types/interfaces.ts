import { TargetAndTransition, Variants } from "framer-motion";
import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IButtonProps extends IChildren {
    variant?: "primary" | "secondary" | "circle-button";
    onClick?: React.MouseEventHandler;
    className?: string;
}

export interface FeedbackText {
    heading: string;
    description: string;
    userName: string;
    userLocation: string;
}

export interface FeedbackData {
    text?: FeedbackText;
}

export interface IOption {
    text: ReactNode;
    middleImage: string;
}

export interface QuestionsText {
    heading: string;
    description: string;
    question?: string;
    answer?: string;
}

export interface QuestionsProps {
    text?: QuestionsText;
}

export interface ProductDetail {
    productCharacteristicIcon: string;
    productCharacteristic: string;
}

export interface Product {
    productIcon: string;
    productName: string;
    productDescription: string;
    productPrice: string;
    productDetails: ProductDetail[];
}

export interface ProductDTO {
    icon: string;
    name: string;
    description: string;
    price: string;
    details: ProductDetail[];
}

export interface SliderProps {
    products: Product[];
    currentIndex: number;
    direction: number;
    handleNext: () => void;
    handlePrev: () => void;
    isMobile: boolean;
    itemsToShow?: number;
    children?: ReactNode;
}

export interface AnimatedBoxProps {
    children: React.ReactNode;
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: { duration: number; delay?: number };
    className?: string|undefined; 
    variants?: Variants

}

export interface IProductChildren {
    productIcon?: string | undefined;
    productName?: ReactNode;
    productDescription?: ReactNode;
    productPrice?: ReactNode;
    children?: ReactNode;
}

export interface IProduct extends IChildren {
    currentPage?: ReactNode;
    lastPage?: ReactNode;
    onClickNext?: React.MouseEventHandler;
    onClickPrev?: React.MouseEventHandler;
}

export type ProductSummary = Pick<Product, "productIcon" | "productName" | "productPrice">;

export type ProductWithoutDescription = Omit<Product, "productDescription">;
