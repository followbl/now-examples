import React, { Component } from "react";

export default class extends Component {
  static getInitialProps({ query: { id } }) {
    return { postId: id };
  }

  render() {
    return (
      <div>
        <h1>My blog post #{this.props.postId}</h1>
        <p>
          This is some descriptive text for developing an app and here it is
        </p>
      </div>
    );
  }
}
