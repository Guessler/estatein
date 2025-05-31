import { TargetAndTransition, Variants } from "framer-motion";
import { ReactNode } from "react";

export interface Children {
    children: ReactNode;
}

export interface ButtonProps extends Children {
    variant?: "primary" | "secondary" | "circle-button";
    onClick?: React.MouseEventHandler;
    className?: string;
    disabled?: boolean;
}


export interface BaseEntity {
    heading: string;
    description: string;
}

export interface FeedbackFromDB extends BaseEntity{
    feedback_id: string;
    star_count: number;
    user_name: string;
    user_location: string;
    created_at?: string;
    icon: string;
}

export interface FeedbackText extends BaseEntity{
    userName: string;
    userLocation: string;
    userIcon: string;
    stars: number;
}

export interface FeedbackData {
    text: FeedbackText;
}

export interface OprionProps {
    text: ReactNode;
    middleImage: string;
}

export interface QuestionsText extends BaseEntity{
    question?: string;
    answer?: string;
}

export interface QuestionsProps {
    text?: QuestionsText;
    onClick: () => void
}

export interface ProductDetail {
    productCharacteristicIcon: string;
    productCharacteristic: string;
}

export interface Product extends BaseEntity{
    id: string;
    name: string; 
    image: string;
    price: string;
    productDetails: ProductDetail[];
}

export interface IQuestionFromDB extends BaseEntity{
    question_id: number;
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

export interface ProductChildren {
    productIcon?: string | undefined;
    productName?: ReactNode;
    productDescription?: ReactNode;
    productPrice?: ReactNode;
    children?: ReactNode;
}

// export interface IProduct extends Children {
//     currentPage?: ReactNode;
//     lastPage?: ReactNode;
//     onClickNext?: React.MouseEventHandler;
//     onClickPrev?: React.MouseEventHandler;
// }


export interface QuestionText {
    heading: string;
    description: string;
}

export type ProductSummary = Pick<Product, "image" | "heading" | "price">;

export type ProductWithoutDescription = Omit<Product, "productDescription">;
