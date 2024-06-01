const MapCard = ({
  name = "Student Name",
  age = 18,
  school = "University",
  major = "Major",
}) => {
  return (
    <div>
      <hr />
      <h2>{name}</h2>
      <p>
        Age: <b>{age}</b>
      </p>
      <p>
        School: <b>{school}</b>
      </p>
      <p>
        Major: <b>{major}</b>
      </p>
    </div>
  );
};

export default MapCard;
