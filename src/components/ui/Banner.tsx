import { useEffect, useState, useRef, BaseSyntheticEvent } from "react";
import Image from "next/image";
import banner from "../../../public/bg_2.png";
import "node_modules/video-react/dist/video-react.css";
import { H1 } from "../custom/Typography";
import Link from "next/link";
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { Player } from 'video-react';
// import Modal from 'react-modal';
import { Modal } from "../custom/Modal";


export default function Cover() {
    const [open, setOpen] = useState(false);
    const [containerWidth, setContainerWidth] = useState();

    const hide = () => {
        setOpen(false)
    }

    const openLayer = () => {
        setOpen(true)
    }



    return (
        <>
            <div>
                <div className="z-50 relative w-full h-screen">
                    <Image layout="fill" objectFit="cover" src={banner} alt={`art`}/>
                    <div style={{ backgroundImage: 'linear-gradient(45deg, #2f88fc 0%, #ff5959 100%)' }} className="absolute z-30 w-full h-full top-0 left-0 opacity-40 flex items-center justify-center"></div>
                    <div className="absolute w-full h-full z-40 flex items-center justify-center">
                        <div className="container mx-auto flex flex-col text-white">
                            <div onClick={openLayer} style={{ transition: '.3s all ease', margin: '0 auto' }} className="relative flex p-10">
                                <div className="absolute top-0 right-0 w-[80px] h-[80px] rounded-full bg-warning animate-ping"></div>
                                <div className="absolute top-0 right-0 w-[80px] h-[80px] rounded-full bg-warning  opacity-75">
                                    <BsFillPlayFill className="opacity-75 my-8 mx-8 text-white" />
                                </div>
                            </div>
                            <div className=" rounded-full bg-warning"></div>
                            <span className="flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-warning-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-warning-500"></span>
                            </span>
                            <p className="text-[16px] text-center justify-center my-8">Travel to the any corner of the world, without going around in circles</p>
                            <h1 className="text-center text-[60px]">Make Your Tour Amazing With Us</h1>
                        </div>
                    </div>
                </div>
                <Modal show={open} hide={hide}>
                    <div style={{ opacity: open ? 1 : 0, transition: 'all 0.3s ease' }} onClick={(e: BaseSyntheticEvent) => {
                        e.stopPropagation();
                        console.log('hi')
                    }} className="w-full h-full">
                        <video className="w-full h-full" controls loop autoPlay>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                        </video>
                    </div>
                </Modal>
            </div>
        </>
    )
}