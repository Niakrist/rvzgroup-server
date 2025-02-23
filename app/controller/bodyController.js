import { Body } from "../models/models.js";
class BodyController {
  async createBody(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHaveBody = await Body.findOne({ where: { name } });
      if (isHaveBody) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const body = await Body.create({ name, title, description, h1, url });
      return res.json(body);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
  async getAllBody(req, res) {
    try {
      const bodys = await Body.findAll();
      return res.json(bodys);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async editBody(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }
      const body = await Body.findOne({ where: { id } });
      body.name = name ? name : body.name;
      body.title = title ? title : body.title;
      body.description = description ? description : body.description;
      body.h1 = h1 ? h1 : body.h1;
      body.url = url ? url : body.url;
      await body.save();
      return res.json(body);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new BodyController();
