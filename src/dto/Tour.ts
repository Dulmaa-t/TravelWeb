import { ObjectId } from "mongoose";

export interface ITour {
    _id?: string;
    destination: string;
    country: ObjectId | string | ICountry;
    price: number;
    duration: number;
    shower_num: number;
    flat: number;
    place: string;
    thumbnail: string;
}

export interface ICountry {
    _id?: string;
    name: string;
    travels: string[] | ObjectId[] | ITour[];
}

export interface IFeedback {
    _id?: string;
    fullname: string;
    profession: string;
    avatar: string;
    comment: string;
}

export interface IPost {
    _id?: string;
    date: string;
    thumbnail: string;
    title: string;
    brief: string;
}