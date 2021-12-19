import { NextFunction, Response, Request } from "express";
import User from "../models/Users";

const checkDuplicateUsernameOrEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const checkUsername = await User.findOne({ username: req.body.username });
    if (checkUsername) {
        res.status(400).send({
            message: "Failed! Username is already in use!",
        });
        return;
    }

    const checkEmail = await User.findOne({ email: req.body.email });
    if (checkEmail) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
    }

    next();
};

export default checkDuplicateUsernameOrEmail;
