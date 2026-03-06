import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse, requireAppUser } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

// /api/my/user
router.get("/", jwtCheck, jwtParse, requireAppUser, MyUserController.getCurrentUser);
router.post("/", jwtCheck, jwtParse, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  requireAppUser,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;
