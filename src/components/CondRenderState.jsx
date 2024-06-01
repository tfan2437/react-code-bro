import { useState } from "react";

const CondRenderState = () => {
  const [render, setRender] = useState(false);

  const trueRenderImage =
    "https://live.staticflickr.com/65535/53762849870_376b2448a6_c.jpg";
  const falseRenderImage =
    "https://live.staticflickr.com/65535/53762433286_f3d2d502c5_c.jpg";

  const handleTrueRender = () => {
    setRender(true);
  };

  const handleFalseRender = () => {
    setRender(false);
  };

  return (
    <div>
      <h1 style={{ color: "#ccc" }}>State Toggle Rendering</h1>
      {render ? (
        <div>
          <h1>
            Render: <b style={{ color: "#ffaa61" }}>Eyes Monster</b>
          </h1>
          <img
            src={trueRenderImage}
            alt="eyes monster"
            style={{ height: "500px" }}
          />
        </div>
      ) : (
        <div>
          <h1>
            Render: <b style={{ color: "#b2d43c" }}>Mask Zombie</b>
          </h1>
          <img
            src={falseRenderImage}
            alt="mask zombie"
            style={{ height: "500px" }}
          />
        </div>
      )}
      <div>
        <button
          onClick={() => handleTrueRender()}
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginRight: "20px",
            border: "3px solid #000",
            background: "#ffaa61",
          }}
        >
          Monster
        </button>
        <button
          onClick={() => handleFalseRender()}
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginRight: "20px",
            border: "3px solid #000",
            background: "#b2d43c",
          }}
        >
          Zombie
        </button>
      </div>
    </div>
  );
};

export default CondRenderState;
