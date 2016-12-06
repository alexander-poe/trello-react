import React from 'react';
import ReactDOM from 'react-dom';

import List from './list.js';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	title: "My board title",
    	lists: [
    		{
    			listTitle: 'List 1',
    			card: ['groceries', 'laundry', 'make chores']
    		},
    		{
    			listTitle: 'List 2',
    			card: ['eggs', 'bread', 'milk']
    		},
    		{
    			listTitle: 'List 3',
    			card: ['run', 'situps', 'yoga']
    		}
    	]
    }
  }

  render () {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <div>
          <List title={this.state.lists[0].listTitle} cards={this.state.lists[0].card} />
        </div>
      </div>
    );
  }
}
