import { FunctionComponent } from "react";
import {HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight} from 'react-icons/hi';

export interface CustomPaginationProps {
    onChangePage: (page: number) => void;
    current: number;
    totalPages: number;
}

const CustomPagination: FunctionComponent<CustomPaginationProps> = ({ current, totalPages, onChangePage }) => {
    const goTop = () => {
        window.scroll({ top: 0, left: 0, behavior: "smooth" });
    };

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <div className="flex items-center gap-1">
                <div
                    onClick={() => {
                        if(current !== 1){
                            onChangePage(1);
                            goTop();
                        }
                    }}
                    className="h-7 w-7 transition duration-300 hover:bg-[#333] hover:text-white cursor-pointer border rounded-full text-[#666] flex text-xs items-center justify-center"
                >
                    <HiOutlineChevronDoubleLeft className="w-4" />
                </div>
                <div
                    onClick={() => {
                        if (current <= 1) {
                            return;
                        } else {
                            onChangePage(current - 1);
                            goTop();
                        }
                    }}
                    className="h-7 w-7 transition duration-300 hover:bg-[#333] hover:text-white cursor-pointer border rounded-full text-[#666] flex text-xs items-center justify-center"
                >
                    <HiOutlineChevronLeft className="w-4" />
                </div>

                {pages.map((page, index) => {
                    return (
                        <div
                            onClick={() => {
                                if(current !== page){
                                    onChangePage(page);
                                    goTop();
                                }
                            }}
                            key={`page-${page}`}
                            className={`h-7 w-7 transition ${current === page ? "bg-[#333] text-white" : "text-[#666]"} duration-300 hover:bg-[#333] hover:text-white cursor-pointer rounded-full text-sm items-center justify-center ${
                                index === current - 1 || index === current - 2 || index === current - 3 || index === current - 4 || (current >= 5 && index === current + 1) || index === current + 2 || index === current + 3 || index === current + 4 || (current < 5 && index < 9) || current === index ? "flex" : "hidden"
                            }`}
                        >
                            {page}
                        </div>
                    );
                })}

                <div
                    onClick={() => {
                        if (current >= pages.length) {
                            return;
                        } else {
                            onChangePage(current + 1);
                            goTop();
                        }
                    }}
                    className="h-7 w-7 transition duration-300 hover:bg-[#333] hover:text-white cursor-pointer border rounded-full text-[#666] flex text-xs items-center justify-center"
                >
                    <HiOutlineChevronRight className="w-4"/>
                </div>
                <div
                    onClick={() => {
                        if(current !== pages.length){
                            onChangePage(pages.length);
                            goTop();
                        }
                    }}
                    className="h-7 w-7 transition duration-300 hover:bg-[#333] hover:text-white cursor-pointer border rounded-full text-[#666] flex text-xs items-center justify-center"
                >
                    <HiOutlineChevronDoubleRight className="w-4"/>
                </div>
            </div>
        </>
    );
};

export default CustomPagination;