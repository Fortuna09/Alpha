import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <img className="image-logo" src="../src/assets/logo.png" alt="logo" />
      <div className="name-header">
        <h1>Alpha</h1>
        <h5>Feedback</h5>
      </div>
    </header>
  );
}

export default Header;
