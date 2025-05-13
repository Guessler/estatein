import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"

export const OurTeamCard: FC<{image: string, name: string, profession: string}> = ({image, name, profession}) => {
    return(
        <div>
            <div>
            <img src={assets[image]} alt="" />
            <div>
                <img src={""} alt="" />
            </div>
            </div>
            <div>
                <h2>{name}</h2>
                <p>{profession}</p>
                <input type="text" />
            </div>
        </div>
    )
}