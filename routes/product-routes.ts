import { Router } from "express";
import products from "../controllers/product.controller";

class productRoutes {
    productRoutes: Router;
    constructor() {
        this.productRoutes = Router();
        this.productroutes();
    }

    productroutes = () => {
        this.productRoutes.get("/", products.getAllProduct);
        this.productRoutes.get("/:id", products.getProductSpecific);
        this.productRoutes.post("/create", products.createProduct);
    };
}

export default new productRoutes().productRoutes;
