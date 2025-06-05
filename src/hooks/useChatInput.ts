import { useState } from "react";

export const useChatInput = (initialMessage: string) => {
    const [value, setValue] = useState(initialMessage);
    const [messages, setMessages] = useState<{ text: string; isMine: boolean }[]>([]);

    const handleSendMessage = () => {
        if (value.trim()) {
            setMessages((prev) => [...prev, { text: value, isMine: true }]);
            setValue("");
        }
    };

    const addExternalMessage = (message: string) => {
        setMessages((prev) => [...prev, { text: message, isMine: false }]);
    };

    return {
        value,
        setValue,
        messages,
        handleSendMessage,
        addExternalMessage,
    };
};