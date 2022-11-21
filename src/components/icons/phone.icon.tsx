export interface PIcon {
    size?: number;
    color?: string;
}

export default function IconPhone(props:PIcon) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "26"} height={props.size || "26"} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z"/></svg>
}