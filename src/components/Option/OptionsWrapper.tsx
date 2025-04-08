import { FC } from "react"
import { IChildren } from "../../types/interfaces"

export const OptionsWrapper:FC<IChildren> = ({children}) => {
    return (
        <section className="wishes-block">
            <div className="wishes-block__wrapper">
                {children}
            </div>
        </section>
    )
}
