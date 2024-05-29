import { useState } from "react";

const StateComponent = () => {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState(true);

  const updateName = () => {
    setName("Bro");
  };

  const incrementAge = () => {
    setAge(age + 1);
  };

  const changeGender = () => {
    setGender(!gender);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <hr />
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <hr />
      <p>Gender: {gender ? "Male" : "Female"}</p>
      <button onClick={changeGender}>Change Gender</button>
    </div>
  );
};

export default StateComponent;
