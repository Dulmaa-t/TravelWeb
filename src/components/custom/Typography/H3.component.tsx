import { FunctionComponent, ReactNode } from "react";
import { TextComponent } from "./type";

export interface TitleComponent extends TextComponent<ReactNode> {

}

const TitleH3:FunctionComponent<TitleComponent> = (props) => {
    return <h3 className={`
        text-sm lg:text-base xl:text-xl 2xl:text-2xl
        text-black font-[500]
        ${props.className ? props.className : ''}
    `}>
        {props.children}
    </h3>
}

export default TitleH3;