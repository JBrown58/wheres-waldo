/// mongoConfig.js
export {};
const mongoose = require("mongoose");

const mongoDb = process.env.dev_db_url;

mongoose.connect(mongoDb, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
