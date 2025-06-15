import { useState, useEffect } from "react";

export const useChatInput = (initialMessage?: string) => {
    const [value, setValue] = useState("");
    const [messages, setMessages] = useState<Array<{
        text: string;
        isMine: boolean;
    }>>([]);
    const [isSending, setIsSending] = useState(false);

    useEffect(() => {
        if (initialMessage && initialMessage.trim() && messages.length === 0) {
            setMessages([{ text: initialMessage, isMine: true }]);
        }
    }, [initialMessage]);

    const handleSendMessage = () => {
        if (value.trim() && !isSending) {
            setIsSending(true);
            
            setMessages(prev => [...prev, { text: value, isMine: true }]);
            setValue("");
            
        }
    };

    return {
        value,
        setValue,
        messages,
        handleSendMessage,
    };
};