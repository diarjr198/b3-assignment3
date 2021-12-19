import { NextFunction, Response, Request } from "express";
import ICarts from "../interfaces/ICarts";
import Cart from "../models/Carts";

class carts {
    static async cartCreate(req: Request, res: Response) {
        const { product, user } = req.body;
        const result = await Cart.create({
            product,
            user,
        });
        const cart = await Cart.findById(result.id)
            .populate<ICarts>("product")
            .populate<ICarts>("user");
        res.status(200).json(cart);
        console.log("Cart Success Added!");
    }

    static async getListCartUser(req: Request, res: Response) {
        const { idUser } = req.params;
        const result = await Cart.find({ user: idUser }).populate<ICarts>(
            "product"
        );
        res.status(200).json(result);
    }

    static async deleteCartUser(req: Request, res: Response) {
        const { id } = req.params;
        console.log(id);
        const result = await Cart.findByIdAndDelete(id);
        res.status(200).json(result);
    }
}

export default carts;
