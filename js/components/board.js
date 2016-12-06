import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.js';

export default function Board (props) {
  const eachList = props.lists.map((listElem, index) => {
    return <List title={listElem.listTitle} cards={listElem.card} key={index} />
  })

  return (
    <div>
      <h2>{props.title}</h2>
      <div>
        {eachList}
      </div>
    </div>
  );
}
