import { Row } from "../models/models.js";

class RowController {
  async createRow(req, res) {
    try {
      const { name, title, description, h1, url } = req.body;
      const isHaverow = await Row.findOne({ where: { name } });
      if (isHaverow) {
        return res
          .status(400)
          .json({ message: `Категория ${name} уже создана` });
      }
      const row = await Row.create({ name, title, description, h1, url });
      return res.json(row);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getAllRows(req, res) {
    try {
      const rows = await Row.findAll();
      return res.json(rows);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async editRow(req, res) {
    try {
      const { id, name, title, description, h1, url } = req.body;
      if (!id) {
        res.status(400).json({ message: `Категории id: ${id} не найдено` });
      }

      const row = await Row.findOne({ where: { id } });

      row.name = name ? name : row.name;
      row.title = title ? title : row.title;
      row.description = description ? description : row.description;
      row.h1 = h1 ? h1 : row.h1;
      row.url = url ? url : row.url;

      await row.save();
      return res.json(row);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new RowController();
