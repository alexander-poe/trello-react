import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.js';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      cards: []
    }
  }

  export default function List (props) {




  render() {
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
        <form onSubmit={props.onAddSubmit}>
          <input onChange={props.onAddInputChanged} type="text" />
          <input type="submit"/>
        </form>
      </div>

    )
  }
}
