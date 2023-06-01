import { Component } from 'react';

class InputField extends Component {
  render() {
    const { label, type, id, name } = this.props;
    return (
      <div className="input">
        <label htmlFor={id}>{label}</label>
        <input type={type} id={id} name={name} />
      </div>
    );
  }
}

export default InputField;
