// AnimatedDiv.tsx
import { FC } from "react";
import { motion, TargetAndTransition } from "framer-motion";

interface AnimatedBoxProps {
    children: React.ReactNode;
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: { duration: number; delay?: number };
    className?: string|undefined; 
}

export const AnimatedBox: FC<AnimatedBoxProps> = ({ children, initial, animate, transition, className }) => {
    return (
        <motion.div className={className} initial={initial} animate={animate} transition={transition}>
            {children}
        </motion.div>
    );
};