import { Router } from "express";
import category from "../controllers/category.controller";

/**
 * @swagger
 * /api/category:
 *   get:
 *     tags: [Categories]
 *     summary: Get all categories
 *     description: Retrieve a list of all product categories
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Category berhasil ditampilkan!
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Category'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/category/create:
 *   post:
 *     tags: [Categories]
 *     summary: Create a new category
 *     description: Add a new product category
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                   example: Category berhasil dibuat!
 *                 data:
 *                   $ref: '#/components/schemas/Category'
 *       403:
 *         description: No token provided
 *       401:
 *         description: Unauthorized
 */

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
