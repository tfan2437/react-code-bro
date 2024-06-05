const Practice = () => {
  function hello(callback) {
    console.log("Hello First!");
    callback();
  }

  function goodbye() {
    console.log("Then Goodbye!");
  }

  return (
    <div>
      <button onClick={() => hello(goodbye)}>hello()</button>
      <button onClick={() => goodbye()}>goodbye()</button>
    </div>
  );
};

export default Practice;
