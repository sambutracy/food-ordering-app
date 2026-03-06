import express from "express";
import AdminController from "../controllers/AdminController";
import { jwtCheck, jwtParse, requireAppUser, requireRole } from "../middleware/auth";

const router = express.Router();

router.get(
  "/summary",
  jwtCheck,
  jwtParse,
  requireAppUser,
  requireRole("admin"),
  AdminController.getAdminSummary
);

export default router;
