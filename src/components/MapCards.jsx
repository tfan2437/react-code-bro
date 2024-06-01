import { students } from "../data/students";
import MapCard from "./MapCard";

const MapCards = () => {
  return (
    <div>
      <h1>Object Array.map() Cards</h1>
      {students.map((student) => (
        <MapCard
          key={student.id}
          name={student.name}
          age={student.age}
          school={student.school}
          major={student.major}
        />
      ))}
    </div>
  );
};

export default MapCards;
