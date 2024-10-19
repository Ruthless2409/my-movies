import express from "express";

//controllers
import { createUser, loginUser 
    ,logoutCurrentUser
} from "../controllers/userController.js";
//middlewares
import { authenticate, authoriseAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();


router.route("/").post(createUser);
router.route("/auth").post(loginUser);
router.route("/logout").post(logoutCurrentUser);
export default router;
