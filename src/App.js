import { Component } from 'react';
import Preview from './components/Preview';
import Form from './components/Form';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Form />
        <Preview />
      </div>
    );
  }
}

export default App;
