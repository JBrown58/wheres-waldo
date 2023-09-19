"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CharacterSchema = new Schema({
    name: { type: String, required: true },
    locationXMin: { type: Number, required: true },
    locationXMax: { type: Number, required: true },
    locationYMin: { type: Number, required: true },
    locationYMax: { type: Number, required: true },
}, { collection: "characters" });
CharacterSchema.virtual("url").get(function () {
    // We don't use an arrow function as we'll need the this object
    return `${this._id}`;
});
module.exports = mongoose.model("Character", CharacterSchema);
