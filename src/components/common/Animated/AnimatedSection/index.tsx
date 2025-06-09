import React, {  useState, useEffect, forwardRef, Ref } from "react";
import { motion, TargetAndTransition } from "framer-motion";
import { useOnScreen } from "../../../../hooks/useOnScreen";

interface AnimatedSectionProps {
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    whileInView?: TargetAndTransition;
    transition?: object;
    className?: string;
    children: React.ReactNode;
    viewportMargin?: string;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(({
    initial,
    animate,
    whileInView,
    transition,
    className,
    children,
    viewportMargin = "0px",
}, ref: Ref<HTMLElement>) => {
    const isVisible = useOnScreen(viewportMargin);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);

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
        >
            {children}
        </motion.section>
    );
});

export default React.memo(AnimatedSection);
