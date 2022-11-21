import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../custom/Button";

const navlist: {
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
            path: '#',
            type: 'default'
        },
        {
            name: "Blog",
            path: '#',
            type: 'default'
        },
        {
            name: "Contact",
            path: '#',
            type: 'default'
        },
        {
            name: "Book Now",
            path: '#',
            type: 'button'
        },
    ]

interface IHeader {
    path: string
}

const Header = ({ path }: IHeader) => {
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
            <header style={{ transition: "all .3s ease !important", position: fixHeader ? 'fixed' : 'absolute', backgroundColor: fixHeader ? 'white' : 'transparent' }} className="w-full z-[80] top-0 left-0">
                <div className="container mx-auto flex flex-row justify-between">
                    <div className="px-40 flex">
                        <Link href={'/'}>
                            <div className="flex flex-col bg-black text-white text-center py-4 px-8 w-[160px]">
                                <div className="flex text-[24px]">Vacation</div>
                                <div className="flex text-[11px]">
                                    <span>TRAVEL AGENCY</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <ul className="px-40 flex items-center">
                        {
                            navlist.map(({ name, type, path: route }, index) => (
                                type === 'button' ? <button className="py-[13px] px-[18px] text-[15px] text-white bg-warning rounded">{name}</button> :
                                    <Link key={index} href={route}>
                                        <li className={`py-[13px] px-[18px] text-[15px] ${path === route ? 'text-warning' : fixHeader ? 'text-black' : 'text-white'}`}>
                                            {name}
                                        </li>
                                    </Link>
                            ))
                        }
                    </ul>
                </div>
            </header>

        </>
    )
}

export default Header;