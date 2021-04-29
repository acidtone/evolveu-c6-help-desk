const mongoose = require('mongoose');

const defSchema = new mongoose.Schema({
  term: String,
  definition: String,
  slug: String
});

module.exports = mongoose.model('Definition', defSchema);