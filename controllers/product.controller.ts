import { Response, Request } from "express";
import IProducts from "../interfaces/IProducts";
import Product from "../models/Products";

class products {
    static async getAllProduct(req: Request, res: Response) {
        const result = await Product.find()
            .populate<IProducts>("category")
            .populate<IProducts>("courier")
            .populate<IProducts>("review");
        res.status(200).json(result);
    }

    static async getProductSpecific(req: Request, res: Response) {
        const { id } = req.params;
        const result = await Product.findById(id)
            .populate<IProducts>("category")
            .populate<IProducts>("courier")
            .populate<IProducts>("review");
        res.status(200).json(result);
    }

    static async createProduct(req: Request, res: Response) {
        const {
            title,
            description,
            imagePath,
            stock,
            price,
            weight,
            category,
            courier,
        } = req.body;
        const create = await Product.create({
            title: title,
            description: description,
            imagePath: imagePath,
            stock: stock,
            price: price,
            weight: weight,
            category: category,
            courier: courier,
        });
        const result = await Product.findById(create.id)
            .populate<IProducts>("category")
            .populate<IProducts>("courier");
        res.status(200).json({
            success: true,
            message: "Product berhasil dibuat!",
            data: result,
        });
    }
}

export default products;
