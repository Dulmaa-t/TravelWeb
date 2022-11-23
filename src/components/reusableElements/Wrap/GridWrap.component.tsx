import { FunctionComponent, ReactNode } from "react";

export interface GridWrapProps {
    col?: string
    gap?: string
    children: ReactNode
    className?: string
}

const GridWrap:FunctionComponent<GridWrapProps> = (props) => {
    return <div className={`
        grid
        ${props.col ? props.col : 'grid-cols-1'}
        ${props.gap ? props.gap : 'gap-4'}
        ${props.className ? props.className : ''}
    `}>
        {props.children}
    </div>
}

export default GridWrap;