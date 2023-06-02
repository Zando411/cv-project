import React, { Component } from 'react';
import Personal from './Personal';
import Section from './Section';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h1>Fill out your info</h1>
        <Personal />
        <Section sectionTitle="Education" title="Degree" />
        <Section sectionTitle="Work Experience" title="Job Title" />
      </div>
    );
  }
}

export default Form;
