import { createPortfolio } from "../controllers/portfolioControllers.mjs";
import { getportfolio } from "../controllers/portfolioControllers.mjs";
import express from "express";
const router = express.Router();
router.post("/", createPortfolio);
router.get("/", getportfolio);
export default router;