import { v4 } from "uuid";

import { fileURLToPath } from "url";
import path, { dirname } from "path";

import { Bearing, BearingInfo } from "../models/models.js";
import { Op } from "sequelize";

const __dirname = dirname(fileURLToPath(import.meta.url));

class BearingController {
  // async createBearing(req, res) {
  //   try {
  //     let {
  //       id1c,
  //       id1cRvz,
  //       price,
  //       priceRvz,
  //       quantity,
  //       quantityRvz,
  //       name,
  //       url,
  //       title,
  //       h1,
  //       description,
  //       brand,
  //       standart,
  //       analog,
  //       analogUrl,
  //       content,
  //       innerDiameter,
  //       outerDiameter,
  //       width,
  //       newBearing,
  //       stockBearing,
  //       popularBearing,
  //       standartId,
  //       bodyId,
  //       formaId,
  //       loadId,
  //       rowId,
  //       openId,
  //       info,
  //     } = req.body;

  //     const { images } = req.files;

  //     let fileName = v4() + ".jpg";
  //     const bearing = await Bearing.create({
  //       id1c,
  //       id1cRvz,
  //       price,
  //       priceRvz,
  //       quantity,
  //       quantityRvz,
  //       name,
  //       url,
  //       title,
  //       h1,
  //       description,
  //       brand,
  //       standart,
  //       analog,
  //       analogUrl,
  //       content,
  //       innerDiameter,
  //       outerDiameter,
  //       width,
  //       newBearing,
  //       stockBearing,
  //       popularBearing,
  //       standartId,
  //       bodyId,
  //       formaId,
  //       loadId,
  //       rowId,
  //       openId,
  //       images: fileName,
  //     });

  //     if (info) {
  //       info = JSON.parse(info);
  //       await Promise.all(
  //         info.map(async (i) => {
  //           return await BearingInfo.create({
  //             title: i.title,
  //             description: i.description,
  //             deviceId: bearing.id,
  //           });
  //         })
  //       );
  //     }
  //     images.mv(path.resolve(__dirname, "..", "static", fileName));
  //     return res.json(bearing);
  //   } catch (error) {
  //     if (error.name === "SequelizeUniqueConstraintError") {
  //       const uniqueField = error.parent.detail;
  //       return res.json({
  //         message: `Поле "${uniqueField}" должно быть уникальным. Указанное значение уже существует.`,
  //       });
  //     } else {
  //       console.log(error);
  //       return res.status(500).json({
  //         message: "Произошла ошибка при создании записи",
  //         error: error.message,
  //       });
  //     }
  //   }
  // }
  async getAllBearing(req, res) {
    try {
      let {
        standartId,
        bodyId,
        formaId,
        loadId,
        rowId,
        openId,
        limit,
        page,
        minInnerDiameter,
        maxInnerDiameter,
        minOuterDiameter,
        maxOuterDiameter,
        minWidth,
        maxWidth,
        minPrice,
        maxPrice,
      } = req.body;

      page = page || 1;
      limit = limit || 16;

      let offset = page * limit - limit;

      const whereClause = {};

      if (standartId) {
        const standartIds = standartId.split("|");
        whereClause.standartId = { [Op.in]: standartIds }; // Используем Op.in для множественных значений
      }
      if (bodyId) {
        const bodyIds = bodyId.split("|");
        whereClause.bodyId = { [Op.in]: bodyIds };
      }
      if (formaId) {
        const formaIds = formaId.split("|");
        whereClause.formaId = { [Op.in]: formaIds };
      }
      if (loadId) {
        const loadIds = loadId.split("|");
        whereClause.loadId = { [Op.in]: loadIds };
      }
      if (rowId) {
        const rowIds = rowId.split("|");
        whereClause.rowId = { [Op.in]: rowIds };
      }
      if (openId) {
        const openIds = openId.split("|");
        whereClause.openId = { [Op.in]: openIds };
      }

      if (minInnerDiameter || maxInnerDiameter) {
        whereClause.innerDiameter = {};
        if (minInnerDiameter && !maxInnerDiameter) {
          whereClause.innerDiameter[Op.gte] = Number(minInnerDiameter);
        } else if (!minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.lte] = Number(maxInnerDiameter);
        } else if (minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.between] = [
            Number(minInnerDiameter),
            Number(maxInnerDiameter),
          ];
        }
      }

