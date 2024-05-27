import "./App.css";
import FruitsList from "./components/FruitsList";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div>
      <h1>Hey Bro!</h1>
      {/* <UserGreeting isLoggedIn={true} username="Ting-Wei" /> */}
      <FruitsList />
    </div>
  );
}

export default App;
