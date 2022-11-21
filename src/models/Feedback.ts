import { Schema, model, Model } from "mongoose";
import { IFeedback } from "../dto/Tour";

const FeedbackSchema: Schema = new Schema<IFeedback>({
    fullname: {
        type: String,
        required: true,
    },
    profession: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});

export default model<
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
>("Feedback", FeedbackSchema);
