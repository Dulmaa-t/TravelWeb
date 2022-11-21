import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { H1 } from "../custom/Typography";
import { FacebookIcon, TwitterIcon, InstagramIcon, EmailIcon } from "../icons";
import { HiLocationMarker, HiPhone } from 'react-icons/hi';
import footerImg from "../../../public/footer-bg.png";

const Footer = () => {
    return (
        <>
            <footer className="h-[615px] w-full z-50 relative mt-20">
                <Image unoptimized priority layout="fill" src={footerImg} alt={`art`} />
                <div style={{ backgroundImage: '#201e25' }}  className="absolute z-30 w-full h-full bottom-0 p-20">
                    <div className="container mx-auto lg:px-40 md:px-20 w-full mb-24 font-noto grid gap-10 lg:grid-cols-4 text-xs sm:text-sm md:text-base md:grid-cols-1 grid-cols">
                        <div className="text-white">
                            <h1 className="text-base truncate font-bold mt-5 mb-3 md:text-lg lg:text-[18px] md:my-8">Vacation</h1>
                            <div className=" flex flex-col">
                                <p className="flex text-white-light lg:text-[16px] font-medium leading-7 mb-14">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                <div className="flex flex flex-row gap-6 animated-bounce w-6 h-6">
                                    <div className="flex rounded-full bg-grey-dark h-[50px] w-[50px]">
                                        <Link passHref href={`https://www.facebook.com/`} className="inline-flex items-center px-3 py-3 fill-white">
                                            <TwitterIcon />
                                        </Link>
                                    </div>
                                    <div className="flex rounded-full bg-grey-dark h-[50px] w-[50px]">
                                        <Link passHref href={`https://www.facebook.com/`} className="inline-flex items-center px-3 py-3 fill-white">
                                            <FacebookIcon />
                                        </Link>
                                    </div>
                                    <div className="flex rounded-full bg-grey-dark h-[50px] w-[50px]">
                                        <Link passHref href={`https://www.facebook.com/`} className="inline-flex items-center px-3 py-3 fill-white">
                                            <InstagramIcon />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-white">
                            <h1 className="text-base truncate font-bold mt-5 mb-3 md:text-lg lg:text-[18px] md:my-8">Infromation</h1>
                            <div className=" flex flex-col">
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Online Enquiry</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">General Enquiries</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Booking Conditions</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Privacy and Policy</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Refund Policy</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Call Us</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-white">
                            <h1 className="text-base truncate font-bold mt-5 mb-3 md:text-lg lg:text-[18px] md:my-8">Experience</h1>
                            <div className=" flex flex-col">
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Adventure</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Hotel and Restaurant</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Beach</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Nature</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Camping</p>
                                    </Link>
                                </div>
                                <div className="flex pb-4">
                                    <Link href={`/`}>
                                        <p className="text-grey-light">Party</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="text-white">
                            <h1 className="text-base truncate font-bold mt-5 mb-3 md:text-lg lg:text-[18px] md:my-8">Have a Questions?</h1>
                            <div className=" flex flex-col">
                                <div className="flex pb-4">
                                    <div className="flex flex-row">
                                        <div className="flex mr-10">
                                            <Link passHref href={`https://www.facebook.com/`} className="inline-flex fill-white">
                                                <HiLocationMarker />
                                            </Link>
                                        </div>
                                        <div className="flex text-grey-light">
                                            <p>	203 Fake St. Mountain View, San Francisco, California, USA</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pb-4">
                                    <div className="flex flex-row">
                                        <div className="flex mr-10">
                                            <Link passHref href={`https://www.facebook.com/`} className="inline-flex fill-white">
                                                <HiPhone />
                                            </Link>
                                        </div>
                                        <div className="flex">
                                            <p>	+2 392 3929 210 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex pb-4">
                                    <div className="flex flex-row">
                                        <div className="flex mr-10">
                                            <Link passHref href={`https://www.facebook.com/`} className="inline-flex fill-white">
                                                <EmailIcon />
                                            </Link>
                                        </div>
                                        <div className="flex">
                                            <p> info@yourdomain.com </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white-light text-center ">
                    <p> Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;