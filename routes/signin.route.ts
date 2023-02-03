import express from "express";
import authenticateToken from "../authToken.js";
const router = express.Router();
import { signinController } from "../controllers/signinController.js";
//lead Managemet
router.get('/',  signinController.signin);
//router.get('/:otp',  signupController.login);
export default router;