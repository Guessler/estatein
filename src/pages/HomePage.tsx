import { FC, ReactNode } from "react"
import { assets } from "../utils/exports/directories/assets";

interface IChildren {
    children: ReactNode;
}
export const HomePage:FC<IChildren> = ({children}) => {
    return(
        <div>
            {children}
            <main>
                <img src={assets['Image-apartments']} alt={assets['Image-apartments']} />
            </main>
        </div>
    )
}