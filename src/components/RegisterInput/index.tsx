import { FC } from "react"
import { assets } from "../../utils/exports/directories/assets"

interface RegisterInputProps {
    heading?: string,
    description: string,
    isArrow: boolean | undefined,
    isLarge: boolean | undefined,
    isBasic: boolean | undefined
}

export const RegisterInput: FC<RegisterInputProps> = ({ heading, description, isArrow, isLarge, isBasic }) => {
    return (
        <div className="register-text__gap">
            <p className="options-text">{heading}</p>
            <div className="register-input-place">
                {isBasic ?

                    <div className="phone-or-email-input">
                        <div className="register-input-place">
                        <img className="email-or-phone-position" src={assets['phone']} alt={assets['phone']} />
                        <input className="register-input header-items-text register-input-big-padding" type="text" placeholder={description} />
                        <div className="register-input-active"></div>
                        </div>
                        <div className="register-input-place">
                        <img className="email-or-phone-position" src={assets['secondEmail']} alt={assets['secondEmail']} />
                        <input className="register-input header-items-text register-input-big-padding" type="text" placeholder="Enter Your Email" />
                        <div className="register-input-active"></div>
                        </div>
                    </div>

                    :

                    <>
                        <input className={isLarge ? "register-input header-items-text large-input" : "register-input header-items-text"} type="text" placeholder={description} />
                        {isArrow &&
                            < img className="arrow-list" src={assets["arrow-list"]} alt={assets["arrow-list"]} />
                        }
                    </>
                }
            </div>
        </div>
    )
}