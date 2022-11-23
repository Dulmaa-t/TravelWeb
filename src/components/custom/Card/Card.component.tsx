import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import destination1 from "../../../../public/destination-1.png";
import { BsFillMapFill } from 'react-icons/bs';
import { FaUmbrellaBeach, FaShower } from 'react-icons/fa';
import { MdOutlineBed } from 'react-icons/md';
import {ICountry, ITour} from '../../../dto/Tour'

interface ICustomCard {
    el: ITour
}


const CustomCard: FunctionComponent<ICustomCard> = ({el}) => {

    return (
        <div className="w-full h-full font-open flex flex-col border box-border">
            <Link className="" href={`/`} passHref>
                <div className="h-[270px] w-full relative">
                    <Image layout="fill" objectFit="cover" src={el.thumbnail} alt="nft-creator" />
                </div>
            </Link>
            <div className="w-full flex-1 bg-white ">
                <div className={`w-full h-full flex flex-col py-8 rounded-b-2xl px-4 relative`}>
                <span style={{ top: '-20px' }} className="absolute lg:left-28 sm:left-40 bg-black text-white px-4 py-2 rounded-full hover:bg-warning">${el.price}/person</span>
                    <Link href={`/`} passHref>
                        <span className="text-[12px] text-grey-light">{el.duration} Days Tour</span>
                        <h1 className="cursor-pointer text-xl lg:text-2xl font-normal mb-2 text-[23px]">{el.destination}, {(el.country as ICountry).name}</h1>
                        <div className="flex flex-row text-grey-light mb-4">
                            <span className="mr-2 text-[13px] my-1"><BsFillMapFill /></span>
                            <span className="justify-center text-[16px]">{el.destination}, {(el.country as ICountry).name}</span>
                        </div>
                    </Link>
                    <ul className="flex flex-row">
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><FaShower /></span>
                            <span>{el.shower_num}</span>
                        </li>
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><MdOutlineBed/></span>
                            <span>{el.flat}</span>
                        </li>
                        <li className="pr-4 flex flex-row">
                            <span className="text-warning py-1 mr-2"><FaUmbrellaBeach /></span>
                            <span>{el.place}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CustomCard;