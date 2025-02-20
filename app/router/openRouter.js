import { Router } from "express";
import openController from "../controller/openController.js";
const router = new Router();

router.post("/", openController.createOpen);
router.get("/", openController.getAllOpens);
router.put("/", openController.editOpen);

export default router;

{
  const swag = {
    name: "открытые",
    title: "Открытые подшипники",
    h1: "Открытые подшипники РВЗ",
    description: "Открытые подшипники - описание",
    url: "otkrytye",
  };
}
