import { Forma } from "../models/models.js";

class FormaController {
  async createForma(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHaveForma = await Forma.findOne({ where: { name } });
      if (isHaveForma) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const forma = await Forma.create({ name, title, description, h1, url });
      return res.json(forma);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getAllForm(req, res) {
    try {
      const formas = await Forma.findAll();
      return res.json(formas);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async editForma(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }

      const forma = await Forma.findOne({ where: { id } });

      forma.name = name ? name : forma.name;
      forma.title = title ? title : forma.title;
      forma.description = description ? description : forma.description;
      forma.h1 = h1 ? h1 : forma.h1;
      forma.url = url ? url : forma.url;

      await forma.save();
      return res.json(forma);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new FormaController();
