import React, { useState, FunctionComponent } from "react";
import { NextPage } from "next";
import { DashBoard } from "../components/layout/DashboardTemplate";
import { FaRoute, FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../components/custom/Button";
import Image from "next/image";
import about from "../../public/about.png";
import { SliderCard } from "../components/custom/SliderCard";
import { useGetFeedbacksQuery } from "../redux/service/feedbackApi";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import { H3 } from "../components/custom/Typography";
import bg3 from "../../public/bg_3.png";
import CountUp from 'react-countup';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface AboutPageProps { }

const AboutPage: FunctionComponent<AboutPageProps> = (): JSX.Element => {
    const { data: feedbackData} = useGetFeedbacksQuery();

    return (
        <DashBoard path="/About">
            <div className="bg-grey py-20">
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 container mx-auto lg:px-40 sm:px-10 px-5">
                    <div className="grid grid-cols-2 gap-4 mr-4">
                        <div className="">
                            <FaMapMarkedAlt className="text-warning text-[60px] my-2" />
                            <h1 className="text-[18px] text-[#000000cc] font-medium">Travel Arrangements</h1>
                            <p className="text-grey-light text-[16px]">A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                        <div className="">
                            <FaRoute className="text-warning text-[60px] my-2" />
                            <h1 className="text-[18px] text-[#000000cc] font-medium">Travel Arrangements</h1>
                            <p className="text-grey-light text-[16px]">A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                        <div className="">
                            <FaRoute className="text-warning text-[60px] my-2" />
                            <h1 className="text-[18px] text-[#000000cc] font-medium">Travel Arrangements</h1>
                            <p className="text-grey-light text-[16px]">A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                        <div className="">
                            <FaMapMarkedAlt className="text-warning text-[60px] my-2" />
                            <h1 className="text-[18px] text-[#000000cc] font-medium">Travel Arrangements</h1>
                            <p className="text-grey-light text-[16px]">A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                    </div>
                    <div className="">
                        <h1 className="text-[40px] font-bold">It`s time to start your adventure</h1>
                        <p className="text-grey-light text-[16px]">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className="text-grey-light text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <Link href={`/`}>
                            <div className="bg-warning w-[200px] border text-center mt-4 rounded-full py-2">
                                <Button color="warning" title="Search Destination" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 container mx-auto lg:px-40 md:px-10 px-5">
                    <div className="relative h-[500px] transition-all duration-300"><Image layout="fill" objectFit="cover" src={about} alt={`art`} /></div>
                    <div className="my-4 items-center px-5">
                        <h1 className="text-[40px] font-bold my-4" style={{ color: 'rgba(0, 0, 0, 0.8)' }}>Make Your Tour Memorable and Safe With Us</h1>
                        <p className="text-grey-light text-[16px]">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 my-8 md:my-4 text-center">
                            <div className="flex flex-col">
                                <strong className="text-[28px] text-warning"><CountUp start={1} end={300} /></strong>
                                <span className="text-grey-light text-[16px] my-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Successful Tours</span>
                            </div>
                            <div className="flex flex-col">
                                <strong className="text-[28px] text-warning"><CountUp start={1} end={24000} /></strong>
                                <span className="text-grey-light text-[16px] my-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Happy Tourist</span>
                            </div>
                            <div className="flex flex-col">
                                <strong className="text-[28px] text-warning"><CountUp start={1} end={200} /></strong>
                                <span className="text-grey-light text-[16px] my-2">Place Explored</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[658px] w-full z-70 relative">
                <Image className="" unoptimized priority layout="fill" src={bg3} alt="bg3" />
                <div className="absolute z-30 w-full h-full bottom-0 p-5">
                    <H3 className="text-center">Tourist Feedback</H3>
                    <div className="my-20 container mx-auto xl:px-40 lg:px-0 md:px-10 sm:px-10">
                        <section className="w-full h-[24rem] relative">
                            <Swiper
                                className="h-full w-full"
                                slidesPerView={1}
                                spaceBetween={20}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 50,
                                    },
                                }}
                                modules={[Pagination, Scrollbar, Navigation]}
                                pagination={{ clickable: true }}
                                autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false,
                                }}
                            >

                                {feedbackData?.result.map((el, index) => (
                                    <SwiperSlide className="rounded-2xl overflow-hidden" key={index} >
                                        <div><SliderCard el={el} /></div>
                                    </SwiperSlide>
                                ))}

                            </Swiper>
                        </section>
                    </div>
                </div>
            </div>
        </DashBoard>
    )
}

export default AboutPage;