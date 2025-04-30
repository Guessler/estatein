import { TargetAndTransition, Variants } from "framer-motion";
import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IButtonProps extends IChildren {
    variant?: "primary" | "secondary" | "circle-button";
    onClick?: React.MouseEventHandler;
    className?: string;
    disabled?: boolean;
}

export interface IFeedbackFromDB {
    feedback_id: string;
    star_count: number;
    heading: string;
    description: string;
    user_name: string;
    user_location: string;
    created_at?: string;
    icon: string;
}

export interface FeedbackText {
    heading: string;
    description: string;
    userName: string;
    userLocation: string;
    userIcon: string;
    stars: number;
}

export interface FeedbackData {
    text: FeedbackText;
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
    image: string;
    heading: string;
    description: string;
    price: string;
    productDetails: ProductDetail[];
}

export interface IQuestionFromDB {
    question_id: number;
    heading: string;
    description: string;
};

export interface ProductDTO {
    icon: string;
    name: string;
    description: string;
    price: string;
    details: ProductDetail[];
}

export interface SliderProps<T> {
    items: T[];
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

export type ProductSummary = Pick<Product, "image" | "heading" | "price">;

export type ProductWithoutDescription = Omit<Product, "productDescription">;
