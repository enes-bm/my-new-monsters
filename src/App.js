import './App.css';
import React from "react";
import {CardList} from "./components/card-lists/card-list-components";
import {SearchBox} from "./components/search/search-components";


class App extends React.Component{
  constructor() {
    super();
    
    this.state = {
      monsters:[],
      searchField: ""
    };


  }

  componentDidMount()  {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(user => this.setState({monsters: user}));
  };
  
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }


  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">

        <h1>Monsters </h1>
        <SearchBox 
        placeholder="searching monsters" 
        handleChange={this.handleChange}/>

        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  
  };



};




export default App;
