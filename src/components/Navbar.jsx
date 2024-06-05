import reactLogo from "../assets/icons/react.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navTitle = {
    fontFamily: '"Prompt", sans-serif',
    fontWeight: "800",
    fontSize: "55px",
    margin: 0,
  };

  const navLink = {
    fontFamily: '"Prompt", sans-serif',
    fontWeight: "500",
    fontSize: "20px",
    textDecoration: "none",
    color: "#999",
    marginRight: "25px",
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        borderBottom: "3px solid #eee",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "20px" }}
      >
        <img
          src={reactLogo}
          alt="react-logo"
          style={{ height: "55px", marginRight: "10px" }}
        />
        <h1 style={navTitle}>React Toolbox</h1>
      </div>
      <div style={{ paddingBottom: "0px" }}>
        <Link to="/" style={navLink}>
          Home
        </Link>
        <Link to="/conditional-render" style={navLink}>
          Cond Render
        </Link>
        <Link to="/map()" style={navLink}>
          .map()
        </Link>
        <Link to="/onclick-button" style={navLink}>
          onClick
        </Link>
        <Link to="/onchange-input" style={navLink}>
          onChange
        </Link>
        <Link to="#" style={navLink}>
          Color Picker
        </Link>
        <Link to="/practice" style={navLink}>
          Practice
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
