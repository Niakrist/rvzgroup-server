import { Router } from "express";

import bearingRouter from "./bearingRouter.js";
import bodyRouter from "./bodyRouter.js";
import formaRouter from "./formaRouter.js";
import loadRouter from "./loadRouter.js";
import openRouter from "./openRouter.js";
import rowRouter from "./rowRouter.js";
import standartRouter from "./standartRouter.js";

const router = new Router();

router.use("/bearing", bearingRouter);
router.use("/body", bodyRouter);
router.use("/forma", formaRouter);
router.use("/load", loadRouter);
router.use("/open", openRouter);
router.use("/row", rowRouter);
router.use("/standart", standartRouter);

export default router;
{
  const swag = {
    name: "шариковые",
    title: "Шариковые подшипники",
    h1: "Шариковые подшипники РВЗ",
    description: "Шариковые подшипники - описание",
    url: "sharikovye",
  };
}
