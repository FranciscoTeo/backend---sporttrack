import { Router } from "express";
import { getSubscriptions, addSubscription } from "../controllers/subscriptionsController";

const router = Router();

router.get("/", getSubscriptions);
router.post("/", addSubscription);

export default router;