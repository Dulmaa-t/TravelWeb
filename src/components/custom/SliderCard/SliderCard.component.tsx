import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import person1 from "../../../../public/person_1.png";
import {IFeedback} from '../../../dto/Tour'

interface ISliderCard {
    el:IFeedback
}


const SliderCard: FunctionComponent<ISliderCard> = ({el}) => {
    console.log('el : ' ,  el)

    return (
        <div className="bg-white p-8 text-[16px] text-grey-light font-sans">
            <p className="">
                {el.comment}
            </p>
            <div className="flex flex-row align-items-center mt-10">
                <div className="w-[80px] h-[80px]">
                   {/*{el.avatar.includes('http') &&   <Image layout="fill" className="rounded-full" src={el.avatar} alt="" /> }*/}
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