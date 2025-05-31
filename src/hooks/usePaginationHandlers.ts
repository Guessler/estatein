import { useCallback } from "react";

type usePaginationHandlersProps = {
    directionSetter: (direction: number) => void,
    onNext: () => void,
    onPrev: () => void
}

export const usePaginationHandlers = ({ directionSetter, onNext, onPrev }: usePaginationHandlersProps) => {
    const handleNext = useCallback(() => {
        directionSetter(1);
        onNext();
    }, [directionSetter, onNext])
    const handlePrev = useCallback(() => {
        directionSetter(-1);
        onPrev();
    }, [directionSetter, onPrev])
    return {handleNext, handlePrev}
}