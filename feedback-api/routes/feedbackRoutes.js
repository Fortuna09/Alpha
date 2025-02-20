const express = require("express");
const Feedback = require("../models/Feedback");

const router = express.Router();

/**
 * @route POST /api/feedbacks
 * @description Cria um novo feedback
 * @access Público
 * @param {Object} req - Objeto da requisição contendo os dados do feedback
 * @param {Object} res - Objeto de resposta do Express
 * @returns {JSON} Mensagem de sucesso ou erro
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, rating, message } = req.body;
    const feedback = new Feedback({ name, email, rating, message });
    await feedback.save();
    res.status(201).json({ message: "Feedback salvo com sucesso!" });
  } catch (error) {
    res.status(400).json({ error: "Erro ao salvar feedback." });
  }
});

/**
 * @route GET /api/feedbacks
 * @description Retorna todos os feedbacks cadastrados
 * @access Público
 * @param {Object} req - Objeto da requisição
 * @param {Object} res - Objeto de resposta do Express
 * @returns {Array} Lista de feedbacks
 */
router.get("/", async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar feedbacks." });
  }
});

module.exports = router;
