import { Router } from "express";
import bodyController from "../controller/bodyController.js";
const router = new Router();

router.post("/", bodyController.createBody);
router.get("/", bodyController.getAllBody);
router.put("/", bodyController.editBody);

export default router;
