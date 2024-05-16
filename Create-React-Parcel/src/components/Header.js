import { useState } from "react";
import { TITLE_LOGO_URL } from "../constants";

// Title Component
const Title = () => {
  return (
    <div>
      <a href="/">
        <img alt="Logo" className="logo" src={TITLE_LOGO_URL} />
      </a>
      <h1>
        <span style={{ color: "orange" }}>Food</span>elivery
      </h1>
    </div>
  );
};

// Header Component
const Header = () => {
  const [login, setLogin] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        {login ? (
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            login
          </button>
        ) : (
          <button
            onClick={() => {
              setLogin(true);
            }}
          >
            logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
