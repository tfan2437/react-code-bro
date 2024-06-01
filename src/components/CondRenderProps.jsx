const CondRenderProps = ({ isLoggedIn = false, username = "user001" }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h1>
          Hey Bro! Welcome back admin{" "}
          <span style={{ color: "#1ddba8" }}>{username}.</span>
        </h1>
      ) : (
        <h1>Hey Bro! Please signup or login</h1>
      )}
    </div>
  );
};

export default CondRenderProps;
