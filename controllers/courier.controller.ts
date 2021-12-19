import { NextFunction, Response, Request } from "express";
import Courier from "../models/Couriers";

class courier {
    static async listCourier(req: Request, res: Response) {
        const result = await Courier.find();
        res.status(200).json({
            message: "Courier berhasil ditampilkan!",
            data: result,
        });
    }

    static async createCourier(req: Request, res: Response) {
        const { courier } = req.body;
        const result = await Courier.create({
            courier,
        });
        res.status(200).json({
            success: true,
            message: "Courier berhasil dibuat!",
            data: result,
        });
    }
}

export default courier;
