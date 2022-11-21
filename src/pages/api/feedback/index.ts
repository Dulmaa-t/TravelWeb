// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { FeedbackController } from "../../../controllers/FeedbackController";
import dbConnect from "../../../utils/db";

export default async function feedbackHandler(req: NextApiRequest, res: NextApiResponse) {
    const controller = new FeedbackController();
    await dbConnect();
    switch (req.method) {
        case "GET":
            return controller.getFeedbacks(req, res);
        case "POST":
            return controller.resgiterFeedback(req, res);
        default:
            return res.status(404).json({
                message: "api not found",
            });
    }
}
