import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../custom/Button";
import { FaChevronUp } from "react-icons/fa";
import axios from "axios";
import Hamburger from 'hamburger-react';
import { useNavigationContext } from "../custom/Navigation/_context";


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

interface IHeader {
    path: string
}

const Header = ({ path }: IHeader) => {
    const chevron = useRef();
    const [fixHeader, setFixHeader] = useState<boolean>(false)
    const [responsiveHeader, setresponsiveHeader] = useState<boolean>(false)
    const [isOpen, setOpen] = useState(false)
    const { openSidebar, closeSidebar, toggleSidebar } = useNavigationContext();
    const handleClick = () => {
        setOpen(prev => !prev);
        toggleSidebar!();
    }

    const goTop = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

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
            <header style={{ transition: "all .3s ease !important", position: fixHeader ? 'fixed' : 'absolute', backgroundColor: fixHeader ? 'white' : 'transparent', boxShadow: fixHeader ? '0 2px 4px 0 rgba(0,0,0,.2)' : 'none' }} className="w-full hidden sm:block md:block z-[80] top-0 left-0">
                <div className="container mx-auto flex flex-row justify-between">
                    <div className="xl:px-40 lg:px-20 flex">
                        <Link href={'/'}>
                            <div className="flex flex-col bg-black text-white text-center py-4 px-8 w-[160px]">
                                <div className="flex text-[24px] font-bold">Vacation</div>
                                <div className="flex text-[11px] font-bold tracking-wider uppercase">
                                    <span>Travel Agency</span>
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

            <header style={{ transition: "all .3s ease !important", position: fixHeader ? 'fixed' : 'absolute', backgroundColor: fixHeader ? 'white' : 'black', color: fixHeader ? 'black' : 'white', boxShadow: fixHeader ? '0 2px 4px 0 rgba(0,0,0,.2)' : 'none' }} className="w-full z-[80] top-0 left-0 sm:hidden md:hidden">
                <div className="container mx-auto flex flex-row justify-between">
                    <div className="flex">
                        <Link href={'/'}>
                            <div className="flex flex-col bg-black text-white text-center py-4 px-8 w-[160px]">
                                <div className="flex text-[24px] font-bold">Vacation</div>
                                <div className="flex text-[11px] font-bold tracking-wider uppercase">
                                    <span>Travel Agency</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex justify-center items-center mx-4">
                        <Hamburger toggled={isOpen} toggle={handleClick} />
                    </div>
                </div>
            </header>
            <div onClick={goTop} className="fixed border border-white flex w-16 cursor-pointer rounded-full h-16 bg-gray-200 bottom-8 right-10 opacity-0 invisible transition duration-300 shadow-xl items-center justify-center text-[#666]">
                <FaChevronUp />
            </div>
        </>
    )
}

export default Header;