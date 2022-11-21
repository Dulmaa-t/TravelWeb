import Feedback from "../models/Feedback";
import CustomException from "../utils/CustomException";
import { IFeedback } from "../dto/Tour";

export class FeedbackService {
    public getFeedbacks = async () => {
        try {
            const feedbacks = await Feedback.find();
            return feedbacks;
        } catch (err) {
            console.log(err);
            throw new CustomException(500, "query error!");
        }
    };

    public resgiterFeedback = async (formData: IFeedback) => {
        try {
            const feedback = await new Feedback(formData).save();
            return feedback;
        } catch (err) {
            console.log(err);
            if(err instanceof CustomException){
                throw new CustomException(err.status, err.message);
            }
        }
    };
}