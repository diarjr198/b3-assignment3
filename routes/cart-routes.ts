import { Router } from "express";
import carts from "../controllers/cart.controller";

class cartRoutes {
    cartRoutes: Router;
    constructor() {
        this.cartRoutes = Router();
        this.cartroutes();
    }

    cartroutes = () => {
        this.cartRoutes.post("/create", carts.cartCreate);
        this.cartRoutes.get("/user/:idUser", carts.getListCartUser);
        this.cartRoutes.delete("/delete/:id", carts.deleteCartUser);
    };
}

export default new cartRoutes().cartRoutes;
