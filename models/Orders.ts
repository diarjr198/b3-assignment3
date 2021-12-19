import { model, Model, Schema } from "mongoose";
import IOrders from "../interfaces/IOrders";

const orderSchema = new Schema(
    {
        product: { type: Schema.Types.ObjectId, ref: "product" },
        user: { type: Schema.Types.ObjectId, ref: "user" },
        amount: { type: Number, required: true },
        total: { type: Number, required: true },
        nameReceive: { type: String, default: "null" },
        address: { type: String, default: "null" },
        status: { type: String, default: "null" },
    },
    {
        versionKey: false,
    }
);

const Order: Model<IOrders> = model<IOrders>("order", orderSchema);
export default Order;
