import { v4 } from "uuid";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

import { Bearing, BearingInfo } from "../models/models.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

class BearingController {
  async createBearing(req, res) {
    try {
      let {
        id1c,
        id1cRvz,
        price,
        priceRvz,
        quantity,
        quantityRvz,
        name,
        url,
        title,
        h1,
        description,
        brand,
        standart,
        analog,
        analogUrl,
        content,
        innerDiameter,
        outerDiameter,
        width,
        newBearing,
        stockBearing,
        popularBearing,
        standartId,
        bodyId,
        formaId,
        loadId,
        rowId,
        openId,
        info,
      } = req.body;

      const { images } = req.files;

      let fileName = v4() + ".jpg";
      const bearing = await Bearing.create({
        id1c,
        id1cRvz,
        price,
        priceRvz,
        quantity,
        quantityRvz,
        name,
        url,
        title,
        h1,
        description,
        brand,
        standart,
        analog,
        analogUrl,
        content,
        innerDiameter,
        outerDiameter,
        width,
        newBearing,
        stockBearing,
        popularBearing,
        standartId,
        bodyId,
        formaId,
        loadId,
        rowId,
        openId,
        images: fileName,
      });

      if (info) {
        info = JSON.parse(info);
        await Promise.all(
          info.map(async (i) => {
            return await BearingInfo.create({
              title: i.title,
              description: i.description,
              deviceId: bearing.id,
            });
          })
        );
      }
      images.mv(path.resolve(__dirname, "..", "static", fileName));
      return res.json(bearing);
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        const uniqueField = error.parent.detail;
        return res.json({
          message: `Поле "${uniqueField}" должно быть уникальным. Указанное значение уже существует.`,
        });
      } else {
        console.log(error);
        return res.status(500).json({
          message: "Произошла ошибка при создании записи",
          error: error.message,
        });
      }
    }
  }
  async getAllBearing(req, res) {
    try {
      let { standartId, bodyId, formaId, loadId, rowId, openId, limit, page } =
        req.query;

      page = page || 1;
      limit = limit || 16;

      let offset = page * limit - limit;

      const whereClause = {};

      if (standartId) {
        whereClause.standartId = standartId;
      }
      if (bodyId) {
        whereClause.bodyId = bodyId;
      }
      if (formaId) {
        whereClause.formaId = formaId;
      }
      if (loadId) {
        whereClause.loadId = loadId;
      }
      if (rowId) {
        whereClause.rowId = rowId;
      }
      if (openId) {
        whereClause.openId = openId;
      }

      const bearings = await Bearing.findAndCountAll({
        where: whereClause,
        limit,
        offset,
      });

      return res.json(bearings);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Ошибка при поиске устройств" });
    }
  }
  async getOneBearing(req, res) {}
  async editOneBearing(req, res) {}
  async deleteOneBearing(req, res) {
    try {
      const { id } = req.body;
      const bearing = await Bearing.destroy({ where: { id } });

      return res.json(bearing);
    } catch (error) {
      console.log(error);

      return res
        .status(500)
        .json({ message: "Ошибка при удалении подшипника!" });
    }
  }
}

export default new BearingController();
