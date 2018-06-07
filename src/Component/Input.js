import React, { Component } from "react";

class Input extends Component {
  handleChange = event => {
    const value = event.target.value;
    this.props.onChange(value);
  };
  render() {
    return (
      <div className="editor">
        <textarea
          id="editor"
          defaultValue={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
