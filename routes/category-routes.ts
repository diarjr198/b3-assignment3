import { Router } from "express";
import category from "../controllers/category.controller";

class categoryRoutes {
    categoryRoutes: Router;
    constructor() {
        this.categoryRoutes = Router();
        this.categoryroutes();
    }

    categoryroutes = () => {
        this.categoryRoutes.get("/", category.listCategory);
        this.categoryRoutes.post("/create", category.createCategory);
    };
}

export default new categoryRoutes().categoryRoutes;
