const UserGreeting = ({ isLoggedIn = false, username = "our user" }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back {username}.</h2>
      ) : (
        <h2>You gotta login or signup</h2>
      )}
    </div>
  );
};

export default UserGreeting;
