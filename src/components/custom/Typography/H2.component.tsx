import { FunctionComponent, ReactNode } from "react";
import { TextComponent } from "./type";

export interface TitleComponent extends TextComponent<ReactNode> {

}

const TitleH2: FunctionComponent<TitleComponent> = (props) => {
    return <h2 className={`
    text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl
    text-black font-[300]
    ${props.className ? props.className : ''}
    `}
    >
        {props.children}
    </h2>
}

export default TitleH2;