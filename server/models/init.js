const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  initialname: { type: String, required: true, unique: true },
  text: { type: String, required: true },
});

module.exports = model('Test', schema);
