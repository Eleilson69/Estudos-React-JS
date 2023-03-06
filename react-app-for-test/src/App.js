import React, { useState } from 'react';

import './App.css';

export default function App() {

  const menu = [
    {nome: 'Elleilson', sobrenome: 'santos', idade: 23},
    {nome: 'Elleilson', sobrenome: 'santos', idade: 23},
    {nome: 'Elleilson', sobrenome: 'santos', idade: 23},
    {nome: 'Elleilson', sobrenome: 'santos', idade: 23},
  ];

  const [liIndex, setLiIndex] = useState(0);

  const handleAdd = (i) => {
    console.log(liIndex);
    setLiIndex(i)
  }

  return (
    <div className="App">
      <ul>
        {menu.map((item, i) =>
          <li key={i}>
            {liIndex + ' ' }
            {item.nome}
            {item.sobrenome}
            {item.idade}
            <button onClick={() => handleAdd(i)}>SETAR</button>
          </li>
        )}
      </ul>
    </div>
  );

};
