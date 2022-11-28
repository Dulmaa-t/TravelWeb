import React, { useEffect, useState, FunctionComponent } from "react";
import { Button } from "../components/custom/Button";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Scrollbar, Navigation } from "swiper";
import { DashBoard } from "../components/layout/DashboardTemplate";
import { NextPage } from "next";
import { H3 } from "../components/custom/Typography";
import { Card } from "../components/custom/Card";
import { SliderCard } from "../components/custom/SliderCard";
import PostCard from "../components/custom/PostCard/PostCard.component";
import { FaRoute, FaMapMarkedAlt } from "react-icons/fa";
import { useGetToursQuery } from "../redux/service/tourApi";
import { useGetFeedbacksQuery } from "../redux/service/feedbackApi";
import { useGetPostsQuery } from "../redux/service/postApi";
import { useRouter } from "next/router";
import { ITour, IFeedback } from "../dto/Tour";

import about from "../../public/about.png";
import place1 from '../../public/place-1.png';
import place2 from '../../public/place-2.png';
import place3 from '../../public/place-3.png';
import place4 from '../../public/place-4.png';
import bg3 from "../../public/bg_3.png";
import icon from "../../public/paragliding_icon.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export interface HomePageProps { }

const HomePage: FunctionComponent<HomePageProps> = (): JSX.Element => {
    const { data: tourData } = useGetToursQuery();
    const { data: feedbackData } = useGetFeedbacksQuery();
    const { data: postData } = useGetPostsQuery();
    const route = useRouter();

    SwiperCore.use([Autoplay]);

    useEffect(() => {
        console.log(tourData)
    }, [tourData])

    return <DashBoard path="/">
        <div className="bg-grey py-20">
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4 container mx-auto lg:px-40 md:px-20 sm:px-20 px-5">
                <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4">
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
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 my-8 md: my-4 text-center">
                        <div className="flex flex-col">
                            <strong className="text-[28px] text-warning">300</strong>
                            <span className="text-grey-light text-[16px] my-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Successful Tours</span>
                        </div>
                        <div className="flex flex-col">
                            <strong className="text-[28px] text-warning">24,000</strong>
                            <span className="text-grey-light text-[16px] my-2" style={{ color: 'rgba(0, 0, 0, 0.7)' }}>Happy Tourist</span>
                        </div>
                        <div className="flex flex-col">
                            <strong className="text-[28px] text-warning">200</strong>
                            <span className="text-grey-light text-[16px] my-2">Place Explored</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-20 container mx-auto lg:px-40 md:px-20 sm:px-20">
            <H3 className="text-center">Best Place Destination</H3>
            <div className="grid lg:grid-cols-4 md:grid-cols-1 text-center my-10">
                <div className="relative h-[320px] transition-all duration-300 mx-6 mb-10">
                    <Link href={`/`}>
                        <Image className="rounded-lg" layout="fill" objectFit="cover" src={place1} alt="place1" />
                        <div className="relative z-20 text-white flex flex-col">
                            <h3 className="text-[22px] absolute left-4 top-4">Singapore</h3>
                            <span className="text-[20px] absolute right-0 top-60 bg-black px-4 py-1 rounded-full rounded-r-lg hover:bg-warning">8 Tours</span>
                        </div>
                    </Link>
                </div>
                <div className="relative h-[320px] transition-all duration-300 mx-6 mb-10">
                    <Image className="rounded-lg" layout="fill" objectFit="cover" src={place2} alt="place2" />
                    <div className="relative z-20 text-white flex flex-col">
                        <h3 className="text-[22px] absolute left-4 top-4">Canada</h3>
                        <span className="text-[20px] absolute right-0 top-60 bg-black px-4 py-1 rounded-full rounded-r-lg hover:bg-warning">2 Tours</span>
                    </div>
                </div>
                <div className="relative h-[320px] transition-all duration-300 mx-6 mb-10">
                    <Image className="rounded-lg" layout="fill" objectFit="cover" src={place3} alt="place3" />
                    <div className="relative z-20 text-white flex flex-col">
                        <h3 className="text-[22px] absolute left-4 top-4">Thailand</h3>
                        <span className="text-[20px] absolute right-0 top-60 bg-black px-4 py-1 rounded-full rounded-r-lg hover:bg-warning">5 Tours</span>
                    </div>
                </div>
                <div className="relative h-[320px] transition-all duration-300 mx-6 mb-10">
                    <Image className="rounded-lg" layout="fill" objectFit="cover" src={place4} alt="place4" />
                    <div className="relative z-20 text-white flex flex-col">
                        <h3 className="text-[22px] absolute left-4 top-4">Autralia</h3>
                        <span className="text-[20px] absolute right-0 top-60 bg-black px-4 py-1 rounded-full rounded-r-lg hover:bg-warning">5 Tours</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container mx-auto lg:px-40 md:px-20 sm:px-20">
            <H3 className="text-center">Tour Destination</H3>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 my-8 mx-6">
                {
                    tourData?.result.map((el: ITour, index: number) => (
                        <div key={index}><Card el={el} /></div>
                    ))
                }
            </div>
        </div>
        <div className="h-[658px] w-full z-50 relative">
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
        <div className="my-20 container mx-auto lg:px-40 md:px-20 px-5">
            <H3 className="text-center">Recent Post</H3>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 my-8">
                {
                    postData?.result.map((el, index) => (
                        <div key={index}><PostCard el={el} /></div>
                    ))
                }

            </div>
        </div>

    </DashBoard>
}

export default HomePage;