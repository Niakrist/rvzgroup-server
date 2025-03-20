import { Router } from "express";
import bearingController from "../controller/bearingController.js";
const router = new Router();

// router.post("/", bearingController.createBearing);
router.post("/", bearingController.getAllBearing);
router.get("/", bearingController.getBearingByQuery);
router.get("/:url", bearingController.getOneBearing);
router.put("/", bearingController.editOneBearing);
router.delete("/", bearingController.deleteOneBearing);

export default router;

{
  const swag = {
    id1c: "п1",
    id1cRvz: "п2",
    price: 10,
    priceRvz: 20,
    quantity: 100,
    quantityRvz: 5,
    name: "106",
    url: "/gost-106",
    title: "Подшипник 106",
    h1: "Подшипник РВЗ 106",
    description: "Подшипник РВЗ 106 - описание",
    brand: "РВЗ",
    analog: "6006",
    analogUrl: "/iso-6006",
    images: "",
    content: "Подшипник РВЗ 106 - описание текст",
    innerDiameter: 10,
    outerDiameter: 15,
    width: 20,
    newBearing: false,
    stockBearing: 500,
    popularBearing: true,
    standartId: "1",
    bodyId: "1",
    formaId: "1",
    loadId: "1",
    rowId: "1",
    openId: "1",
  };
}
