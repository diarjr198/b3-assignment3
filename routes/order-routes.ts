import { Router } from "express";
import orders from "../controllers/order.controller";

class orderRoutes {
    orderRoutes: Router;
    constructor() {
        this.orderRoutes = Router();
        this.orderroutes();
    }

    orderroutes = () => {
        this.orderRoutes.get("/", orders.listOrderAll);
        this.orderRoutes.get("/:id", orders.listOrderSpecific);
        this.orderRoutes.get("/user/:id", orders.listOrderUser);
        this.orderRoutes.post("/create", orders.createOrder);
        this.orderRoutes.put("/update/:id", orders.updateOrderAddress);
        this.orderRoutes.put("/updateStatus/:id", orders.updateOrderStatus);
    };
}

export default new orderRoutes().orderRoutes;
