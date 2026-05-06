import cookieParser from "cookie-parser";
import express, { Application, Request, Response } from "express";
import mongoDB from "./configs/db";
import cors from "cors";
import routes from "./routes/routes";
import http from "http";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import dotenv from "dotenv";

dotenv.config();

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugin();
        this.route();
    }

    protected plugin = () => {
        const corsOrigin = process.env.CORS_ORIGIN || "*";
        const corsOptions = {
            origin: corsOrigin,
        };
        this.app.use(cors(corsOptions));
        mongoDB.connect();
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    };

    protected route = () => {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).json({ message: "OK" });
        });
        this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.app.use("/api", routes);
    };
}

const app = new App().app;
const port = process.env.PORT || 4000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Starting on http://localhost:${port}`);
});

// app.listen(port, () => {
//     console.log(`Starting on http://localhost:${port}`);
// });
