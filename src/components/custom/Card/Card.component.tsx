import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import destination1 from "../../../../public/destination-1.png";
import { BsFillMapFill } from 'react-icons/Bs';
import { FaUmbrellaBeach, FaShower } from 'react-icons/fa';
import { MdOutlineBed } from 'react-icons/md';

interface ICustomCard {

}


const CustomCard: FunctionComponent<ICustomCard> = () => {

    return (
        <div className="w-full h-full font-open flex flex-col border box-border">
            <Link className="" href={`/`} passHref>
                <div className="h-[270px] w-full relative">
                    <Image layout="fill" objectFit="cover" src={destination1} alt="nft-creator" />
                </div>
            </Link>
            <div className="w-full flex-1 bg-white ">
                <div className={`w-full h-full flex flex-col py-8 rounded-b-2xl px-4 relative`}>
                    <Link href={`/`} passHref>
                        <span style={{ top: '-20px' }} className="absolute bg-black text-white px-4 py-2 left-28 rounded-full hover:bg-warning">$300/person</span>
                        <span className="text-[12px] text-grey-light">8 Days Tour</span>
                        <h1 className="cursor-pointer text-xl lg:text-2xl font-normal mb-2 text-[23px]">Bali, Indonesia</h1>
                        <div className="flex flex-row text-grey-light mb-4">
                            <span className="mr-2 text-[13px] my-1"><BsFillMapFill /></span>
                            <span className="justify-center text-[16px]">Bali, Indonesia</span>
                        </div>
                    </Link>
                    <ul className="flex flex-row">
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><FaShower /></span>
                            <span>2</span>
                        </li>
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><MdOutlineBed/></span>
                            <span>3</span>
                        </li>
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><FaUmbrellaBeach /></span>
                            <span>Near Mountain</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomCard;