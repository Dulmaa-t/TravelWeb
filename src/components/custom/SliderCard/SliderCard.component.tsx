import { FunctionComponent, ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import person1 from "../../../../public/person_1.png";
import { IFeedback } from '../../../dto/Tour'

interface ISliderCard {
    el: IFeedback
}


const SliderCard: FunctionComponent<ISliderCard> = ({ el }) => {
    console.log('el : ', el)

    return (
        <div className="bg-white h-[270px] p-8 text-[16px] text-grey-light font-sans rounded-2xl">
            <p className="">
                {el.comment}
            </p>
            <div className="flex flex-row align-items-center sm:mt-4 md:mt-4 lg:mt-4 xl:mt-8">
                <div className="w-[80px] h-[80px]">
                    <Image width={100} height={100} className="rounded-full" src={el.avatar} alt="" />
                </div>
                <div className="pl-3">
                    <p className="text-[20px] text-black">{el.fullname}</p>
                    <span className="">{el.profession}</span>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;