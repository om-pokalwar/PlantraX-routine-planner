import { Router } from "express";
import { getAllUsers, signup, login } from "../handlers/user-handlers.js";
import { validate, signupValidator, loginValidator } from "../libs/data-validators.js";
/*
import {
  getAllUsers,
  userLogin,
  userLogout,
  userSignup,
  verifyUser,
} from "../controllers/user-controllers.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validators.js";
import { verifyToken } from "../utils/token-manager.js";
*/
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/signup", validate(signupValidator), signup);
userRouter.post("/login", validate(loginValidator), login);
/*
userRouter.post("/signup", validate(signupValidator), userSignup);
userRouter.post("/login", validate(loginValidator), userLogin);
userRouter.get("/auth-status", verifyToken, verifyUser);
userRouter.get("/logout", verifyToken, userLogout);
*/
export default userRouter;
//# sourceMappingURL=user-router.js.map