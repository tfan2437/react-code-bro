const EventButton = () => {
  const handleClick = (e) => (e.target.textContent = "Ouch!");

  let clickCount = 1;
  const handleClickCount = (e) =>
    (e.target.textContent = `Click Count: ${clickCount++}`);

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Event Clicker</button>
      <button onClick={(e) => handleClickCount(e)}>Click Count</button>
    </div>
  );
};

export default EventButton;
