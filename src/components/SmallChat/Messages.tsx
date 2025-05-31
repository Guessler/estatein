import { FC } from "react"

interface MessagesProps {
    variant: boolean,    
    message: string
}

export const Messages:FC<MessagesProps> = ({variant, message}) => {

    return (
        <div className={variant ? "your-message" : "interlocutor-message" } >
            <div className={variant? "small-chat__message ": "small-chat__message interlocutor"}>
                <p className="ad-text-medium">{message}</p>
            </div>
        </div>
    )
}
