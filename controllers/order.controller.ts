import { Response, Request } from "express";
import ICarts from "../interfaces/ICarts";
import IOrders from "../interfaces/IOrders";
import Order from "../models/Orders";

class orders {
    static async listOrderAll(req: Request, res: Response) {
        const result = await Order.find()
            .populate<ICarts>("product")
            .populate<IOrders>("user");
        res.status(200).json(result);
    }

    static async listOrderSpecific(req: Request, res: Response) {
        const { id } = req.params;
        const result = await Order.findById(id)
            .populate<ICarts>("product")
            .populate<IOrders>("user");
        res.status(200).json(result);
    }

    static async listOrderUser(req: Request, res: Response) {
        const { id } = req.params;
        const result = await Order.find({ user: id })
            .populate<IOrders>("product")
            .populate<IOrders>("user");
        res.status(200).json(result);
    }

    static async createOrder(req: Request, res: Response) {
        const { product, user, amount, total, nameReceive, address, status } =
            req.body;
        const create = await Order.create({
            product,
            user,
            amount,
            total,
            nameReceive,
            address,
            status,
        });
        const result = await Order.findById(create.id)
            .populate<IOrders>("product")
            .populate<IOrders>("user");
        res.status(200).json(result);
    }

    static async updateOrderAddress(req: Request, res: Response) {
        const { id } = req.params;
        const { receiveName, address, status } = req.body;
        const result = await Order.findByIdAndUpdate(
            id,
            {
                nameReceive: receiveName,
                address: address,
                status: status,
            },
            { new: true }
        );
        res.status(200).json(result);
    }

    static async updateOrderStatus(req: Request, res: Response) {
        const { id } = req.params;
        const { status } = req.body;
        const result = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        );
        res.status(200).json(result);
    }
}

export default orders;
