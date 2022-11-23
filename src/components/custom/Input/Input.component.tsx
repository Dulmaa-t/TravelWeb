import { FormEvent, FunctionComponent, KeyboardEventHandler, ReactNode, useState } from "react";
import { Flex } from "../../reusableElements/Wrap";

export interface CustomInputProps {
    type?: string;
    className?: string;
    onChange?: (event: FormEvent) => void;
    placeholder?: string;
    id: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    value?: string
    label?: string
    error?: boolean
    success?: boolean
    extraElem?: ReactNode|null
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    readonly?: boolean;
    pattern?: string;
    min?: string | number;
    max?: string | number;
    customBorder?: string;
}

const CustomInput: FunctionComponent<CustomInputProps> = (props:CustomInputProps):JSX.Element => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const focus = () => {
        setIsFocused(true);
    };

    const blur = () => {
        setIsFocused(false);
    };
    return (
        <Flex direction="flex-col" className={`gap-1 text-black w-full`}>
            {props.label && <label className="pl-2" htmlFor={props.id}>
                {props.label}
                {
                    props.extraElem ? props.extraElem : null
                }
            </label>}
            <Flex item="items-center" className={`w-full bg-white-light border overflow-hidden rounded-lg ${props.customBorder ? props.customBorder : ""} ${props.success ? "border-success" : ""} ${props.error ? "border-danger-light" : ""} ${isFocused ? "border-primary" : ""}`}>
                {props.icon && props.iconPosition !== "right" && (
                    <label className={`bg-gray-100 self-stretch flex-center px-3 ${isFocused ? "text-primary" : "text-gray-400"}`} htmlFor={props.id}>
                        {props.icon}
                    </label>
                )}
                <input
                    pattern={props.pattern}
                    type={props.type ? props.type : "text"}
                    className={`
                        py-4 px-4 focus:outline-none flex-1 border-none
                        ${props.className ? props.className : ""}
                    `}
                    onFocus={focus}
                    onBlur={blur}
                    onChange={props.onChange}
                    placeholder={props.placeholder ? props.placeholder : ""}
                    id={props.id}
                    value={props.value}
                    onKeyDown={props.onKeyDown}
                    readOnly={props.readonly}
                    min={props.min}
                    max={props.max}
                />
                {props.icon && props.iconPosition === "right" && (
                    <label className={`bg-gray-100 self-stretch flex-center px-3 ${isFocused ? "text-primary" : "text-gray-400"}`} htmlFor={props.id}>
                        {props.icon}
                    </label>
                )}
            </Flex>
        </Flex>
    );
};

export default CustomInput;
