import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/Search-box/search-box.component.jsx'

class app extends React.Component {
  constructor(){
    super();

    this.state = {
      monsters:[],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )
    return (
      <div className="App">
        <SearchBox
        placeholder= 'Search monsters'
        handleChange={ e => this.setState({ searchField: e.target.value })} 
        />
        <CardList monsters = {filteredMonsters} />
      </div>
    );
  }
}

export default app;
