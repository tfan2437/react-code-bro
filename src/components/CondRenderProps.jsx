const CondRenderProps = ({ isLoggedIn = false, username = "user001" }) => {
  return (
    <div style={{ borderBottom: "3px solid #eee" }}>
      <img src="" alt="" />
      {isLoggedIn ? (
        <div>
          <h1 style={{ margin: "0" }}>Hey Bro!</h1>
          <h2
            style={{
              display: "flex",
              alignItems: "center",
              margin: "20px 0 30px 0",
            }}
          >
            Welcome back admin
            <span
              className="material-symbols-outlined"
              style={{
                fontSize: "24px",
                color: "#41c4ff",
                margin: "0 2px 0px 10px",
                fontWeight: "600",
              }}
            >
              face
            </span>
            <span style={{ color: "#41c4ff" }}>{username}.</span>
          </h2>
        </div>
      ) : (
        <h1>
          Hey Bro! Log in with your account or sign up now to become one of our
          fellow Bro.
        </h1>
      )}
    </div>
  );
};

export default CondRenderProps;
