import { Router } from "express";
import rowController from "../controller/rowController.js";
const router = new Router();

router.post("/", rowController.createRow);
router.get("/", rowController.getAllRows);
router.put("/", rowController.editRow);

export default router;

{
  const swag = {
    name: "однорядные",
    title: "Однорядные подшипники",
    h1: "Однорядные подшипники РВЗ",
    description: "Однорядные подшипники - описание",
    url: "/odnoryadnye",
  };
}
