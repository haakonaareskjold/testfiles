import React from 'react';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
  var text = e.target.value;
  this.props.chooseVideo(text);
}
  
  render() {
    return (
        <form onClick={this.handleClick}>
        <input type="radio" name="src" value="RickRoll" /> RickRoll
        <input type="radio" name="src" value="HEYAYAYA" /> HEYAYAYA
        <input type="radio" name="src" value="Kappa" /> Kappa
        <input type="radio" name="src" value="HL3Trailer" /> HL3Trailer
      </form>
    );
  }
}