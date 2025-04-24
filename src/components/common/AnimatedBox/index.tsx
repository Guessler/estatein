import { FC } from "react";
import { motion } from "framer-motion";
import {AnimatedBoxProps} from "../../../types/interfaces"



export const AnimatedBox: FC<AnimatedBoxProps> = ({ children, initial, animate, transition, className, variants }) => {
    return (
        <motion.div className={className} initial={initial} variants={variants} animate={animate} transition={transition}>
            {children}
        </motion.div>
    );
};