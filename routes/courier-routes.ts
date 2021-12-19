import { Router } from "express";
import courier from "../controllers/courier.controller";

class courierRoutes {
    courierRoutes: Router;
    constructor() {
        this.courierRoutes = Router();
        this.courierroutes();
    }

    courierroutes = () => {
        this.courierRoutes.get("/", courier.listCourier);
        this.courierRoutes.post("/create", courier.createCourier);
    };
}

export default new courierRoutes().courierRoutes;
