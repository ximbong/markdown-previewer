import React, { Component } from "react";
import marked from "marked";

class Previewer extends Component {
  constructor(props) {
    super(props);
  }
  markdownHandle() {
    const markdownText = marked(this.props.value);
    return { __html: markdownText };
  }
  render() {
    return (
      <div id="previewer" dangerouslySetInnerHTML={this.markdownHandle()} />
    );
  }
}

export default Previewer;
