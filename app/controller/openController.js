import { Open } from "../models/models.js";

class OpenController {
  async createOpen(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHaveOpen = await Open.findOne({ where: { name } });
      if (isHaveOpen) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const open = await Open.create({ name, title, description, h1, url });
      return res.json(open);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getAllOpens(req, res) {
    try {
      const opens = await Open.findAll();
      return res.json(opens);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async editOpen(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }

      const open = await Open.findOne({ where: { id } });

      open.name = name ? name : open.name;
      open.title = title ? title : open.title;
      open.description = description ? description : open.description;
      open.h1 = h1 ? h1 : open.h1;
      open.url = url ? url : open.url;

      await open.save();
      return res.json(open);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new OpenController();
