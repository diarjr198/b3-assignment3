import { model, Model, Schema } from "mongoose";
import ICouriers from "../interfaces/ICouriers";

const courierSchema = new Schema(
    {
        courier: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

const Courier: Model<ICouriers> = model<ICouriers>("courier", courierSchema);
export default Courier;
