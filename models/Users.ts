import { model, Model, Schema } from "mongoose";
import IUsers from "../interfaces/IUsers";

const userSchema = new Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User: Model<IUsers> = model<IUsers>("user", userSchema);
export default User;
