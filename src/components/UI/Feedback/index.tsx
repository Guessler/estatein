import { FC } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { FeedbackData } from "../../../types/interfaces";
import { Mark } from "./Mark";

export const Feedback: FC<FeedbackData> = ({ text }) => {
    if (!text) {
        return (
            <div className="slider-component-wrapper">
                <p>No feedback data available</p>
            </div>
        );
    }

    const getUserImage = () => {
        try {
            if (text.userIcon && Object.prototype.hasOwnProperty.call(assets, text.userIcon)) {
                return assets[text.userIcon as keyof typeof assets];
            }
            return assets["ProfileDefault"];
        } catch {
            return assets["ProfileDefault"];
        }
    };

    return (
        <div className="slider-component-wrapper">
            <div className="slider-component-wrapper__stars">
                <Mark rating={text.stars} />
            </div>
            <div className="text-spacing">
                <h2 className="card-heading-text">{text.heading}</h2>
                <p className="ad-text-medium">{text.description}</p>
            </div>

            <div className="feedback-user">
                <img
                    src={getUserImage()}
                    alt={`${text.userName}'s profile`}
                    className="user-avatar"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = assets.ProfileDefault;
                    }}
                />
                <div>
                    <p className="switched-text">{text.userName}</p>
                    <span className="ad-text-medium gray-white-color">
                        {text.userLocation}
                    </span>
                </div>
            </div>
        </div>
    );
};
