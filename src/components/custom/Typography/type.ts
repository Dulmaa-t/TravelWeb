export interface TextComponent<T> {
    children: T;
    className?: string;
    id?: string;
    varient?: string;
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'xl-2' | 'xl-3' | 'xl-4' | 'xl-5' | 'xl-6' | 'xl-7' | 'xl-8' | 'xl-9' | 'xxs'
}