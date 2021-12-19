import { NextFunction, Response, Request } from "express";
import User from "../models/Users";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class users {
    static async signin(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const result = await User.findOne({
                email: email?.toLowerCase(),
            });
            if (!result) {
                res.status(404).json({ message: "Email not found!" });
            }
            const passwordIsValid = bcrypt.compareSync(
                password,
                result!.password
            );
            if (!passwordIsValid) {
                res.status(404).json({ message: "Password wrong!" });
            }
            const token = jwt.sign(
                {
                    id: result!.id,
                    username: result!.username,
                    role: result!.role,
                },
                "abogoboga",
                { expiresIn: 86400 }
            );
            res.status(200).json({
                token: token,
                user: {
                    id: result!.id,
                    username: result!.username,
                    role: result!.role,
                },
            });
        } catch (error) {
            console.log(error);
        }
    }

    static async signup(req: Request, res: Response) {
        const { username, email, password, role } = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const result = await User.create({
            username: username,
            email: email.toLowerCase(),
            password: hashedPassword,
            role: role,
        });
        res.status(200).json({
            data: result,
        });
    }
}

export default users;
