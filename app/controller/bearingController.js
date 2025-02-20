import { Bearing, BearingInfo } from "../models/models.js";

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

      console.log("req: ", req.body);

      // const { images } = req.files;
      // let fileName = uuid.v4() + ".jpg";
      // images.mv(path.resolve(__dirname, "..", "static", fileName));

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
        images: "123",
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
      return res.json(bearing);
    } catch (error) {
      console.log(error);
    }
  }
  async getAllBearing(req, res) {}
  async getOneBearing(req, res) {}
  async editOneBearing(req, res) {}
}

export default new BearingController();
