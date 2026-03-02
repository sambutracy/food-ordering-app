import express from "express";
import { jwtCheck, jwtParse, requireAppUser } from "../middleware/auth";
import OrderController from "../controllers/OrderController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, requireAppUser, OrderController.getMyOrders);

router.post(
  "/checkout/create-checkout-session",
  jwtCheck,
  jwtParse,
  requireAppUser,
  OrderController.createCheckoutSession
);

router.post("/checkout/webhook", OrderController.stripeWebhookHandler);

export default router;