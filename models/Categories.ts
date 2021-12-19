import { model, Model, Schema } from "mongoose";
import ICategories from "../interfaces/ICategories";

const categorySchema = new Schema(
    {
        category: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const Category: Model<ICategories> = model<ICategories>(
    "category",
    categorySchema
);
export default Category;
