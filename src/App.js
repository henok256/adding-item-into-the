import React from 'react';
import { v4 as uuidv4 } from 'uuid';
 
const initialList = [
  {
    id: 1,
    name: 'Canada',
  },
  {
    id: 2,
    name: 'USA',
  },
];
 
const App = () => {

  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState('');
 
  function handleChange(event) {
    setName(event.target.value);
  }
 
  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });
 
    setList(newList);
 
    setName('');
  }
 
  return (
    <div>
      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
 
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
