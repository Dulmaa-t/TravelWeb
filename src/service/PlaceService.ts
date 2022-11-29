import Place from "../models/Place";
import CustomException from "../utils/CustomException";
import { IPlace } from "../dto/Tour";

export class PlaceService {
    public getPlaces = async () => {
        try {
            const places = await Place.find();
            return places;
        } catch (err) {
            console.log(err);
            throw new CustomException(500, "query error!");
        }
    }

    public resgiterPlace = async (formData: IPlace) => {
        try {
            const place = await new Place(formData).save();
            return place;
        } catch (err) {
            console.log(err);
            if (err instanceof CustomException) {
                throw new CustomException(err.status, err.message);
            }
        }
    };

}