import { Router } from "express";
import review from "../controllers/review.controller";

class reviewRoutes {
    reviewRoutes: Router;
    constructor() {
        this.reviewRoutes = Router();
        this.reviewroutes();
    }

    reviewroutes = () => {
        this.reviewRoutes.get("/", review.listReview);
        this.reviewRoutes.post("/create/idProduct", review.createReview);
    };
}

export default new reviewRoutes().reviewRoutes;
