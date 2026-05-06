import { Router } from "express";
import products from "../controllers/product.controller";

/**
 * @swagger
 * /api/product:
 *   get:
 *     tags: [Products]
 *     summary: Get all products
 *     description: Retrieve a list of all products with populated category, courier, and reviews
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     tags: [Products]
 *     summary: Get product by ID
 *     description: Retrieve a specific product by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Product ID
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Product details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */

/**
 * @swagger
 * /api/product/create:
 *   post:
 *     tags: [Products]
 *     summary: Create a new product
 *     description: Add a new product to the database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 */

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
