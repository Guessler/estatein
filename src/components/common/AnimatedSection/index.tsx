import { motion, TargetAndTransition } from "framer-motion";


interface AnimatedSectionProps {
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    transition?: object;
    className?: string;
    children: React.ReactNode;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    initial,
    animate,
    transition,
    className,
    children,
}) => {
    return (
        <motion.section
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        >
            {children}
        </motion.section>
    );
};

