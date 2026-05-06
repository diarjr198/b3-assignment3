import { Router } from "express";
import review from "../controllers/review.controller";

/**
 * @swagger
 * /api/review:
 *   get:
 *     tags: [Reviews]
 *     summary: Get all reviews
 *     description: Retrieve a list of all product reviews
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Review berhasil ditampilkan!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Review'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/review/create/{idProduct}:
 *   post:
 *     tags: [Reviews]
 *     summary: Create a review for a product
 *     description: Add a new review to a specific product
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *         example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Review'
 *     responses:
 *       200:
 *         description: Review created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Review berhasil ditambahkan!
 *                 data:
 *                   $ref: '#/components/schemas/Review'
 *                 result:
 *                   $ref: '#/components/schemas/Product'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

class reviewRoutes {
    reviewRoutes: Router;
    constructor() {
        this.reviewRoutes = Router();
        this.reviewroutes();
    }

    reviewroutes = () => {
        this.reviewRoutes.get("/", review.listReview);
        this.reviewRoutes.post("/create/:idProduct", review.createReview);
    };
}

export default new reviewRoutes().reviewRoutes;
