import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { name, key, completed } = this.props;
    return <div key={key}>{name}</div>;
  }
}
