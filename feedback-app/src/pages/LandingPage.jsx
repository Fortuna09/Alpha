import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";
import backgroundImage from "../assets/background_landing_page.jpg";

function LandingPage() {
  return (
    <div className="landing-page-container">
      <Header />
      <main className="main-content-split">
        <div className="content-panel">
          <div className="content-wrapper">
            <h2 className="title">Bem-vindo ao Alpha Feedback</h2>
            <p className="subtitle">
              Sua opinião transforma nosso produto. Nos ajude a evoluir.
            </p>
            <div className="button-group">
              <Link to="/feedback" className="btn btn-primary">
                Deixar Feedback
              </Link>
              <Link to="/feedbacks" className="btn btn-secondary">
                Ver Feedbacks
              </Link>
            </div>
          </div>
        </div>

        <div className="image-panel" style={{ backgroundImage: `url(${backgroundImage})` }}>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;