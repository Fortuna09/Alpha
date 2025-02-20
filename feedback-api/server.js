require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

/**
 * @description Conecta ao MongoDB utilizando a URI do ambiente
 * @async
 * @returns {Promise<void>}
 */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado!"))
  .catch(err => console.error("❌ Erro ao conectar ao MongoDB:", err));

const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/api/feedbacks", feedbackRoutes);

const PORT = process.env.PORT || 5000;

/**
 * @description Inicia o servidor Express
 * @param {number} PORT - Porta onde o servidor será executado
 */
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
