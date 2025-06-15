import { FC } from "react";
import { AnimatedBox } from "../../common/Animated/AnimatedBox";

interface OurValueItem {
    heading: string;
    description: string;
    image: string;
    className?: string
}

interface OurValuesProps {
    items: OurValueItem[];
}

export const OurValues: FC<OurValuesProps> = ({ items }) => {
    return (
        <>
            {items.map((item, index) => (
                <AnimatedBox
                    key={index}
                    className={`values ${item.className || ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.8 + index * 0.1 }}>
                    <div className="row-center">
                        <img className="values-image-mobile" src={item.image} alt={item.heading} />
                        <h2 className="card-heading-text">{item.heading}</h2>
                    </div>
                    <p className="description-text">{item.description}</p>
                </AnimatedBox>
            ))}
        </>
    );
};