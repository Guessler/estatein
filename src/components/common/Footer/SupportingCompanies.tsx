import { FC } from "react"

interface ISupportingCompaniesProps {
    image: string,
    link: string
}

export const SupportingCompanies: FC<ISupportingCompaniesProps> = ({ image, link }) => {
    return (
        <div className="social-network">
            <a href={link} target="_blank">
                <img src={image} alt={image} />
            </a>
        </div>
    )
}