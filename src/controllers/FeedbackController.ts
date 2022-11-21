import { FeedbackService } from "../service/FeedbackService";
import { NextApiRequest, NextApiResponse } from "next";
import CustomException from "../utils/CustomException";

export class FeedbackController {
    private feedbackService: FeedbackService;
    constructor() {
        this.feedbackService = new FeedbackService();
    }

    public async getFeedbacks(req: NextApiRequest, res: NextApiResponse) {
        try {
            const feedbacks = await this.feedbackService.getFeedbacks();
            console.log(feedbacks)
            res.status(200).json({
                result: feedbacks,
            });
        } catch (err) {
            if (err instanceof CustomException) {
                res.status(err.status).json({
                    message: err.message,
                });
            }
            res.status(400).json({
                message: "something went wrong!",
            });
        }
    }

    public async resgiterFeedback (req: NextApiRequest, res: NextApiResponse) {
        try {
            const feedback = await this.feedbackService.resgiterFeedback(req.body);
            res.status(201).json({
                result: feedback,
            });
        } catch (err) {
            if (err instanceof CustomException) {
                res.status(err.status).json({
                    message: err.message,
                });
            }
            res.status(400).json({
                message: "something went wrong!",
            });
        }
    }
}
