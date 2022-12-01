import React, { FC } from "react";
import ReactLoading from 'react-loading';

interface LoaderProps {
    isOverall?: boolean;
    position?: string;
    color?: string;
    type?: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
}

const CustomLoading: FC<LoaderProps> = ({ isOverall, position, color, type }) => {
    return (
        <>
            {isOverall ? (
                <div className={`${position ? position : 'fixed'} w-full h-full opacity-50`}>
                    <div className="flex items-center justify-center h-full">
                        <ReactLoading type={type ? type : "bars"} color={color ? color : "#000"} height={100} width={100}/>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <ReactLoading type={type ? type : "bars"} color={color ? color : "#000"} height={100} width={100}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default CustomLoading;