import { Request, Response, Router } from "express";
import userController from "../controllers/user.controller";
import cartRoutes from "./cart-routes";
import categoryRoutes from "./category-routes";
import courierRoutes from "./courier-routes";
import orderRoutes from "./order-routes";
import productRoutes from "./product-routes";
import reviewRoutes from "./review-routes";
import authJwt from "../middlewares/authJwt";
import verifySignup from "../middlewares/verifySignup";

class Routes {
    router: Router;
    constructor() {
        this.router = Router();
        this.routes();
    }
    routes = () => {
        this.router.get("/", (req: Request, res: Response) => {
            res.send("test");
        });
        this.router.post("/auth/signup", [verifySignup], userController.signup);
        this.router.post("/auth/signin", userController.signin);
        this.router.use("/product", productRoutes);
        this.router.use([authJwt.verifyToken, authJwt.isUser]);
        this.router.use("/cart", cartRoutes);
        this.router.use("/category", categoryRoutes);
        this.router.use("/courier", courierRoutes);
        this.router.use("/review", reviewRoutes);
        this.router.use("/order", orderRoutes);
    };
}

export default new Routes().router;
