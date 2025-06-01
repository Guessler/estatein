import { useState, useCallback } from "react"

export const useChatInput = (initialMessage: string = "") => {
    const [value, setValue] = useState<string>("")
    const [messages, setMessages] = useState<{ text: string; isMine: boolean }[]>([])
    const [isHelloSent, setIsHelloSent] = useState<boolean>(false)

    // Отправка сообщения из инпута
    const handleSendMessage = useCallback(() => {
        const trimmed = value.trim()

        if (trimmed === "") {
            if (!isHelloSent && initialMessage) {
                setMessages([{ text: initialMessage, isMine: true }])
                setIsHelloSent(true)
            }
            return
        }

        setMessages(prev => [...prev, { text: trimmed, isMine: true }])
        setValue("")
    }, [value, isHelloSent, initialMessage])

    // Обработка Enter
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSendMessage()
        }
    }

    return {
        value,
        setValue,
        messages,
        isHelloSent,
        handleSendMessage,
        handleKeyDown
    }
}