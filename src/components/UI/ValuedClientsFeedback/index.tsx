import { FC } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { Button } from "../Button";

interface FeedbackItem {
    id: string;
    date: string;
    corporationName: string;
    domain: string;
    Category: string;
    comment: string;
    link: string
}

interface ValuedClientsFeedbackProps {
    feedback: FeedbackItem;
}

export const ValuedClientsFeedback: FC<ValuedClientsFeedbackProps> = ({ feedback }) => {
    return (
        <div className="valued-clients">
            <div className="valued-clients__corporation-web">
                <div>
                    <span className="header-items-text gray-white-color">{feedback.date}</span>
                    <h2 className="card-text">{feedback.corporationName}</h2>
                </div>
                <a href={feedback.link} target="_blank">
                    <Button>Visit Website</Button>
                </a>
            </div>
            <div className="valued-clients-info">
                <div className="valued-clients-info-gap">
                    <div className="valued-clients-info__domain">
                        <img src={assets["Domain"]} alt="Domain" />
                        <span className="header-items-text gray-white-color">Domain</span>
                    </div>
                    <p className="switched-text">{feedback.domain}</p>
                </div>
                <div className="">
                    <div className="valued-clients-info__category">
                        <img src={assets["Flash"]} alt="Category" />
                        <span className="header-items-text gray-white-color">Category</span>
                    </div>
                    <p className="switched-text">{feedback.Category}</p>
                </div>
            </div>
            <div className="valued-clients-feedback">
                <p className="header-items-text gray-white-color">What They Said 🤗</p>
                <p className="header-items-text">{feedback.comment}</p>
            </div>
        </div>
    );
};