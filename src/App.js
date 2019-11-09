import React from "react";

//custom imports
import './app.css';
import Counter from "./counter";
import ToggleVisibility from "./ToggleVisibility";
import ControlledForm from "./controlledForm";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1 style= {{ color: "cyan", fontFamily: "roboto", fontSize: "50px" }}>Haakon's website for lidl tests</h1>
        <h3><strong>Every component will be divided by a header</strong></h3>
        <br />
        <hr />
        <br />
        <Counter />
        <br />
        <hr />
        <br />
        <ToggleVisibility />
        <br />
        <hr />
        <br />
        <ControlledForm />
        <br />
      </div>
    );
  }
}