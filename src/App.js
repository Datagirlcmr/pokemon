import React, { Component } from "react";
import Pokemon from "./pokemon";
// import Home from "./components/Home";
// import Contact from "./components/Contact";
// import About from "./components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    data: [],
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
      console.log(results);
      this.setState({
        data: results,
      });
    } catch (error) {
      console.log(error);
    }
  }

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
          <Pokemon pokemon={this.state.data} />
        </div>
      // </BrowserRouter>
    );
  }
}

export default App;
