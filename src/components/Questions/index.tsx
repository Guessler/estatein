import { FC } from "react";
import { Button } from "../UI/Button";
import {QuestionsProps} from "../../types/interfaces"

export const Questions: FC<QuestionsProps> = ({ text, onClick }) => {

    return (
        <div className="slider-component-wrapper">
            {text ? (
                <>
                    <h2 className="card-heading-text">{text.heading.length > 30 ? text.heading.slice(0, 30) + "..." : text.heading}</h2>
                    <p className="ad-text-medium">{text.description.length >= 20? text.description.slice(0, 50) + "..." : text.description}</p>
                </>
            ) : (
                <p className="ad-text-medium">No questions available.</p>
            )}
            {text && <Button onClick={onClick}>Read More</Button>}
        </div>
    );
};