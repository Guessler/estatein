import { FC, useEffect, useRef } from "react"
import { assets } from "../../utils/exports/directories/assets"
import { Messages } from "./Messages"
import { ChatInput } from "./ChatInput"
import { useChatInput } from "../../hooks/useChatInput"

interface SmallChatProps {
    employee: {
        icon: string
        name: string
        post: string
    }
    initialMessage?: string
    onClose: () => void
}

export const SmallChat: FC<SmallChatProps> = ({ 
    employee, 
    initialMessage = "Hello 👋",
    onClose 
}) => {
    const { 
        value, 
        setValue, 
        messages, 
        isHelloSent, 
        handleSendMessage, 
        // handleKeyDown 
    } = useChatInput(initialMessage)

    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Автопрокрутка
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className="small-chat">
            <div onClick={onClose} className="close-chat"></div>        

            {/* Заголовок */}
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
                <button className="small-chat__close-button" onClick={onClose}>
                    &times;
                </button>
            </div>

            {/* Сообщения */}
            <div className="small-chat__workspace">
                {messages.map((message, index) => (
                    <Messages key={index} message={message.text} variant={message.isMine} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Инпут и кнопка Send */}
            <ChatInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onSendMessage={handleSendMessage}
                placeholder={isHelloSent ? "Type a message..." : "Say Hello 👋"}
            />
        </div>
    )
}