import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { ICountry, IPlace } from "../../../dto/Tour";

export interface IPlaceCard {
    el: IPlace
}

const PlaceCard: FunctionComponent<IPlaceCard> = ({ el }) => {
    return (
        <div className="relative h-[320px] transition-all duration-300 mx-6 mb-10">
            <Link href={`/`}>
                <Image className="rounded-lg" layout="fill" objectFit="cover" src={el.thumbnail} alt="place1" />
                <div className="relative z-20 text-white flex flex-col">
                    <h3 className="text-[22px] absolute left-4 top-4">{(el.country as ICountry).name}</h3>
                    <span className="text-[20px] absolute right-0 top-60 bg-black px-4 py-1 rounded-full rounded-r-lg hover:bg-warning">{el.tour_num} Tours</span>
                </div>
            </Link>
        </div>
    )
}

export default PlaceCard;