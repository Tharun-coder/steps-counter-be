const dotenv = require("dotenv").config();

const DBURL = process.env.DB_URL;
const PORT = process.env.PORT || 8000;

module.exports = { DBURL, PORT };
