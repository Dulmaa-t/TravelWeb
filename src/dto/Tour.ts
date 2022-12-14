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
    places: string[] | ObjectId[] | IPlace[];
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

export interface IPlace {
    _id?: string;
    country: ObjectId | string | ICountry;
    tour_num: number;
    thumbnail:string;
}
