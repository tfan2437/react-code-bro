import { fruits } from "../data/fruits";

const MapList = () => {
  // Ascending Order Sorting
  fruits.sort((a, b) => a.name.localeCompare(b.name));

  // Map through the fruits objects array
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default MapList;
