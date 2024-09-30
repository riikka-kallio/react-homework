// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import PersonComponent from "./components/PersonComponent";
import ListItem from './components/ListItem';

function App() {
  const items = [
    {name: 'Riikka', age: 33, hobbies: 'crossfit'},
    {name: 'Sam', age: 32, hobbies: 'mountainbiking'},
    {name: 'Freddie', age: 3, hobbies: 'eating'},
  ];

  const listItems = items.map(({name, age, hobbies}, i) => (<ListItem key={i} name={name} age={age} hobbies={hobbies}/>));

  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default App
