import React, { Component } from "react";
import "../App.css";
import Input from "./Input";
import Previewer from "./Previewer";
import defaultText from "./DefaultText";
import CheatSheet from "./CheatSheet"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultText
    };
  }
  handleChange = value => {
    this.setState({
      input: value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="title">Markdown Previewer</div>
        <div className="main">
          <Input onChange={this.handleChange} value={defaultText} />
          <Previewer value={this.state.input} />
        </div>
        <CheatSheet />
      </div>
    );
  }
}

export default App;
