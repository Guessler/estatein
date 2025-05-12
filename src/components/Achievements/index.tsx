import { FC } from "react"
import { AnimatedBox } from "../common/AnimatedBox"

export const Achievements: FC<{ heading: string; description: string }> = ({ heading, description }) => {
    return (
        <div className="gray-border">
            <AnimatedBox
                className="values achivements-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
            >
                <h1 className="card-text">{heading}</h1>
                <p className="ad-text-medium gray-white-color">{description}</p>
            </AnimatedBox>
        </div>
    )
}