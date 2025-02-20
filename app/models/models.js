import { sequelize } from "../db.js";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Bearing = sequelize.define("bearing", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  id1c: { type: DataTypes.STRING, unique: true },
  id1cRvz: { type: DataTypes.STRING, unique: true },
  price: { type: DataTypes.INTEGER },
  priceRvz: { type: DataTypes.INTEGER },
  quantity: { type: DataTypes.INTEGER },
  quantityRvz: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  h1: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
  brand: { type: DataTypes.STRING, allowNull: false, defaultValue: "РВЗ" },
  analog: { type: DataTypes.STRING },
  analogUrl: { type: DataTypes.STRING },
  images: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
  innerDiameter: { type: DataTypes.INTEGER, allowNull: false },
  outerDiameter: { type: DataTypes.INTEGER, allowNull: false },
  width: { type: DataTypes.INTEGER, allowNull: false },
  newBearing: { type: DataTypes.BOOLEAN },
  stockBearing: { type: DataTypes.INTEGER },
  popularBearing: { type: DataTypes.BOOLEAN },
});

const BearingInfo = sequelize.define("bearing_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
});

const Standart = sequelize.define("standart", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Body = sequelize.define("body", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Forma = sequelize.define("forma", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Load = sequelize.define("load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Row = sequelize.define("row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Open = sequelize.define("open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  description: { type: DataTypes.STRING },
  h1: { type: DataTypes.STRING, allowNull: false },
  url: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Смежные таблицы
const StandartBody = sequelize.define("standart_body", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const StandartForma = sequelize.define("standart_forma", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const StandartLoad = sequelize.define("standart_load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const StandartRow = sequelize.define("standart_row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const StandartOpen = sequelize.define("standart_open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BodyForma = sequelize.define("body_forma", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BodyLoad = sequelize.define("body_load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BodyRow = sequelize.define("body_row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const BodyOpen = sequelize.define("body_open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const FormaLoad = sequelize.define("forma_load", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const FormaRow = sequelize.define("forma_row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const FormaOpen = sequelize.define("forma_open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const LoadRow = sequelize.define("load_row", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const LoadOpen = sequelize.define("load_open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
const RowOpen = sequelize.define("row_open", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Standart.hasMany(Bearing);
Bearing.belongsTo(Standart);

Body.hasMany(Bearing);
Bearing.belongsTo(Body);

Forma.hasMany(Bearing);
Bearing.belongsTo(Forma);

Load.hasMany(Bearing);
Bearing.belongsTo(Load);

Row.hasMany(Bearing);
Bearing.belongsTo(Row);

Open.hasMany(Bearing);
Bearing.belongsTo(Open);

Bearing.hasMany(BearingInfo, { as: "info" });
BearingInfo.belongsTo(Bearing);

// --- Определения связей belongsToMany ---

// Standart
Standart.belongsToMany(Body, { through: StandartBody });
Body.belongsToMany(Standart, { through: StandartBody });
Standart.belongsToMany(Forma, { through: StandartForma });
Forma.belongsToMany(Standart, { through: StandartForma });
Standart.belongsToMany(Load, { through: StandartLoad });
Load.belongsToMany(Standart, { through: StandartLoad });
Standart.belongsToMany(Row, { through: StandartRow });
Row.belongsToMany(Standart, { through: StandartRow });
Standart.belongsToMany(Open, { through: StandartOpen });
Open.belongsToMany(Standart, { through: StandartOpen });

// Body
Body.belongsToMany(Forma, { through: BodyForma });
Forma.belongsToMany(Body, { through: BodyForma });
Body.belongsToMany(Load, { through: BodyLoad });
Load.belongsToMany(Body, { through: BodyLoad });
Body.belongsToMany(Row, { through: BodyRow });
Row.belongsToMany(Body, { through: BodyRow });
Body.belongsToMany(Open, { through: BodyOpen });
Open.belongsToMany(Body, { through: BodyOpen });

// Forma
Forma.belongsToMany(Load, { through: FormaLoad });
Load.belongsToMany(Forma, { through: FormaLoad });
Forma.belongsToMany(Row, { through: FormaRow });
Row.belongsToMany(Forma, { through: FormaRow });
Forma.belongsToMany(Open, { through: FormaOpen });
Open.belongsToMany(Forma, { through: FormaOpen });

// Load
Load.belongsToMany(Row, { through: LoadRow });
Row.belongsToMany(Load, { through: LoadRow });
Load.belongsToMany(Open, { through: LoadOpen });
Open.belongsToMany(Load, { through: LoadOpen });

// Row
Row.belongsToMany(Open, { through: RowOpen });
Open.belongsToMany(Row, { through: RowOpen });

const models = {
  User,
  Bearing,
  BearingInfo,
  Standart,
  Body,
  Forma,
  Load,
  Row,
  Open,
  StandartBody,
  StandartForma,
  StandartLoad,
  StandartRow,
  StandartOpen,
  BodyForma,
  BodyLoad,
  BodyRow,
  BodyOpen,
  FormaLoad,
  FormaRow,
  FormaOpen,
  LoadRow,
  LoadOpen,
  RowOpen,
};

export default models;

export {
  User,
  Bearing,
  BearingInfo,
  Standart,
  Body,
  Forma,
  Load,
  Row,
  Open,
  StandartBody,
  StandartForma,
  StandartLoad,
  StandartRow,
  StandartOpen,
  BodyForma,
  BodyLoad,
  BodyRow,
  BodyOpen,
  FormaLoad,
  FormaRow,
  FormaOpen,
  LoadRow,
  LoadOpen,
  RowOpen,
};
