import { TourService } from "../service/TourService";
import { CountryService } from "../service/CountryService";
import { NextApiRequest, NextApiResponse } from "next";
import CustomException from "../utils/CustomException";

export class TourController {
    private tourService: TourService;
    private countryService: CountryService;
    constructor() {
        this.tourService = new TourService();
        this.countryService = new CountryService();
    }

    public async getTours(req: NextApiRequest, res: NextApiResponse) {
        try {
            const tours = await this.tourService.getTours();
            // console.log(tours);
            res.status(200).json({
                result: tours,
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

    public async registerTour(req: NextApiRequest, res: NextApiResponse) {
        try {
            const tour = await this.tourService.resgiterTour(req.body);
            const country = await this.countryService.getById(req.body.country);
            country?.addTour(tour?._id as string);
            await country?.save();
            res.status(201).json({
                result: tour,
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

    public async deleteTour(req: NextApiRequest, res: NextApiResponse) {
        try {
            const tour = await this.tourService.deleteTour(req.body.id);
            res.status(201).json({
                result: {
                    message: 'done!'
                },
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
