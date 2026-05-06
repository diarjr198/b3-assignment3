import { Router } from "express";
import carts from "../controllers/cart.controller";

/**
 * @swagger
 * /api/cart/create:
 *   post:
 *     tags: [Cart]
 *     summary: Add product to cart
 *     description: Add a product to user's shopping cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       200:
 *         description: Product added to cart successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 *                 user:
 *                   type: object
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/cart/user/{idUser}:
 *   get:
 *     tags: [Cart]
 *     summary: Get user's cart items
 *     description: Retrieve all cart items for a specific user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *         example: 507f1f77bcf86cd799439012
 *     responses:
 *       200:
 *         description: List of cart items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   product:
 *                     $ref: '#/components/schemas/Product'
 *                   user:
 *                     type: string
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/cart/delete/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart item
 *     description: Remove a specific item from the cart
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cart item ID
 *         example: 507f1f77bcf86cd799439013
 *     responses:
 *       200:
 *         description: Cart item deleted successfully
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

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
