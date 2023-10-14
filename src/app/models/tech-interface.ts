import { ObjectId } from "mongoose";

export interface Tech {
    _id:ObjectId;
    title: string;
    description: string;
    logo: string;
}