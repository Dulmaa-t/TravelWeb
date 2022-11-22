// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { TourController } from "../../../controllers/TourController";
import dbConnect from "../../../utils/db";

export default async function tourHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const controller = new TourController();
    await dbConnect();
    switch (req.method) {
        case "GET":
            return controller.getTours(req, res);
        case "POST":
            return controller.registerTour(req, res);
        case "delete":
            return controller.deleteTour(req, res);
        default:
            return res.status(404).json({
                message: "api not found",
            });
    }
}
