const Practice = (props) => {
  return (
    <div>
      {props.isLoggedIn ? (
        <h1>Welcome back {props.username}</h1>
      ) : (
        <h1>Please signup and login your account.</h1>
      )}
    </div>
  );
};

export default Practice;
