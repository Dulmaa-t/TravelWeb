import React, { useEffect, useState, FunctionComponent } from "react";
import { DashBoard } from "../components/layout/DashboardTemplate";
import Link from "next/link";
import Image from "next/image";
import { H3 } from "../components/custom/Typography";
import { useGetToursQuery } from "../redux/service/tourApi";
import { useGetPlacesQuery } from "../redux/service/placeApi";
import { Card } from "../components/custom/Card";
import { Pagination } from "../../src/components/custom/Pagination";
import PlaceCard from "../components/custom/PlaceCard/PLaceCard.component";

import place1 from "../../public/place-1.png";
import place2 from "../../public/place-2.png";
import place3 from "../../public/place-3.png";
import place4 from "../../public/place-4.png";

export interface DestinationPageProps { }

const DestinationPage: FunctionComponent<DestinationPageProps> = (): JSX.Element => {
    const { data: tourData } = useGetToursQuery();
    const { data: placeData } = useGetPlacesQuery();
    const [currentPage, setCurrentPage] = useState<number>(1);

    const changePage = (page: number) => {
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    };

    return <DashBoard path="/Destination">
        <div>
            <div className="py-20 container mx-auto lg:px-40">
                <H3 className="text-center">Best Place Destination</H3>
                <div className="grid lg:grid-cols-4 md:grid-cols-1 text-center my-10">
                    {
                        placeData?.result.map((el, index) => (
                            <div key={index}><PlaceCard el={el} /></div>
                        ))
                    }
                </div>
            </div>
            <div className="lg:my-20 md:lg-10 container mx-auto lg:px-40 sm:px-10">
                <H3 className="text-center">Tour Destination</H3>
                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 my-8 mx-6">
                    {
                        tourData?.result.map((el, index) => (
                            <div key={index}><Card el={el} /></div>
                        ))
                    }
                </div>
                <div className="flex justify-center items-center">
                    {
                        tourData && <Pagination current={currentPage} onChangePage={changePage} totalPages={2} />
                    }
                </div>
            </div>
        </div>
    </DashBoard>
}

export default DestinationPage;