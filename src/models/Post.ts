import mongoose , { Schema, model, Model } from "mongoose";
import { IPost } from "../dto/Tour";

mongoose.Promise = global.Promise;

const PostSchema: Schema = new Schema<IPost>({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    brief: {
        type: String,
        required: true,
    },
});

export default mongoose.models.Post || model<
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
>("Post", PostSchema);
