import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import destination1 from "../../../../public/destination-1.png";

interface ICustomCard {

}


const CustomCard: FunctionComponent<ICustomCard> = () => {

    return (
        <div className="w-full h-full font-open flex flex-col">
            <Link href={`/`} passHref>
                <div className="h-full w-full cursor-pointer relative">
                    <Image src={destination1} alt="nft-creator" />
                </div>
            </Link>
            <div className="w-full flex-1 bg-white">
                <div className={`w-full h-full text-center flex flex-col`}>
                    <Link href={`/`} passHref>
                        <p className="mb-2 cursor-pointer text-lg">klnjkjbl</p>
                    </Link>
                    <Link href={`/`} passHref>
                        <h1 className="mb-10 cursor-pointer text-xl lg:text-2xl font-bold">jkhkg</h1>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CustomCard;