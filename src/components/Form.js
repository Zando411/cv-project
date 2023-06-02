import React, { Component } from 'react';
import Personal from './Personal';
import Experience from './Experience';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h1>Fill out your info</h1>
        <Personal />
        <Experience />
      </div>
    );
  }
}

export default Form;
