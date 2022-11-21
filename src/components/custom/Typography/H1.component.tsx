import { FunctionComponent, ReactNode } from "react";
import { TextComponent } from "./type";

export interface TitleComponent extends TextComponent<ReactNode> {

}

const TitleH1:FunctionComponent<TitleComponent> = (props) => {
    return <h1 className={`
        text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl
        text-black font-bold
        ${props.className ? props.className : ''}
    `}>
        {props.children}
    </h1>
}

export default TitleH1;