import { Router } from "express";
import formaController from "../controller/formaController.js";
const router = new Router();

router.post("/", formaController.createForma);
router.get("/", formaController.getAllForm);
router.put("/", formaController.editForma);

export default router;

{
  const swag = {
    name: "самоустанавливающиеся",
    title: "Самоустанавливающиеся подшипники",
    h1: "Самоустанавливающиеся подшипники РВЗ",
    description: "Самоустанавливающиеся подшипники - описание",
    url: "samoustanavlivayuschiesya",
  };
}
