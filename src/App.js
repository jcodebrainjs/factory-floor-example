import React, { Component } from "react";
import { connect } from "react-redux";
import { actions, constants } from "modules/factory";
import { MachinesView, OrdersView } from "views";
import { NextButtonContainer } from 'containers'
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.init(constants.ORDERS);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Factory Floor</p>
        </header>
        <main className="App-main">
          <section className="App-section-machines">
            <MachinesView />
          </section>
          <section className="App-section-orders">
            <OrdersView />
          </section>
        </main>
        <nav className="App-next-step">
          <NextButtonContainer />
        </nav>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  actions
)(App);
