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

/**
 * @swagger
 * /api/auth/signup:
 *   post:
 *     tags: [Authentication]
 *     summary: Register a new user
 *     description: Create a new user account
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     username:
 *                       type: string
 *                     email:
 *                       type: string
 *                     role:
 *                       type: string
 *       400:
 *         description: Username or email already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

/**
 * @swagger
 * /api/auth/signin:
 *   post:
 *     tags: [Authentication]
 *     summary: Login user
 *     description: Authenticate user and get JWT token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     username:
 *                       type: string
 *                     role:
 *                       type: string
 *       404:
 *         description: Email not found or password wrong
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

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
