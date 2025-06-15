import { FC, useEffect, useRef } from "react";
import { assets } from "../../../utils/exports/directories/assets";
import { Messages } from "./Messages";
import { ChatInput } from "./ChatInput";
import { useChatInput } from "../../../hooks/useChatInput";

interface SmallChatProps {
    employee: {
        icon: string;
        name: string;
        post: string;
    };
    initialMessage?: string;
    onClose: () => void;
}

export const SmallChat: FC<SmallChatProps> = ({ 
    employee, 
    initialMessage,
    onClose 
}) => {
    const { 
        value, 
        setValue, 
        messages, 
        handleSendMessage 
    } = useChatInput(initialMessage);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="small-chat">
            <div onClick={onClose} className="close-chat"></div>        

            <div className="small-chat__interlocutor">
                <img 
                    className="small-chat__interlocutor-image" 
                    src={assets[employee.icon]} 
                    alt={employee.name} 
                />
                <div className="small-chat__interlocutor-data">
                    <h3 className="card-heading-text">{employee.name}</h3>
                    <p className="description-text">{employee.post}</p>
                </div>
                <button 
                    className="small-chat__close-button" 
                    onClick={onClose}
                    aria-label="Close chat"
                >
                    &times;
                </button>
            </div>

            <div className="small-chat__workspace">
                {messages.map((message, index) => (
                    <Messages 
                        key={index} 
                        message={message.text} 
                        variant={message.isMine ? "user" : "bot"} 
                    />
                ))}
                <div ref={messagesEndRef} />
            </div>

            <ChatInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSendMessage={handleSendMessage}
                placeholder="Type your message here..."
            />
        </div>
    );
};