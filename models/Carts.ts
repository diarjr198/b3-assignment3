import { Model, model, Schema } from "mongoose";
import ICarts from "../interfaces/ICarts";

const cartSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "product",
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Cart: Model<ICarts> = model<ICarts>("cart", cartSchema);
export default Cart;
