import { FC } from "react"
import { AnimatedBox } from "../../common/Animated/AnimatedBox"

export const Card: FC<{ heading: string; description: string; variant: "basic" | "purple" }> = ({ heading, description, variant }) => {

    const containerClass = variant === "basic"
    ? "values achivements-card"
    : "values achivements-card purple-corner";
    return (
            <AnimatedBox
                className={containerClass}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                <h1 className="card-text">{heading}</h1>
                <p className="ad-text-medium gray-white-color">{description}</p>
            </AnimatedBox>
    )
}