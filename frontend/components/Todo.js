import React from "react";

export default class Todo extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { name, id, completed } = this.props;
    return (
      <div id={id}>
        <p>{name}</p>
      </div>
    );
  }
}
