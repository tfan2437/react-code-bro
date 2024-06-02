const MapCard = ({
  name = "Student Name",
  age = 18,
  school = "University",
  major = "Major",
  profile = "",
}) => {
  const textStyle = {
    margin: "0 0 5px 20px",
    padding: 0,
  };

  return (
    <div
      style={{
        width: "300px",
        background: "#eee",
        borderRadius: "15px",
        marginLeft: "20px",
      }}
    >
      <img
        src={profile}
        alt={name}
        style={{
          width: "200px",
          display: "block",
          margin: "0px auto",
          padding: "20px 0",
          borderRadius: "50%",
        }}
      />
      <div style={{ marginBottom: "20px" }}>
        <h2
          style={{ fontFamily: '"Prompt", sans-serif', margin: "0 0 5px 20px" }}
        >
          {name}
        </h2>
        <p style={textStyle}>
          {" "}
          <b>Age: </b>
          {age}
        </p>
        <p style={textStyle}>
          <b>School: </b>
          {school}
        </p>
        <p style={textStyle}>
          <b>Major: </b>
          {major}
        </p>
      </div>
    </div>
  );
};

export default MapCard;
