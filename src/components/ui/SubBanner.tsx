import { useEffect, useState, useRef, BaseSyntheticEvent } from "react";
import Image from "next/image";
import Sbanner from "../../../public/bg_1.png";

export interface SubBannerProps {
    path: string;
}

export default function SubCover() {
    const [fixBanner, setFixBanner] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = (_: any) => {
            if (window.scrollY >= 400) {
                setFixBanner(true)
            } else {
                setFixBanner(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div>
                <div className="z-50 relative w-full h-screen scroll-smooth hover:scroll-auto"> {/*style={{position: fixBanner ? 'fixed' : 'absolute'}}*/}
                    <Image layout="fill" objectFit="cover" src={Sbanner} alt={`art`} />
                    <div style={{ backgroundImage: 'linear-gradient(45deg, #2f88fc 0%, #ff5959 100%)' }} className="absolute z-30 w-full h-full top-0 left-0 opacity-20 flex items-center justify-center"></div>
                    <div className="w-full h-full z-40 container mx-auto flex flex-col text-white justify-center items-center">
                        <h1 className="text-center text-[60px] absolute bottom-20">
                            About Us
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}