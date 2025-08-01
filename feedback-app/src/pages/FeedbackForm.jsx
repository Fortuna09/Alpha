import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios"; 
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/FeedbackForm.css";
import apiClient from '../api/apiClient';

const feedbackSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres."),
  email: z.string().email("Digite um e-mail válido."),
  rating: z
    .number()
    .min(1, "Selecione uma nota entre 1 e 5.")
    .max(5, "A nota deve ser no máximo 5."),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres."),
});

function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(feedbackSchema),
  });

  const onSubmit = async (data) => {
  try {
    await apiClient.post("/api/feedbacks", data);
    alert("Feedback enviado com sucesso!");
    reset();
  } catch (error) {
    console.error("Erro ao enviar feedback:", error);
    alert("Erro ao enviar feedback. Tente novamente.");
  }
};

  return (
    <div className="feedback-page">
      <Header />
      <div className="form-container">
        <h2>Deixe seu Feedback</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Nome:</label>
            <input type="text" {...register("name")} />
            {errors.name && <span className="error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" {...register("email")} />
            {errors.email && <span className="error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <label>Nota (1 a 5):</label>
            <select {...register("rating", { valueAsNumber: true })}>
              <option value="">Selecione</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.rating && <span className="error">{errors.rating.message}</span>}
          </div>

          <div className="form-group">
            <label>Mensagem:</label>
            <textarea rows="4" {...register("message")} />
            {errors.message && <span className="error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary">
            Enviar Feedback
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FeedbackForm;
