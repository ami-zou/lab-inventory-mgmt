const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.POSTGRES_URL)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.medicines = require("./medicine.model.js")(sequelize, Sequelize);
module.exports = db;