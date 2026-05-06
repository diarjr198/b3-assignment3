import { Router } from "express";
import courier from "../controllers/courier.controller";

/**
 * @swagger
 * /api/courier:
 *   get:
 *     tags: [Couriers]
 *     summary: Get all couriers
 *     description: Retrieve a list of all available couriers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of couriers
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Courier berhasil ditampilkan!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Courier'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/courier/create:
 *   post:
 *     tags: [Couriers]
 *     summary: Create a new courier
 *     description: Add a new courier service
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Courier'
 *     responses:
 *       200:
 *         description: Courier created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: Courier berhasil dibuat!
 *                 data:
 *                   $ref: '#/components/schemas/Courier'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

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
