export interface LIcon {
    size?: number;
    color?: string;
}

export default function IconLocation(props:LIcon) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={props.size || "18"} height={props.size || "18"} version="1.1" viewBox="0 0 256 256">
        <path d="M 45 0 C 25.463 0 9.625 15.838 9.625 35.375 c 0 8.722 3.171 16.693 8.404 22.861 L 45 90 l 26.97 -31.765 c 5.233 -6.167 8.404 -14.139 8.404 -22.861 C 80.375 15.838 64.537 0 45 0 z M 45 48.705 c -8.035 0 -14.548 -6.513 -14.548 -14.548 c 0 -8.035 6.513 -14.548 14.548 -14.548 s 14.548 6.513 14.548 14.548 C 59.548 42.192 53.035 48.705 45 48.705 z" transform=" matrix(1 0 0 1 0 0) " fill={props.color || "#fff"}/>
    </svg>
}