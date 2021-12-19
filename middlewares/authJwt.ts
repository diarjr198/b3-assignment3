import { NextFunction, Response, Request } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";
import User from "../models/Users";

declare global {
    namespace Express {
        interface Request {
            userId?: Record<string, any>;
        }
    }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(
        token.toString(),
        "abogoboga",
        (err: VerifyErrors | null, decoded: object | undefined) => {
            if (err) {
                console.log(err);
                return res.status(401).send({ message: "Unauthorized!" });
            }
            req.userId = decoded;
            next();
        }
    );
};

const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    const result = await User.findById(userId!.id);
    if (!result) {
        res.status(401).json({ message: "User Not Found!" });
        return;
    }
    if (result.role !== "ADMIN") {
        res.status(403).send({ message: "Require Admin Role!" });
        return;
    }
    next();
    return;
};

const isUser = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req;
    const result = await User.findById(userId!.id);
    if (!result) {
        res.status(401).json({ message: "User Not Found!" });
        return;
    }
    if (result.role === "USER") {
        next();
        return;
    }
};

const authJwt = {
    verifyToken,
    isAdmin,
    isUser,
};

export default authJwt;
