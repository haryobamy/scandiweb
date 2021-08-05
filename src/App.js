import React, { Component } from "react";
import { Details, Footer, Navbar, Sidebar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyles } from "./globalStyle";
import { CartPage, Home } from "./pages";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      cartIsOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState(() => {
      return { isOpen: !this.state.isOpen };
    });
  };
  // handleCartToggle = () => {
  //   this.setState({
  //     cartIsOpen: true,
  //   });
  // };
  render() {
    return (
      <Router>
        <GlobalStyles />
        <>
          <Navbar handleClick={this.handleClick} />
          <Sidebar isOpen={this.state.isOpen} handleClick={this.handleClick} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/details">
              <Details />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
          </Switch>

          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
