import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"
import { ChatInput } from "../SmallChat/ChatInput"
import { useChatInput } from "../../hooks/useChatInput"

interface OurTeamCardProps {
    image: string
    name: string
    profession: string
    employee: {
        icon: string
        name: string
        post: string
    }
    onSendMessage: (employee: { icon: string; name: string; post: string }, message: string) => void
    onClick: () => void
}

export const OurTeamCard: FC<OurTeamCardProps> = ({
    image,
    name,
    profession,
    employee,
    onSendMessage,
    onClick
}) => {
    const { value, setValue} = useChatInput("Hello 👋")

    const handleSendClick = () => {
        const trimmed = value.trim()
        onSendMessage(employee, trimmed || "Hello 👋")
    }

    return (
        <div className="person-card">
            <div className="person-card__relative">
                <img src={assets[image]} alt={name} />
                <button onClick={onClick} className="person-card__button personal-card__social">
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
                    onChange={(e) => setValue(e.target.value)}
                    onSendMessage={handleSendClick}
                    placeholder="Say Hello 👋"
                />
            </div>
        </div>
    )
}