import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../.././../../public/image_1.png";
import { IPost } from '../../../dto/Tour';

export interface IPostCard {
    el: IPost
}

const PostCard: FunctionComponent<IPostCard> = ({ el }) => {
    return (
        <div className="flex flex-col px-2">
            <Link className="relative" href={`/`}>
                <div className=" h-[270px] w-full">
                    <Image layout="fill" objectFit="cover" src={el.thumbnail} alt="" />
                </div>
                <div className="flex flex-row bg-warning text-white w-[130px] rounded-tr-[30px] px-3 absolute bottom-0">
                    <div className="mr-2 text-[50px]">
                        <span>21</span>
                    </div>
                    <div className="flex flex-col text-[13px] justify-center">
                        <span>2019</span>
                        <span>August</span>
                    </div>
                </div>
            </Link>
            <div className="my-4">
                <Link href={`/`}>
                    <h1 className="text-[20px] font-bold hover:text-warning">{el.title}</h1>
                </Link>
                <Link href={`/`}>
                    <p className="text-grey-light py-4">{el.brief}</p>
                </Link>
            </div>
        </div>
    )
}

export default PostCard;