const ClickButton = () => {
  const handleClick = () => console.log("Ouch!");
  const handleClick2 = (name) => console.log(`Stop clicking me, ${name}`);

  let count = 0;
  const handleClick3 = (name) => {
    count++;
    if (count < 3) {
      console.log(`${name}, you click me ${count} times.`);
    } else {
      console.log(`${name}, stop clicking me!`);
    }
  };

  return <button onClick={() => handleClick3("Bro")}>ClickButton</button>;
};

export default ClickButton;
