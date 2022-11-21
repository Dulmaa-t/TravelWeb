import Country from "../models/Country";
import CustomException from "../utils/CustomException";
import { ICountry } from "../dto/Tour";

export class CountryService {
    public getCountries = async () => {
        try {
            const countries = await Country.find();
            return countries;
        } catch (err) {
            console.log(err);
            throw new CustomException(500, "query error!");
        }
    };

    public resgiterCountry = async (formData: ICountry) => {
        try {
            const country = await new Country(formData).save();
            return country;
        } catch (err) {
            console.log(err);
            if (err instanceof CustomException) {
                throw new CustomException(err.status, err.message);
            }
        }
    };

    public getById = async (id: string) => {
        try {
            const country = await Country.findById(id);
            return country;
        } catch (err) {
            console.log(err);
            if (err instanceof CustomException) {
                throw new CustomException(err.status, err.message);
            }
        }
    };
}
