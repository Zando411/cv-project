import { Component } from 'react';
import Personal from './Personal';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h1>Fill out your info</h1>
        <Personal />
      </div>
    );
  }
}

export default Form;
