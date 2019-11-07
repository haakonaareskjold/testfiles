import React from "react";

//custom imports
import Counter from "./counter";
import ToggleVisibility from "./ToggleVisibility";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Haakon's website for lidl tests</h1>
        <p>Every component will be divided by a header</p>
        <br />
        <hr />
        <br />
        <Counter />
        <br />
        <hr />
        <br />
        <ToggleVisibility />
      </div>
    );
  }
}

//export
export default App;
