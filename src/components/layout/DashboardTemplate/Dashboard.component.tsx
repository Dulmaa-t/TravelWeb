import Head from "next/head";
import { FC, FormEvent, Fragment, ReactNode, useCallback, useEffect, useState } from "react";
import Header from "../../ui/Header";
import Footer from "../../ui/Footer";
import ContainerProvider from "../../../context/ContainerContext";
import Image from "next/image";
import Banner from "../../ui/Banner";

export interface DashBoardProps {
    children: ReactNode;
    title?: string;
    path: string
}

const DashboardComponents: FC<DashBoardProps> = ({ children, title, path }) => {
    // const scrollY = useCallback((e: any) => {
    //     console.log(window.scrollY)
    // }, [])


    return (
        <Fragment>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header path={path} />
            <Banner />
            <div className="h-full">
                {children}
            </div>
            <div>
                {/* <div className="fixed w-full top-0 left-0 z-50"> */}
                {/* </div> */}
                <Footer />
            </div>
        </Fragment>
    )
}

export default DashboardComponents;