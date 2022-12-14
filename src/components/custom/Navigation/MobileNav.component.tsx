import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useNavigationContext } from "../../custom/Navigation/_context";
import { useRouter } from "next/router";
const mobileNavlist = 
    [
        {
            name: "Home",
            path: '/',
            type: 'default'
        },
        {
            name: "About",
            path: '/About',
            type: 'default'
        },
        {
            name: "Destination",
            path: '/Destination',
            type: 'default'
        },
        {
            name: "Blog",
            path: '/Blog',
            type: 'default'
        },
        {
            name: "Contact",
            path: '/Contact',
            type: 'default'
        },
        {
            name: "LogIn",
            path: '/Register',
            type: 'default'
        },
    ]  

const MobileNav = () => {
    const [fixHeader, setFixHeader] = useState<boolean>(false)
    const { isSidebarOpen } =  useNavigationContext();
    const router =  useRouter();
    const { closeSidebar } = useNavigationContext();

    const handleClick = (href:string)=>{
        router.push(href);
        closeSidebar!();
    }
    useEffect(() => {
        const handleScroll = (_: any) => {
            if (window.scrollY >= 400) {
                setFixHeader(true)
            } else {
                setFixHeader(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{position: fixHeader ? 'fixed' : 'absolute', backgroundColor: fixHeader ? 'white' : 'black'}} className={`fixed top-20 left-0 w-full z-50 flex flex-col gap-4 p-5 lg:hidden md:hidden  sm:hidden ${isSidebarOpen ? 'translate-y-0' : '-translate-y-[100%]'} transition`}>
                {
                    mobileNavlist.map(({name, type, path}, index) => (
                        type === 'button' ? <button className="rounded bg-warning py-2">{name}</button> :
                        <button onClick={()=>handleClick(path)}>
                            <p style={{color: fixHeader ? 'black' : 'white'}} className={`py-[13px] px-[18px] text-[15px]`}>{name}</p>
                        </button> 
                    ))
                }
            </div>
        </>
    )
}

export default MobileNav;