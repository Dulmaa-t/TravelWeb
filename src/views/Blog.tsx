import React, { useEffect, useState, FunctionComponent } from "react";
import { DashBoard } from "../components/layout/DashboardTemplate";
import Link from "next/link";
import Image from "next/image";
import { H3 } from "../components/custom/Typography";
import { useGetPostsQuery } from "../redux/service/postApi";
import { useRouter } from "next/router";
import PostCard from "../components/custom/PostCard/PostCard.component";

export interface BlogPageProps { }

const BlogPage: FunctionComponent<BlogPageProps> = (): JSX.Element => {
    const { data: postData } = useGetPostsQuery();
    const route = useRouter();

    return <DashBoard path="/Blog">
        <div className="my-20 container mx-auto lg:px-40 md:px-40">
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

export default BlogPage;