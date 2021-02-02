const { Schema, model } = require('mongoose');

const colors = new Schema(
  { name: String, list: Array, id: Number },
  { collection: 'colors' }
);

module.exports = model('colors', colors);
