import { FC } from "react";
import { BaseEntity } from "../../../types/interfaces";
import { motion } from "framer-motion";

export const TitleAndText: FC<BaseEntity> = ({ heading, description }) => {
    return (
        <motion.div 
            className="heading-gap"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
        >
            <h2 className="second-heading">{heading}</h2>
            <p className="description-text">
                {description}
            </p>
        </motion.div>
    );
};
