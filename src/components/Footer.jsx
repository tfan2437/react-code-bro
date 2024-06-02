const Footer = () => {
  const aStyle = {
    display: "block",
    textDecoration: "none",
    color: "#ddd",
    fontFamily: '"Prompt", sans-serif',
    fontSize: "18px",
    margin: "0",
  };

  return (
    <footer
      style={{
        background: "#000",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "end",
        marginTop: "25px",
      }}
    >
      <p
        style={{
          margin: "0 0 0 20px",
          color: "#fff",
          fontFamily: '"Prompt", sans-serif',
          fontWeight: "600",
          padding: "20px 0",
        }}
      >
        © 2024 Ting-Wei Fan. All rights reserved.
      </p>
      <div style={{ display: "flex", padding: "20px 0" }}>
        <p
          style={{
            fontSize: "20px",
            margin: "0 20px 0 0",
            color: "#fff",
            fontFamily: '"Prompt", sans-serif',
            fontWeight: "600",
          }}
        >
          My Mentor:
        </p>
        <div style={{ margin: "3px 40px 0 0" }}>
          <a
            href="https://www.youtube.com/@BroCodez"
            target="_blank"
            style={aStyle}
          >
            Bro Code
          </a>
          <a
            href="https://www.youtube.com/@TraversyMedia"
            target="_blank"
            style={aStyle}
          >
            Traversy Media
          </a>
          <a
            href="https://www.youtube.com/@freecodecamp"
            target="_blank"
            style={aStyle}
          >
            Free Code Camp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
