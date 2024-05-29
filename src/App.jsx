import "./App.css";
import ClickButton from "./components/ClickButton";
import EventButton from "./components/EventButton";
import MapList from "./components/MapList";
import Practice from "./components/Practice";
import StateComponent from "./components/StateComponent";
import StateCounter from "./components/StateCounter";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div>
      <h1>Hey Bro!</h1>
      {/* <UserGreeting isLoggedIn={true} username="Ting-Wei" /> */}
      {/* <MapList /> */}
      {/* <ClickButton /> */}
      {/* <EventButton /> */}
      {/* <StateComponent /> */}
      {/* <StateCounter /> */}
      <Practice isLoggedIn={false} username="Bro" />
    </div>
  );
}

export default App;
