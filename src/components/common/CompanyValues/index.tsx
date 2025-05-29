import { FC } from "react"
import { assets } from "../../../utils/exports/directories/assets"

interface ICompanyValues {
    text: CompanyValuesProps[]
}

interface CompanyValuesProps {
    image: string,
    heading: string,
    description: string
}

export const CompanyValues: FC<ICompanyValues> = ({ text }) => {
    return (
        <>
            {text.map((value, index) => (
                <div key={index}>
                    <img src={assets[value.image]} alt={value.image} />
                    <h3>{value.heading}</h3>
                    <p>{value.description}</p>
                </div>
            ))}
        </>
    )
}