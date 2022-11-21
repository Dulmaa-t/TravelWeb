// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { CountryController } from "../../../controllers/CountryController";
import dbConnect from "../../../utils/db";

export default async function countryHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const controller = new CountryController();
    await dbConnect();
    switch (req.method) {
        case "GET":
            return controller.getCountries(req, res);
        case "POST":
            return controller.registerCountry(req, res);
        default:
            return res.status(404).json({
                message: "api not found",
            });
    }
}
