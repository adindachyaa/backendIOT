import express from "express";
import { receiveScan } from "../controllers/espController.js";

const router = express.Router();

router.post("/scan", receiveScan);

export default router;
