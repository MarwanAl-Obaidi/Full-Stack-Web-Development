import React from 'react';

const DATA = {
  title: "Menu",
  items: [
    { id: 1, name: "tacos", type: "mexican" },
    { id: 2, name: "burrito", type: "mexican" },
    { id: 3, name: "tostada", type: "mexican" },
    { id: 4, name: "mushy peas", type: "english" },
    { id: 5, name: "fish and chips", type: "english" },
    { id: 6, name: "black pudding", type: "english" }
  ]
};

const App = () => {
  const items = DATA.items
  .filter(item => item.type === "mexican")
  .map(item => <li key={item.id}>{item.name}</li>)
  
  return <div>
    <h1>{DATA.title}</h1>
    <ul>{items}</ul>
  </div>;
}

export default App;