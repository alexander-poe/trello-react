import React from 'react';
import ReactDOM from 'react-dom';

import Card from './card.js';

export default function List (props) {
  const cardsArr = props.cards.map((cardElem, index) => {
    const listItem = <li>{cardElem}</li>;
 	  return <Card text={listItem} key={index}/>
  })

  return (
    <div>
      <h4>{props.title}</h4>
      <ul>
        {cardsArr}
      </ul>
      <form>
        <input type="text" />
        <input type="submit" />
      </form>
    </div>
  )
}
