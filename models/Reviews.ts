import { model, Model, Schema } from "mongoose";
import IReviews from "../interfaces/IReviews";

const reviewSchema = new Schema(
    {
        name: { type: String, required: true },
        comment: String,
        rating: { type: Number, min: 1, max: 5, required: true },
    },
    {
        versionKey: false,
    }
);

const Review: Model<IReviews> = model<IReviews>("review", reviewSchema);
export default Review;
