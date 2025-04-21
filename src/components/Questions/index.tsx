import { FC } from "react";
import { Button } from "../Button";

interface QuestionsText {
    heading: string;
    description: string;
    question?: string;
    answer?: string;
}

interface QuestionsProps {
    text?: QuestionsText;
}

export const Questions: FC<QuestionsProps> = ({ text }) => {
    return (
        <div className="slider-component-wrapper">
            {text ? (
                <>
                    <h2 className="card-heading-text">{text.heading}</h2>
                    <p className="ad-text-medium">{text.description}</p>
                </>
            ) : (
                <p className="ad-text-medium">No questions available.</p>
            )}
            {text && <Button>Read More</Button>}
        </div>
    );
};