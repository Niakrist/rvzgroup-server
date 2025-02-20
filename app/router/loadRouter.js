import { Router } from "express";
import loadController from "../controller/loadController.js";
const router = new Router();

router.post("/", loadController.createLoad);
router.get("/", loadController.getAllLoads);
router.put("/", loadController.editLoad);

export default router;

{
  const swag = {
    name: "радиально-упорные",
    title: "Радиально-упорные подшипники",
    h1: "Радиально-упорные подшипники РВЗ",
    description: "Радиально-упорные подшипники - описание",
    url: "radialno-upornye",
  };
}
