import { FC } from "react"

interface ISupportingCompaniesProps {
    image?: string
}

export const SupportingCompanies:FC<ISupportingCompaniesProps> = ({ image }) => {
    return(
        <div>
            <img src={image} alt={image} />
        </div>
    )
}