      if (minOuterDiameter || maxOuterDiameter) {
        whereClause.outerDiameter = {};
        if (minOuterDiameter && !maxOuterDiameter) {
          whereClause.outerDiameter[Op.gte] = Number(minOuterDiameter);
        } else if (!minOuterDiameter && maxOuterDiameter) {
          whereClause.outerDiameter[Op.lte] = Number(maxOuterDiameter);
        } else if (minOuterDiameter && maxOuterDiameter) {
          whereClause.outerDiameter[Op.between] = [
            Number(minOuterDiameter),
            Number(maxOuterDiameter),
          ];
        }
      }

      if (minWidth || maxWidth) {
        whereClause.width = {};
        if (minWidth && !maxWidth) {
          whereClause.width[Op.gte] = Number(minWidth);
        } else if (!minWidth && maxWidth) {
          whereClause.width[Op.lte] = Number(maxWidth);
        } else if (minWidth && maxWidth) {
          whereClause.width[Op.between] = [Number(minWidth), Number(maxWidth)];
        }
      }

      if (minPrice || maxPrice) {
        whereClause.price = {};
        // whereClause.priceRvz = {}

        if (minPrice && !maxPrice) {
          whereClause.price[Op.gte] = Number(minPrice);
        } else if (!minPrice && maxPrice) {
          whereClause.price[Op.lte] = Number(maxPrice);
        } else if (minPrice && maxPrice) {
          whereClause.price[Op.between] = [Number(minPrice), Number(maxPrice)];
        }
      }

      const bearings = await Bearing.findAndCountAll({
        where: whereClause,
        limit,
        offset,
      });

      return res.json(bearings);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }
  async getOneBearing(req, res) {
    try {
      const { url } = req.params;
      const bearing = await Bearing.findOne({ where: { url } });

      if (!bearing) {
        return res.status(404).json({ message: `Страница ${url} не найдена` });
      }
      return res.json(bearing);
    } catch (error) {
      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }

  async getBearingByQuery(req, res) {
    try {
      let {
        standartId,
        bodyId,
        formaId,
        loadId,
        rowId,
        openId,
        limit,
        page,
        minInnerDiameter,
        maxInnerDiameter,
        minPrice,
        maxPrice,
      } = req.query;

      page = page || 1;
      limit = limit || 16;

      let offset = page * limit - limit;

      const whereClause = {};

      if (standartId) {
        const standartIds = standartId.split("|");
        whereClause.standartId = { [Op.in]: standartIds }; // Используем Op.in для множественных значений
      }
      if (bodyId) {
        const bodyIds = bodyId.split("|");
        whereClause.bodyId = { [Op.in]: bodyIds };
      }
      if (formaId) {
        const formaIds = formaId.split("|");
        whereClause.formaId = { [Op.in]: formaIds };
      }
      if (loadId) {
        const loadIds = loadId.split("|");
        whereClause.loadId = { [Op.in]: loadIds };
      }
      if (rowId) {
        const rowIds = rowId.split("|");
        whereClause.rowId = { [Op.in]: rowIds };
      }
      if (openId) {
        const openIds = openId.split("|");
        whereClause.openId = { [Op.in]: openIds };
      }
      if (minInnerDiameter || maxInnerDiameter) {
        whereClause.innerDiameter = {};

        if (minInnerDiameter && !maxInnerDiameter) {
          whereClause.innerDiameter[Op.gte] =
            innerDiameter > Number(minInnerDiameter);
        } else if (!minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.lte] = Number(maxInnerDiameter);
        } else if (minInnerDiameter && maxInnerDiameter) {
          whereClause.innerDiameter[Op.between] = [
            Number(minInnerDiameter),
            Number(maxInnerDiameter),
          ];
        }
      }

      if (minPrice || maxPrice) {
        whereClause.price = {};
        // whereClause.priceRvz = {}

        if (minPrice && !maxPrice) {
          whereClause.price[Op.gte] = Number(minPrice);
        } else if (!minPrice && maxPrice) {
          whereClause.price[Op.lte] = Number(maxPrice);
        } else if (minPrice && maxPrice) {
          whereClause.price[Op.between] = [Number(minPrice), Number(maxPrice)];
        }
      }

      const bearings = await Bearing.findAndCountAll({
        where: whereClause,
        limit,
        offset,
      });

      return res.json(bearings);
    } catch (error) {
      console.log(error);

      return res.status(500).json({ message: "Ошибка при поиске подшипника" });
    }
  }

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
