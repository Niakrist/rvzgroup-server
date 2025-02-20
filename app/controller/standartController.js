import { Standart } from "../models/models.js";

class StandartController {
  async createStandart(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHavestandart = await Standart.findOne({ where: { name } });
      if (isHavestandart) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const standart = await Standart.create({
        name,
        title,
        description,
        h1,
        url,
      });
      return res.json(standart);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getAllStandarts(req, res) {
    try {
      const standarts = await Standart.findAll();
      return res.json(standarts);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async editStandart(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }

      const standart = await Standart.findOne({ where: { id } });

      standart.name = name ? name : standart.name;
      standart.title = title ? title : standart.title;
      standart.description = description ? description : standart.description;
      standart.h1 = h1 ? h1 : standart.h1;
      standart.url = url ? url : standart.url;

      await standart.save();
      return res.json(standart);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new StandartController();
