import "./App.css";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div>
      <h1>Hey Bro!</h1>
      <UserGreeting isLoggedIn={true} username="Ting-Wei" />
    </div>
  );
}

export default App;
