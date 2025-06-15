import { FC } from "react";
import { assets } from "../../../utils/exports/directories/assets";

interface MarkProps {
    rating: number;
}

export const Mark: FC<MarkProps> = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(
                <div key={i} className="star-border">
                    <img src={assets["Star"]} alt={assets["Star"]} />
                </div>
            );
        }
        return stars;
    };

    return <div className="star-container">{renderStars()}</div>;
};
