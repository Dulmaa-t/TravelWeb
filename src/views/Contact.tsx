import React, { useEffect, useState, FunctionComponent } from "react";
import { DashBoard } from "../components/layout/DashboardTemplate";
import { Button } from "../components/custom/Button";
import { SiMinutemailer } from 'react-icons/si';
import { MdCall } from 'react-icons/md';
import { BiWorld } from 'react-icons/bi';
import { FaMapSigns } from 'react-icons/fa';
import { Map } from "../components/custom/Map";
import { Input } from "../components/custom/Input";
import { TextArea } from "../components/custom/TextArea";

export interface ContactPageProps { }

const ContactPage: FunctionComponent<ContactPageProps> = () => {
    const [pins, setPins] = useState<[number, number][]>([]);

    return <DashBoard path="/Contact">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 container mx-auto py-20 px-40">
            <div className="flex flex-col p-8 ">
                <div style={{ margin: '0 auto' }} className="rounded-full bg-black h-[100px] w-[100px] relative">
                    <span className="text-white text-[30px] absolute bottom-9 left-9">
                        <FaMapSigns style={{ margin: '0 auto' }} />
                    </span>
                </div>
                <h3 className="text-center mt-4 font-normal text-[18px]">Address</h3>
                <p className="text-grey-light text-center">198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="flex flex-col p-8">
                <div style={{ margin: '0 auto' }} className="rounded-full bg-black h-[100px] w-[100px] relative">
                    <span className="text-white text-[30px] absolute bottom-9 left-9">
                        <MdCall style={{ margin: '0 auto' }} />
                    </span>
                </div>
                <h3 className="text-center mt-4 font-normal text-[18px]">Contact Number</h3>
                <p className="text-grey-light text-center">+ 1235 2355 98</p>
            </div>
            <div className="flex flex-col p-8">
                <div style={{ margin: '0 auto' }} className="rounded-full bg-black h-[100px] w-[100px] relative">
                    <span className="text-white text-[30px] absolute bottom-9 left-9">
                        <SiMinutemailer style={{ margin: '0 auto' }} />
                    </span>
                </div>
                <h3 className="text-center mt-4 font-normal text-[18px]">Email Address</h3>
                <p className="text-grey-light text-center">info@yoursite.com</p>
            </div>
            <div className="flex flex-col p-8">
                <div style={{ margin: '0 auto' }} className="rounded-full bg-black h-[100px] w-[100px] relative">
                    <span className="text-white text-[30px] absolute bottom-9 left-9">
                        <BiWorld style={{ margin: '0 auto' }} />
                    </span>
                </div>
                <h3 className="text-center mt-4 font-normal text-[18px]">Website</h3>
                <p className="text-grey-light text-center">yoursite.com</p>
            </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 container mx-auto lg:px-40 md:px-20 mb-20">
            <div className="w-full bg-black flex-1 h-[570px]">
                <Map
                    height={100}
                    center={
                        pins.length > 0
                            ? {
                                lat: pins[0][0],
                                lng: pins[0][1],
                            }
                            : undefined
                    }
                    pins={pins}
                />
            </div>
            <div className="lg:my-0 md:my-8 mx-8">
                <form className="bg-grey p-10">
                    <div className="my-4">
                        <Input id="FullName" placeholder="Your Name" />
                    </div>
                    <div className="my-4">
                        <Input id="Email" placeholder="Your Email" />
                    </div>
                    <div className="my-4">
                        <Input id="Subject" placeholder="Subject" />
                    </div>
                    <div className="my-4">
                        <TextArea className="h-[180px]" placeholder="Message" id="delete-reason-datalist" />
                    </div>
                    <button className="bg-warning px-8 py-4 text-white rounded-full">Send Message</button>
                </form>
            </div>
        </div>
    </DashBoard>
}

export default ContactPage;