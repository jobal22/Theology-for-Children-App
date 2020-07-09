import React, { Component } from "react";
import baby from '../Img/boohoobaby.png';
import './PopUp.css'

export default class JumpPop extends Component {
  handleClick = () => {
    this.props.toggle();
  };

  render() {
    return (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <h2>Information</h2>
          <img className='baby' id='baby' src={baby} alt='baby'/>
          <p>Here is some information about what you clicked on!</p>
        </div>
      </div>
    );
  }
}
