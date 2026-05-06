import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-Commerce API Documentation",
            version: "1.0.0",
            description: "REST API documentation for E-Commerce Backend Application",
            contact: {
                name: "API Support",
                email: "support@ecommerce.com",
            },
        },
        servers: [
            {
                url: "http://localhost:4000",
                description: "Development server",
            },
            {
                url: "https://assignment3-fe.herokuapp.com",
                description: "Production server",
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "apiKey",
                    name: "x-access-token",
                    in: "header",
                    description: "JWT token for authentication",
                },
            },
            schemas: {
                User: {
                    type: "object",
                    required: ["username", "email", "password"],
                    properties: {
                        username: {
                            type: "string",
                            description: "Username of the user",
                            example: "johndoe",
                        },
                        email: {
                            type: "string",
                            format: "email",
                            description: "Email address of the user",
                            example: "johndoe@example.com",
                        },
                        password: {
                            type: "string",
                            format: "password",
                            description: "Password for the user account",
                            example: "password123",
                        },
                        role: {
                            type: "string",
                            enum: ["USER", "ADMIN"],
                            default: "USER",
                            description: "Role of the user",
                            example: "USER",
                        },
                    },
                },
                Product: {
                    type: "object",
                    required: ["title", "description", "imagePath", "stock", "price", "weight"],
                    properties: {
                        title: {
                            type: "string",
                            description: "Product title",
                            example: "Laptop Gaming ASUS ROG",
                        },
                        description: {
                            type: "string",
                            description: "Product description",
                            example: "High performance gaming laptop with RTX 3060",
                        },
                        imagePath: {
                            type: "string",
                            description: "URL or path to product image",
                            example: "https://example.com/images/laptop.jpg",
                        },
                        stock: {
                            type: "number",
                            description: "Available stock quantity",
                            example: 10,
                        },
                        price: {
                            type: "number",
                            description: "Product price",
                            example: 15000000,
                        },
                        weight: {
                            type: "number",
                            description: "Product weight in grams",
                            example: 2500,
                        },
                        rating: {
                            type: "number",
                            description: "Product rating (0-5)",
                            default: 0,
                            example: 4.5,
                        },
                        category: {
                            type: "string",
                            description: "Category ID",
                            example: "507f1f77bcf86cd799439011",
                        },
                        courier: {
                            type: "string",
                            description: "Courier ID",
                            example: "507f1f77bcf86cd799439012",
                        },
                    },
                },
                Cart: {
                    type: "object",
                    required: ["product", "user"],
                    properties: {
                        product: {
                            type: "string",
                            description: "Product ID",
                            example: "507f1f77bcf86cd799439011",
                        },
                        user: {
                            type: "string",
                            description: "User ID",
                            example: "507f1f77bcf86cd799439012",
                        },
                    },
                },
                Order: {
                    type: "object",
                    required: ["product", "user", "amount", "total"],
                    properties: {
                        product: {
                            type: "string",
                            description: "Product ID",
                            example: "507f1f77bcf86cd799439011",
                        },
                        user: {
                            type: "string",
                            description: "User ID",
                            example: "507f1f77bcf86cd799439012",
                        },
                        amount: {
                            type: "number",
                            description: "Quantity of products ordered",
                            example: 2,
                        },
                        total: {
                            type: "number",
                            description: "Total price",
                            example: 30000000,
                        },
                        nameReceive: {
                            type: "string",
                            description: "Receiver name",
                            example: "John Doe",
                        },
                        address: {
                            type: "string",
                            description: "Delivery address",
                            example: "Jl. Sudirman No. 123, Jakarta",
                        },
                        status: {
                            type: "string",
                            description: "Order status",
                            example: "pending",
                        },
                    },
                },
                Category: {
                    type: "object",
                    required: ["category"],
                    properties: {
                        category: {
                            type: "string",
                            description: "Category name",
                            example: "Electronics",
                        },
                    },
                },
                Courier: {
                    type: "object",
                    required: ["courier"],
                    properties: {
                        courier: {
                            type: "string",
                            description: "Courier name",
                            example: "JNE",
                        },
                    },
                },
                Review: {
                    type: "object",
                    required: ["name", "rating"],
                    properties: {
                        name: {
                            type: "string",
                            description: "Reviewer name",
                            example: "John Doe",
                        },
                        comment: {
                            type: "string",
                            description: "Review comment",
                            example: "Great product! Highly recommended.",
                        },
                        rating: {
                            type: "number",
                            minimum: 1,
                            maximum: 5,
                            description: "Rating (1-5)",
                            example: 5,
                        },
                    },
                },
                Error: {
                    type: "object",
                    properties: {
                        message: {
                            type: "string",
                            description: "Error message",
                        },
                    },
                },
            },
        },
        tags: [
            {
                name: "Authentication",
                description: "User authentication endpoints",
            },
            {
                name: "Products",
                description: "Product management endpoints",
            },
            {
                name: "Cart",
                description: "Shopping cart endpoints",
            },
            {
                name: "Orders",
                description: "Order management endpoints",
            },
            {
                name: "Categories",
                description: "Category management endpoints",
            },
            {
                name: "Couriers",
                description: "Courier management endpoints",
            },
            {
                name: "Reviews",
                description: "Product review endpoints",
            },
        ],
    },
    apis: ["./routes/*.ts", "./controllers/*.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
