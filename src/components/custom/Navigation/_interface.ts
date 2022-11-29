export interface INavigationContext{
    isSidebarOpen:boolean;
    openSidebar?:()=>void;
    closeSidebar?:()=>void;
    toggleSidebar?:()=>void;
}