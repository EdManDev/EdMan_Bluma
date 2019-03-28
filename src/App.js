import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div class="columns">
            <div class="column">
              <div className="notification ">
                First column Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aliquid, unde atque assumenda, quaerat saepe enim
                voluptatem, molestias minima et reprehenderit quia iure
                reiciendis repellat? Nemo a hic aperiam laudantium aliquid.
              </div>
            </div>
            <div className="column">
              Second column Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquid, unde atque assumenda, quaerat saepe enim
              voluptatem, molestias minima et reprehenderit quia iure reiciendis
              repellat? Nemo a hic aperiam laudantium aliquid.
            </div>
            <div className="column">
              Third column Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquid, unde atque assumenda, quaerat saepe enim
              voluptatem, molestias minima et reprehenderit quia iure reiciendis
              repellat? Nemo a hic aperiam laudantium aliquid.
            </div>
            <div className="column">
              Fourth column Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aliquid, unde atque assumenda, quaerat saepe enim
              voluptatem, molestias minima et reprehenderit quia iure reiciendis
              repellat? Nemo a hic aperiam laudantium aliquid.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
