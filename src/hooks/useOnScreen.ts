// hooks/useOnScreen.ts
import { useEffect, useState, RefObject } from "react";

export const useOnScreen = (
    ref: RefObject<HTMLElement | null>,
    rootMargin = "0px"
) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            { rootMargin }
        );

        observer.observe(currentRef);

        return () => {
            observer.unobserve(currentRef);
        };
    }, [ref, rootMargin]);

    return isIntersecting;
};