import React from "react";

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: '',
      submit: this.state.input
    });
  }
  render() {
    return (
      <div>
        <h1>Type and submit:</h1>
        <form onSubmit={this.handleSubmit}>
          <input value = {this.state.input}
          onChange = {this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        <h4 style= {{ color: "fuchsia", fontFamily: "roboto", fontSize: "50px" }}>{this.state.submit}</h4>
      </div>
    );
  }
};
