import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { sequelize } from "./app/db.js";
import models from "./app/models/models.js";
import router from "./app/router/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
