import { Router } from "express";
import orders from "../controllers/order.controller";

/**
 * @swagger
 * /api/order:
 *   get:
 *     tags: [Orders]
 *     summary: Get all orders
 *     description: Retrieve a list of all orders
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     tags: [Orders]
 *     summary: Get order by ID
 *     description: Retrieve a specific order by its ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *         example: 507f1f77bcf86cd799439014
 *     responses:
 *       200:
 *         description: Order details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/order/user/{id}:
 *   get:
 *     tags: [Orders]
 *     summary: Get orders by user ID
 *     description: Retrieve all orders for a specific user
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *         example: 507f1f77bcf86cd799439012
 *     responses:
 *       200:
 *         description: List of user's orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/order/create:
 *   post:
 *     tags: [Orders]
 *     summary: Create a new order
 *     description: Create a new order for a product
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/order/update/{id}:
 *   put:
 *     tags: [Orders]
 *     summary: Update order address
 *     description: Update order receiver name, address, and status
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *         example: 507f1f77bcf86cd799439014
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               receiveName:
 *                 type: string
 *                 example: John Doe
 *               address:
 *                 type: string
 *                 example: Jl. Sudirman No. 123, Jakarta
 *               status:
 *                 type: string
 *                 example: processing
 *     responses:
 *       200:
 *         description: Order updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/order/updateStatus/{id}:
 *   put:
 *     tags: [Orders]
 *     summary: Update order status
 *     description: Update only the status of an order
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Order ID
 *         example: 507f1f77bcf86cd799439014
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 example: shipped
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

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
