import { CountryService } from "../service/CountryService";
import { NextApiRequest, NextApiResponse } from "next";
import CustomException from "../utils/CustomException";

export class CountryController {
    private countryService: CountryService;
    constructor() {
        this.countryService = new CountryService();
    }

    public async getCountries(req: NextApiRequest, res: NextApiResponse) {
        try {
            const countries = await this.countryService.getCountries();
            console.log(countries)
            res.status(200).json({
                result: countries,
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

    public async registerCountry (req: NextApiRequest, res: NextApiResponse) {
        try {
            const country = await this.countryService.resgiterCountry(req.body);
            res.status(201).json({
                result: country,
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
