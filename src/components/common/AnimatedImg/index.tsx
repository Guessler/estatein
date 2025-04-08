import { motion, TargetAndTransition } from "framer-motion";

interface AnimatedImageProps {
    src: string;
    alt: string;
    initial?: TargetAndTransition;
    animate?: TargetAndTransition;
    transition?: object;
    className?: string;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
    src,
    alt,
    initial,
    animate,
    transition,
    className,
}) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            initial={initial}
            animate={animate}
            transition={transition}
            className={className}
        />
    );
};
