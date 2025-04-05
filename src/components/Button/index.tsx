import { FC, ReactNode } from "react"

interface IChildren {
    children: ReactNode
}

export const Button:FC<IChildren> = ({children}) => {
    return(
        <button className="btn cursor-p header-items-text">
            {children}
        </button>
    )
}