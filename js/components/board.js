import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.js';
import ListContainer from './list-container.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "My board title",
      lists: [
        {
          listTitle: 'Chores',
          card: ['groceries', 'laundry', 'make bed']
        },
        {
          listTitle: 'Groceries',
          card: ['eggs', 'leeks', 'milk']
        },
        {
          listTitle: 'Exercise',
          card: ['run', 'situps', 'yoga']
        }
      ]
    }
  }

  onAddInputChanged(event){
      console.log('something');
  }
  onAddSubmit(event) {
      event.preventDefault();
      console.log('hello');
  }

  render () {

    // const listArr = this.state.lists.map((listElem, index) => {
    //   return <List
    //     title={listElem.listTitle}
    //     cards={listElem.card}
    //     key={index}
    //     onAddInputChanged={this.onAddInputChanged}
    //     onAddSubmit={this.onAddSubmit}
    //     />
    // });

    return (
      <div>
        <h2>{this.state.title}</h2>
        <div>
          <ListContainer />
        </div>
      </div>
    );
  }
}
