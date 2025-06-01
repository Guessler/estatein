import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"

interface ChatInputProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onSendMessage: () => void
    placeholder?: string
}

export const ChatInput: FC<ChatInputProps> = ({
    value,
    onChange,
    onSendMessage,
    placeholder = "Say Hello 👋"
}) => {
    return (
        <div className="person-card__relative small-chat__input-container">
            <input
                value={value}
                onChange={onChange}
                onKeyDown={(e) => { 
                    if (e.key === "Enter") {
                        onSendMessage()
                    }
                }}
                className="description-text questions-person-input questions-person-input__chat"
                type="text"
                placeholder={placeholder}
            />
            <button onClick={onSendMessage} className="person-card__button personal-card__send">
                <img src={assets['Send']} alt="Send" />
            </button>
        </div>
    )
}