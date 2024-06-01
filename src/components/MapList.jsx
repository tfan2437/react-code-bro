import { fruits } from "../data/fruits";

const MapList = () => {
  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>
          <b>{fruit.name}</b>, Calories: <b>{fruit.calories}</b>, Color:
          <b style={{ color: fruit.color }}>{fruit.color}</b>
        </li>
      ))}
    </ul>
  );
};

export default MapList;
