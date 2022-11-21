export interface ButtonProps<T> {
    title: string;
    icon?: T;
    onClick?: () => void;
    className?: string;
    id?: string;
    disabled?: boolean;
    loading?: boolean;
    fluid?: boolean;
    width?: string;
    color?: 'black'|'grey'|'warning'
    iconPosition?: 'left' | 'right'
    type?: "button" | "submit" | "reset"
}
