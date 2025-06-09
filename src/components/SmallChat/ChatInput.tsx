import { FC } from "react";
import { assets } from "../../utils/exports/directories/assets";

interface ChatInputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSendMessage: () => void; // No parameters expected
    placeholder?: string;
}

export const ChatInput: FC<ChatInputProps> = ({
    value,
    onChange,
    onSendMessage,
    placeholder = "Say Hello 👋"
}) => {
    const handleSubmit = () => {
        if (value.trim()) {
            onSendMessage();
        }
    };

    return (
        <div className="person-card__relative small-chat__input-container">
            <input
                value={value}
                onChange={onChange}
                onKeyDown={(e) => { 
                    if (e.key === "Enter") {
                        handleSubmit();
                    }
                }}
                className="description-text questions-person-input questions-person-input__chat"
                type="text"
                placeholder={placeholder}
            />
            <button 
                onClick={handleSubmit} 
                className="person-card__button personal-card__send"
                disabled={!value.trim()}
            >
                <img src={assets['Send']} alt="Send" />
            </button>
        </div>
    );
};