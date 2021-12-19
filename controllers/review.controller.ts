import { NextFunction, Response, Request } from "express";
import IProducts from "../interfaces/IProducts";
import Product from "../models/Products";
import Review from "../models/Reviews";
import courier from "./courier.controller";

class review {
    static async listReview(req: Request, res: Response) {
        const result = await Review.find();
        res.status(200).json({
            message: "Review berhasil ditampilkan!",
            data: result,
        });
    }

    static async createReview(req: Request, res: Response) {
        const { idProduct } = req.params;
        const { name, comment, rating } = req.body;
        const result = await Review.create({
            name,
            comment,
            rating,
        });
        const resultUpdate = await Product.findByIdAndUpdate(
            idProduct,
            {
                $push: {
                    review: result.id,
                },
            },
            {
                new: true,
            }
        )
            .populate<IProducts>("category")
            .populate<IProducts>("courier")
            .populate<IProducts>("review");
        res.status(200).json({
            message: "Review berhasil ditambahkan!",
            data: result,
            result: resultUpdate,
        });
    }
}

export default review;
