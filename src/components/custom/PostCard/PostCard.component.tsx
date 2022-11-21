import { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import Image1 from "../.././../../public/image_1.png";

export interface IPostCard {

}

const PostCard: FunctionComponent<IPostCard> = () => {
    return (
        <div className="flex flex-col">
            <Link href={`/`}>
                <Image src={Image1} alt="" />
            </Link>
            <div>
                <Link href={`/`}>
                    <h1 className="text-[20px]">Why Lead Generation is Key for Business Growth</h1>
                </Link>
                <Link href={`/`}>
                    <p className="text-[#999999]">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </Link>
            </div>
        </div>
    )
}

export default PostCard;