import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackList from "./pages/FeedbackList"; 
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/feedbacks" element={<FeedbackList />} /> 
      </Routes>
    </Router>
  );
}

export default App;
