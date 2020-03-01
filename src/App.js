import React, { Component } from "react";
import CardList from "./components/card-list/card-list-component";
import { SearchBox } from "./components/search-box/search-box-component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredState = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          changeHandler={this.handleChange}
        />
        <CardList monsters={filteredState} />
      </div>
    );
  }
}

export default App;
