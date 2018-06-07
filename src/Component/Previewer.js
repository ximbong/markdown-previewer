import React, { Component } from "react";
import marked from "marked";

class Previewer extends Component {
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
