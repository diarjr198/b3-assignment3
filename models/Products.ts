import { model, Model, Schema } from "mongoose";
import IProduct from "../interfaces/IProducts";

const productSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        imagePath: { type: String, required: true },
        stock: { type: Number, required: true },
        price: { type: Number, required: true },
        weight: { type: Number, required: true },
        rating: {
            type: Number,
            default: 0,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "category",
        },
        courier: {
            type: Schema.Types.ObjectId,
            ref: "courier",
        },
        review: [
            {
                type: Schema.Types.ObjectId,
                ref: "review",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Product: Model<IProduct> = model<IProduct>("product", productSchema);
export default Product;
