import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />

      {/* Corpo principal */}
      <main className="main-content">
        <div className="overlay">
          <div className="content text-center">
            <h2 className="title">Bem-vindo ao Alpha Feedback</h2>
            <p className="subtitle">
              Sua opinião é essencial! Deixe seu feedback e nos ajude a evoluir.
            </p>
            <button className="button-feedback">
              <Link to="/feedback" className="btn btn-primary btn-lg">
                Deixar Feedback
              </Link>
            </button>
            
          </div>
          <button className="button-feedback">
              <Link to="/feedbacks" className="btn btn-secondary">
                Ver Feedbacks
              </Link>
            </button>

        </div>

      </main>



      <Footer />
    </div>
  );
}

export default LandingPage;
