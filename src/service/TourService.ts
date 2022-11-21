import Tour from "../models/Tour";
import CustomException from "../utils/CustomException";
import { ITour } from "../dto/Tour";

export class TourService {
    public getTours = async () => {
        try {
            const tours = await Tour.find();
            return tours;
        } catch (err) {
            console.log(err);
            throw new CustomException(500, "query error!");
        }
    };

    public resgiterTour = async (formData: ITour) => {
        try {
            const tour = await new Tour(formData).save();
            return tour;
        } catch (err) {
            console.log(err);
            if(err instanceof CustomException){
                throw new CustomException(err.status, err.message);
            }
        }
    };
}