import { FC } from "react";
import { motion, TargetAndTransition, Variants } from "framer-motion";

interface AnimatedBoxProps {
    children: React.ReactNode;
    initial: TargetAndTransition;
    animate: TargetAndTransition;
    transition: { duration: number; delay?: number };
    className?: string|undefined; 
    variants?: Variants

}

export const AnimatedBox: FC<AnimatedBoxProps> = ({ children, initial, animate, transition, className, variants }) => {
    return (
        <motion.div className={className} initial={initial} variants={variants} animate={animate} transition={transition}>
            {children}
        </motion.div>
    );
};