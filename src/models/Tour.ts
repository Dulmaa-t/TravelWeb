import mongoose, { Schema, model, Model, Types } from "mongoose";
import { ITour } from "../dto/Tour";
import Country from "./Country";

const TourSchema: Schema = new Schema<ITour>({
    destination: {
        type: String,
        required: true,
    },
    country: {
        type: Types.ObjectId,
        ref: 'Country',
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    shower_num: {
        type: Number,
        required: true,
    },
    flat: {
        type: Number,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Tour || model<
    Schema<
        any,
        Model<any, any, any, any, any>,
        {},
        {},
        {},
        {},
        "type",
        {
            [x: string]: any;
        }
    >
>("Tour", TourSchema);
