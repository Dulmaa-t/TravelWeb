import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const mobileNavlist: {
    name: string;
    path: string;
    type: 'default' | 'button'
}[] = [
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
            name: "Book Now",
            path: '#',
            type: 'button'
        },
    ]

interface IMobileNav {
    path: string;
}

const MobileNav = ({ path }: IMobileNav) => {
    const [fixHeader, setFixHeader] = useState<boolean>(false)

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
            <div className="bg-white flex flex-col gap-4 p-5">
                {
                    mobileNavlist.map(({name, type, path: route}, index) => (
                        type === 'button' ? <button className="rounded bg-warning py-2">{name}</button> :
                        <Link href={path}>
                            <p className={`py-[13px] px-[18px] text-[15px] ${path === route ? 'text-warning' : fixHeader ? 'text-black' : 'text-white'}`}>{name}</p>
                        </Link> 
                    ))
                }
            </div>
        </>
    )
}

export default MobileNav;