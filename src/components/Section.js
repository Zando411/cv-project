import React, { Component } from 'react';

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: [{ id: this.generateUniqueId() }],
    };
  }

  generateUniqueId() {
    return Math.random().toString(36).substr(2, 9);
  }

  handleAddSection = () => {
    this.setState((prevState) => ({
      sections: [...prevState.sections, { id: this.generateUniqueId() }],
    }));
  };

  handleRemoveSection = (id) => {
    this.setState((prevState) => ({
      sections: prevState.sections.filter((section) => section.id !== id),
    }));
  };

  renderSections() {
    const { sections } = this.state;
    const { title } = this.props;

    return sections.map((section) => (
      <div key={section.id} className="experienceInputs">
        <input type="text" placeholder={title} />
        <div className="times">
          <input type="text" placeholder="Start Time" />
          <input type="text" placeholder="End Time" />
        </div>
        <textarea
          name="description"
          spellCheck="false"
          placeholder="Description"
        ></textarea>
        <button
          className="removeExperience"
          onClick={() => this.handleRemoveSection(section.id)}
        >
          Remove
        </button>
      </div>
    ));
  }

  render() {
    const { sectionTitle } = this.props;
    return (
      <div className="wrapper">
        <h2>{sectionTitle}</h2>
        <div className="experience">
          {this.renderSections()}
          <button className="addExperience" onClick={this.handleAddSection}>
            Add new experience
          </button>
        </div>
      </div>
    );
  }
}

export default Section;
