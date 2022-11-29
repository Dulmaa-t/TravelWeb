import { PlaceService } from "../service/PlaceService";
import { CountryService } from "../service/CountryService";
import { NextApiRequest, NextApiResponse } from "next";
import CustomException from "../utils/CustomException";

export class PlaceController {
    private placeService: PlaceService;
    private countryService: CountryService;
    constructor() {
        this.placeService = new PlaceService();
        this.countryService = new CountryService();
    }

    public async getPlaces(req: NextApiRequest, res: NextApiResponse) {
        try {
            const places = await this.placeService.getPlaces();
            // console.log(tours);
            res.status(200).json({
                result: places,
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

    public async registerPlace(req: NextApiRequest, res: NextApiResponse) {
        try {
            const place = await this.placeService.resgiterPlace(req.body);
            const country = await this.countryService.getById(req.body.country);
            country?.addPlace(place?._id as string);
            await country?.save();
            res.status(201).json({
                result: place,
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