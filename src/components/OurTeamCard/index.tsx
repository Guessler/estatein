// OurTeamCard.tsx
import { FC } from "react";
import { assets } from "../../utils/exports/directories/assets";
import { ChatInput } from "../SmallChat/ChatInput";

interface OurTeamCardProps {
    image: string;
    name: string;
    profession: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: () => void;
}

export const OurTeamCard: FC<OurTeamCardProps> = ({
    image,
    name,
    profession,
    value,
    onChange,
    onSendMessage,
}) => {
    return (
        <div className="person-card">
            <div className="person-card__relative">
                <img src={assets[image]} alt={name} />
                <button className="person-card__button personal-card__social">
                    <img src={assets["PersonTwitterIcon"]} alt="Twitter" />
                </button>
            </div>

            <div className="person-card__name-sayHello">
                <div>
                    <h2 className="card-heading-text">{name}</h2>
                    <p className="description-text">{profession}</p>
                </div>
                <ChatInput
                    value={value}
                    onChange={onChange}
                    onSendMessage={onSendMessage}
                    placeholder="Say Hello 👋"
                />
            </div>
        </div>
    );
};