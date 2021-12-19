import { NextFunction, Response, Request } from "express";
import Category from "../models/Categories";

class category {
    static async listCategory(req: Request, res: Response) {
        const result = await Category.find();
        res.status(200).json({
            message: "Category berhasil ditampilkan!",
            data: result,
        });
    }

    static async createCategory(req: Request, res: Response) {
        const { category } = req.body;
        const result = await Category.create({
            category,
        });
        res.status(200).json({
            success: true,
            message: "Category berhasil dibuat!",
            data: result,
        });
    }
}

export default category;
