import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"

export const OurTeamCard: FC<{ image: string, name: string, profession: string, onClick: () => void }> =
({ image, name, profession, onClick}) => {
    return (
        <div className="person-card">
            <div className="person-card__relative">
                <img src={assets[image]} alt={assets[image]} />
                <button onClick={onClick} className="person-card__button  personal-card__social">
                    <img src={assets['PersonTwitterIcon']} alt={assets['PersonTwitterIcon']} />
                </button>
            </div>
            <div className="person-card__name-sayHello">
                <div>
                    <h2 className="card-heading-text">{name}</h2>
                    <p className="description-text">{profession}</p>
                </div>
                <div className="person-card__relative">
                    <input className="description-text questions-person-input" type="text" placeholder="Say Hello 👋" />
                    <button className="person-card__button personal-card__send"><img src={assets['Send']} alt={assets['Send']} /></button>
                </div>
            </div>
        </div>
    )
}