import { FC } from "react";
import { assets } from "../../utils/exports/directories/assets";
import { Mark } from "./Mark";

interface FeedbackText {
    heading: string;
    description: string;
    userName: string;
    userLocation: string;
}

interface FeedbackData {
    text?: FeedbackText;
}

export const Feedback: FC<FeedbackData> = ({ text }) => {
    return (
        <div className="feedback">
            <Mark />
            {text && (
                <>
                    <div className="text-spacing">
                        <h2 className="card-heading-text">{text.heading}</h2>
                        <p className="ad-text-medium">{text.description}</p>
                    </div>
                    <div className="feedback-user">
                        <img
                            src={assets["Profile"]}
                            alt="User profile" // Используем осмысленный текст для alt
                        />
                        <div>
                            <p className="switched-text">{text.userName}</p>
                            <span className="ad-text-medium gray-white-color">
                                {text.userLocation}
                            </span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};