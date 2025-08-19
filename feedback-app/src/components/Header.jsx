import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-logo-container">
        <img className="image-logo" src="./logo.png" alt="logo" />
      </div>
      <div className="header-title-container">
        <h1>Alpha</h1>
        <h5>Feedback</h5>
      </div>
      <div className="header-logo-container"></div>
    </header>
  );
}

export default Header;