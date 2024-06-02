import { useState } from "react";

const OnClickTextContent = () => {
  const [lightColor, setLightColor] = useState("#dddddd");

  const handleLightSwitch = (e) => {
    if (e.target.textContent === "Turn Off") {
      e.target.textContent = "Turn On";
      setLightColor("#dddddd");
    } else {
      e.target.textContent = "Turn Off";
      setLightColor("#ffd04e");
    }
  };

  <style>.material-symbols-outlined {}</style>;

  return (
    <div>
      <div style={{ width: "500px", textAlign: "center", margin: "50px 0" }}>
        <span
          className="material-symbols-outlined"
          style={{ color: lightColor, display: "block", fontSize: "350px" }}
        >
          lightbulb
        </span>
        <button
          onClick={(e) => handleLightSwitch(e)}
          style={{
            fontSize: "30px",
            fontWeight: "700",
            border: "5px solid #000",
            padding: "3px 0px",
            width: "200px",
            background: lightColor,
          }}
        >
          Turn On
        </button>
      </div>
    </div>
  );
};

export default OnClickTextContent;
