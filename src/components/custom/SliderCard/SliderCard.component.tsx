import { FunctionComponent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import person1 from "../../../../public/person_1.png";

interface ISliderCard {

}


const SliderCard: FunctionComponent<ISliderCard> = () => {

    return (
        <div className="bg-white p-8 text-[16px] text-grey-light font-sans">
            <p className="">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="flex flex-row align-items-center mt-10">
                <div className="w-[80px] h-[80px]">
                    <Image className="rounded-full" src={person1} alt="" />
                </div>
                <div className="pl-3">
                    <p className="text-[20px] text-black">Roger Scott</p>
                    <span className="">Marketing Manager</span>
                </div>
            </div>
        </div>
    )
}

export default SliderCard;