import type { NextApiRequest, NextApiResponse } from "next";
import { PlaceController } from "../../../controllers/PlaceController";
import dbConnect from "../../../utils/db";

export default async function placeHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const controller = new PlaceController();
    await dbConnect();
    switch (req.method) {
        case "GET":
            return controller.getPlaces(req, res);
        case "POST":
            return controller.registerPlace(req, res);
        default:
            return res.status(404).json({
                message: "api not found",
            });
    }
}
