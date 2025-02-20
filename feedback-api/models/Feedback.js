const mongoose = require("mongoose");

/**
 * @typedef {Object} Feedback
 * @property {string} name - Nome do usuário
 * @property {string} email - E-mail do usuário
 * @property {number} rating - Nota de 1 a 5
 * @property {string} message - Mensagem do feedback
 */
const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3 },
  email: { type: String, required: true, match: /.+\@.+\..+/ },
  rating: { type: Number, required: true, min: 1, max: 5 },
  message: { type: String, required: true, minlength: 10 },
}, { timestamps: true });

module.exports = mongoose.model("Feedback", FeedbackSchema);
