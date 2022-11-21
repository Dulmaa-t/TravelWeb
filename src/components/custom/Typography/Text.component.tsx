import { FunctionComponent, ReactNode } from "react";
import type { TextComponent } from "./type";

export interface TextProps extends TextComponent<ReactNode> {
    
}

const CustomText:FunctionComponent<TextProps> = (props) => {
    return <p className={`
            'text-black'
            ${props.size ? props.size : 'text-base'}
            ${props.className ? props.className : ''}`
        }
    >
        {props.children}
    </p>
}

export default CustomText;