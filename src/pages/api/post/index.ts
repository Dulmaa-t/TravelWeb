// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PostController } from "../../../controllers/PostController";
import dbConnect from "../../../utils/db";

export default async function postHandler(req: NextApiRequest, res: NextApiResponse) {
    const controller = new PostController();
    await dbConnect();
    switch (req.method) {
        case "GET":
            return controller.getPosts(req, res);
        case "POST":
            return controller.registerPost(req, res);
        default:
            return res.status(404).json({
                message: "api not found",
            });
    }
}
