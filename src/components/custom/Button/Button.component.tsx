import { Fragment, FunctionComponent } from "react";
import {ButtonProps} from "./type";
import {Text} from "../Typography";
import {BiLoaderAlt} from "react-icons/bi";
import Script from "next/script";

export const setColor = (color?: string) => {
    switch (color) {
        case "grey":
            return "border border-gray-400 bg-gray-400 text-white hover:bg-neutral-400 hover:border-neutral-400";
        case "warning":
            return "border border-warning bg-warning text-white hover:bg-warning-dark hover:border-warning-dark";
        default:
            return "border border-black bg-black text-white hover:bg-black-dark hover:border-black-dark";
    }
};

const CustomButton: FunctionComponent<ButtonProps<JSX.Element>> = (props) => {
    return (
        <button
            type={props.type}
            className={`
            relative
            overflow-hidden
            flex-center
            px-3 py-1
            rounded-sm
            transition duration-300
            ${props.color ? setColor(props.color) : setColor()}
            ${props.icon ? "gap-2" : ""}
            ${props.fluid ? "w-full" : props.width ? props.width : "w-max"}
            ${props.disabled ? "cursor-not-allowed" : ""}
        `}
            onClick={props.onClick}>
            {
                <Fragment>
                    {props.icon && props.iconPosition !== "right" && props.icon}
                    <Text className="flex-1" size="sm">{props.title}</Text>
                    {props.icon && props.iconPosition === "right" && props.icon}
                    {props.loading && (
                        <div className={`absolute top-0 left-0 w-full h-full flex-center ${props.color ? setColor(props.color) : setColor()}`}>
                            <BiLoaderAlt className="text-lg animate-spin" />
                        </div>
                    )}
                </Fragment>
            }
        </button>
    )
}

export default CustomButton;