import { FC } from "react"
import { Children } from "../../../types/interfaces"

export const OptionsWrapper:FC<Children> = ({children}) => {
    return (
        <section className="wishes-block">
            <div className="wishes-block__wrapper">
                {children}
            </div>
        </section>
    )
}
