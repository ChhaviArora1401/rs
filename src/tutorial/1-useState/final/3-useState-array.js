import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {

    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <div className="example">
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} style={{ marginBottom: '3rem' }}>
            <h2>{name}</h2>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </div>
  );
};

export default UseStateArray;
