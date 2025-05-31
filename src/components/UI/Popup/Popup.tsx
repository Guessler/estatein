import { FC } from "react"
import { Children } from "../../../types/interfaces"

interface PopupProps extends Children{
    onClose: () => void   
}

export const Popup:FC<PopupProps> = ({children, onClose, ...props}) => {
    return (
        <div onClick={onClose} {...props} className="popup-back">
            <div onClick={(e) => e.stopPropagation()} className="popup-wrapper">
                <div className="popup">
                    {children}
                </div>
            </div>
        </div>
    )
}