import { Router } from "express";
import standartController from "../controller/standartController.js";
const router = new Router();

router.post("/", standartController.createStandart);
router.get("/", standartController.getAllStandarts);
router.put("/", standartController.editStandart);

export default router;

{
  const swag = {
    name: "гост",
    title: "Подшипники ГОСТ 520-2011",
    h1: "Подшипники ГОСТ 520-2011 РВЗ",
    description: "Подшипники ГОСТ 520-2011 РВЗ - описание",
    url: "/gost",
  };
}
