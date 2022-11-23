import { FunctionComponent, ReactNode } from "react";

export interface FlexWrapProps {
    direction?: string
    gap?: string
    item?: string
    justify?: string
    children?: ReactNode
    center?: boolean
    className?: string
}

const FlexWrap:FunctionComponent<FlexWrapProps> = (props) => {
    return <div className={`
        flex
        ${props.center ? 'flex-center' : props.item ? props.item : 'items-start'}
        ${props.center ? 'flex-center' : props.justify ? props.justify : 'justify-start'}
        ${props.gap ? props.gap : ''}
        ${props.direction ? 'flex-col' : 'flex-row'}
        ${props.className ? props.className : ''}
    `}>
        {props.children}
    </div>
}

export default FlexWrap;