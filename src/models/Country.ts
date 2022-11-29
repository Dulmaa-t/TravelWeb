import mongoose, { Schema, model, Model, Types } from "mongoose";
import { ICountry } from "../dto/Tour";

interface ICountryMethods {
    addTour(id: string): void;
}

type CountryModel = Model<ICountry, {}, ICountryMethods>;

const CountrySchema: Schema = new Schema<
    ICountry,
    CountryModel,
    ICountryMethods
>({
    name: {
        type: String,
        required: true,
    },
    travels: [
        {
            type: Types.ObjectId,
            ref: "Tour",
            required: true,
        },
    ],    
    places: [
        {
            type: Types.ObjectId,
            ref: "Place",
            required: true,
        },
    ],
});

CountrySchema.methods.addTour = function (id: string) {
    this.travels.push(id);
};

CountrySchema.methods.addPlace = function (id: string) {
    this.places.push(id);
};

export default mongoose.models.Country || model<ICountry, CountryModel>("Country", CountrySchema);

// [fn, {isloading, error}] = use;
