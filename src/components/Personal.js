import { Component } from 'react';
import InputField from './InputField';

class Personal extends Component {
  render() {
    return (
      <div className="wrapper">
        <h2>Personal Info</h2>
        <div className="personal">
          <div className="personalInputs">
            <InputField label="First Name:" type="text" id="firstName" />
            <InputField label="Last Name:" type="text" id="lastName" />
            <InputField label="Title" type="text" id="title" />
            <InputField label="Email:" type="email" id="email" name="email" />
            <InputField label="Phone:" type="tel" id="phone" name="phone" />
            <InputField label="Address:" type="text" id="address" />
            <div className="input">
              <label htmlFor="Description">Description:</label>
              <textarea
                name="description"
                id="Description"
                spellCheck="false"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personal;
