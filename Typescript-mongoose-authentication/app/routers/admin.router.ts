import { Router } from "express";
import * as userService from "../services/user.service";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";


const router = Router();

router.post("/register", async (req, res) => {
    try {
        // Get user input
        const { name, isAdmin, email, password } = req.body;

        // Validate user input
        if (!(email && password && name && isAdmin)) {
            res.status(400).send("All input is required");
        }

        // Validate if user already exist in our database
        const oldUser = await userService.getUserByEmail(email);

        if (oldUser) {
            return res.status(409).send("User Already Exist. Please Login");
        }

        const user = await userService.createUser(req.body);

        return res.status(201).json(`User successfully registered id: ${user._id}`);
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

router.post("/login", async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await userService.getUserByEmail(email);

        if (user && (await bcrypt.compare(password, user.password!))) {
            // Create token
            const token = jwt.sign(
                { user_id: user._id, email, role: user.role },
                process.env.TOKEN_KEY!,
                {
                    expiresIn: "2h",
                }
            );

            return res.status(200).json({
                token
            });
        }
        return res.status(400).send("Invalid Credentials");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
});


export const adminRouter = router;