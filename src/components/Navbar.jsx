import reactLogo from "../assets/icons/react.svg";

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
    fontSize: "25px",
    textDecoration: "none",
    color: "#999",
    marginRight: "15px",
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
        <a href="#" style={navLink}>
          Home
        </a>
        <a href="#" style={navLink}>
          .map()
        </a>
        <a href="#" style={navLink}>
          onClick
        </a>
        <a href="#" style={navLink}>
          TBD
        </a>
        <a href="#" style={navLink}>
          TBD
        </a>
        <a href="#" style={navLink}>
          TBD
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
