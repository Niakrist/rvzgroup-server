import { Load } from "../models/models.js";

class LoadController {
  async createLoad(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHaveLoad = await Load.findOne({ where: { name } });
      if (isHaveLoad) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const load = await Load.create({ name, title, description, h1, url });
      return res.json(load);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getAllLoads(req, res) {
    try {
      const loadss = await Load.findAll();
      return res.json(loadss);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async editLoad(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }

      const load = await Load.findOne({ where: { id } });

      load.name = name ? name : load.name;
      load.title = title ? title : load.title;
      load.description = description ? description : load.description;
      load.h1 = h1 ? h1 : load.h1;
      load.url = url ? url : load.url;

      await load.save();
      return res.json(load);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new LoadController();
