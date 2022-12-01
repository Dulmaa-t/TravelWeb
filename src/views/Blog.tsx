import React, { useEffect, useState, FunctionComponent } from "react";
import { DashBoard } from "../components/layout/DashboardTemplate";
import Link from "next/link";
import Image from "next/image";
import { H3 } from "../components/custom/Typography";
import { useGetPostsQuery } from "../redux/service/postApi";
import { useRouter } from "next/router";
import PostCard from "../components/custom/PostCard/PostCard.component";
import { Pagination } from "../../src/components/custom/Pagination";

import { IPost } from "../dto/Tour"; 

export interface BlogPageProps { }

const BlogPage: FunctionComponent<BlogPageProps> = (): JSX.Element => {
    
    const [ postData, setPostData ] = useState<IPost[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const route = useRouter();

    const getPostsQuery = useGetPostsQuery();


    const changePage = (page: number) => {
        if (page !== currentPage) {
            setCurrentPage(page);
           
        }
    };

    useEffect(() => {   
        const data = getPostsQuery;
        if(data && data?.data?.result){
            setPostData(data?.data?.result)
        }
    }, [currentPage, getPostsQuery]);



    return <DashBoard path="/Blog">
        <div className="my-20 container mx-auto lg:px-40 md:px-10 sm:px-5">
            <H3 className="text-center">Recent Post</H3>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-4 my-8">
                {
                  postData && postData.map((el, index) => (
                        <div key={index}><PostCard el={el} /></div>
                    ))
                }

            </div>
            <div className="flex justify-center items-center">
                {
                    postData &&  
                        <Pagination current={currentPage} onChangePage={changePage} totalPages={2}/>
                }
            </div>
        </div>
    </DashBoard>
}

export default BlogPage;