import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/FeedbackList.css";

function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchFeedbacks() {
      try {
        const response = await axios.get("http://localhost:5000/api/feedbacks");
        setFeedbacks(response.data);
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError("Erro ao buscar feedbacks. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    fetchFeedbacks();
  }, []);

  return (
    <div className="feedback-list-page">
      <Header />
      <div className="container">
        <h2>Feedbacks Recebidos</h2>
        {loading && <p>Carregando feedbacks...</p>}
        {error && <p className="error">{error}</p>}
        <div className="feedback-list">
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => (
              <div key={feedback._id} className="feedback-card">
                <h3>{feedback.name}</h3>
                <p><strong>Email:</strong> {feedback.email}</p>
                <p><strong>Nota:</strong> ⭐ {feedback.rating}</p>
                <p>{feedback.message}</p>
              </div>
            ))
          ) : (
            <p>Nenhum feedback encontrado.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FeedbackList;
