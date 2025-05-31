import { FC, useRef, useState } from "react"
import { assets } from "../../utils/exports/directories/assets"
import { Messages } from "./Messages"
interface SmallChatProps {
    employee: {
        icon: string
        name: string
        post: string
    }
    initialMessage?: string
    onClose: () => void
}

export const SmallChat: FC<SmallChatProps> = ({ employee, onClose }) => {
    const [messageText, setMessageText] = useState('')
    const [messages, setMessages] = useState<string[]>([])
    const [isHelloSent, setIsHelloSent] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const handlePushMessage = () => {
        const trimmedMessage = messageText.trim()

        if (trimmedMessage === "") {
            if (!isHelloSent) {
                setMessages([...messages, "Hello 👋"])
                setIsHelloSent(true)
            }
            return
        }
        setMessages([...messages, trimmedMessage])
        setMessageText('')
    }

    return (
        <>
        <div className="small-chat">
        <div onClick={onClose} className="close-chat"></div>        
            <div className="small-chat__interlocutor">
                <img className="small-chat__interlocutor-image" src={assets[employee.icon]} alt={assets[employee.icon]} />
                <div className="small-chat__interlocutor-data">
                    <h3 className="card-heading-text">{employee.name}</h3>
                    <p className="description-text">{employee.post}</p>
                </div>
            </div>
            <div className="small-chat__workspace">
                {messages.map((message, index) => (
                    <Messages key={index} message={message} variant={true} />
                ))}
                <div ref={messagesEndRef} />
            </div>
            <div className="person-card__relative">
                <input
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handlePushMessage()
                    }}
                    className="description-text questions-person-input questions-person-input__chat"
                    type="text"
                    placeholder={isHelloSent === false ? "Say Hello 👋" : "Enter message..."}
                />
                <button onClick={handlePushMessage} className="person-card__button personal-card__send">
                    <img src={assets['Send']} alt="Send" />
                </button>
            </div>
        </div>
        </>

    )
}