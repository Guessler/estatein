import { FC, useRef, useState, useEffect } from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { useOnScreen } from "../../../../hooks/useOnScreen";
import React from "react";

interface AnimatedSectionProps {
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    whileInView?: TargetAndTransition;
    transition?: object;
    className?: string;
    children: React.ReactNode;
    viewport?: {
        once?: boolean;
        margin?: string;
        amount?: number;
    };
}

export const AnimatedSection: FC<AnimatedSectionProps> = React.memo(({
    initial,
    animate,
    whileInView,
    transition,
    className,
    children,
    viewport = { once: true, margin: "0px" },
}) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useOnScreen(ref, viewport.margin);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

    // console.log('Элемент перерисовался')

    useEffect(() => {
        if (isVisible && !hasBeenVisible) {
            setHasBeenVisible(true);
        }
    }, [isVisible, hasBeenVisible]);

    return (
        <motion.section
            ref={ref}
            initial={initial}
            animate={hasBeenVisible ? animate || whileInView : initial}
            transition={transition}
            className={className}
            viewport={viewport}
        >
            {children}
        </motion.section>
    );
})