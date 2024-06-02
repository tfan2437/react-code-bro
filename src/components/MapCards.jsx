import { students } from "../data/students";
import MapCard from "./MapCard";

const MapCards = () => {
  return (
    <div>
      <h1 style={{ color: "#ccc", marginLeft: "20px" }}>Students Cards</h1>
      <div
        style={{
          background: "#fff",
          width: "1200px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {students.map((student) => (
          <MapCard
            key={student.id}
            name={student.name}
            age={student.age}
            school={student.school}
            major={student.major}
            profile={student.profile}
          />
        ))}
      </div>
    </div>
  );
};

export default MapCards;
