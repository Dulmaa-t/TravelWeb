import { ObjectId } from "mongoose";

export interface IRegister {
    id: string;
    password: string;
}

export interface IRegistration {
    id:string;
    password?: string;
    passwordConfirm?: string;
    nickname?: string;
    email?: string;
}