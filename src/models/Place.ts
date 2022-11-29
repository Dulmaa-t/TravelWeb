import mongoose, { Schema, model, Model, Types } from "mongoose";
import { IPlace } from "../dto/Tour";


const PlaceSchema: Schema = new Schema<IPlace>({

    country: {
        type: Types.ObjectId,
        ref: 'Country',
        required: true,
    },
    tour_num: {
        type: Number,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Place || model<
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
>("Place", PlaceSchema);
