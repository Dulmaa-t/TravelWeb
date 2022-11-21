import { BaseSyntheticEvent, FunctionComponent, ReactNode, useEffect, useState } from "react";

interface ICustomModal {
    show: boolean;
    hide: () => void;
    children: ReactNode
}

const CustomModal: FunctionComponent<ICustomModal> = ({ show, hide, children }) => {
    const [visible, setVidible] = useState<boolean>(false);

    useEffect(() => {
        if (show) {
            setVidible(true)
        } else {
            setTimeout(() => {
                setVidible(false)
            }, 300)
        }
    }, [show]);

    const closeHandler = (e: BaseSyntheticEvent) => {
        e.preventDefault()
        hide()
    }

    return visible ? <div onClick={closeHandler} style={{transition: 'all 0.3s ease'}} className={`w-full h-screen fixed top-0 left-0 bg-black ${show ? 'bg-opacity-70' : 'bg-opacity-0'} z-[9999999] flex items-center justify-center py-8`}>
        <div className="absolute text-white right-4 top-1">
            x
        </div>
        {children}
    </div> : null
}

export default CustomModal