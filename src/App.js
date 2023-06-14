import React, { Component } from "react";
import Pokemon from "./pokemon";
import Form from "react-bootstrap/Form";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    data: [],
    searchTerm: "",
  };
  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const results = [];
    try {
      for (let id = 1; id <= 100; id++) {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        let data = await response.json();
        results.push(data);
      }
      this.setState({
        data: results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSearch = (e) => {
    const { value } = e.target;
    const filteredList = this.state.data.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value.toLowerCase());
    });

    this.setState({
      data: filteredList,
      searchTerm: value,
    });
  };

  

  render() {
    return (
      // <BrowserRouter>
      <div>
        {/* <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes> */}

        <Form.Control style={{width:'50%', marginLeft: "50%", textAlign: "center"}}
          size="lg"
          type="text"
          placeholder="Search Pokemon"
          onChange={this.handleSearch}
          value={this.searchTerm}
        />

        <Pokemon pokemon={this.state.data} />
      </div>
      // </BrowserRouter>
    );
  }
}

export default App;
