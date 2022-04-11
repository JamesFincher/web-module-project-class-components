import React from "react";

export default class Todo extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { name, id, crossOff } = this.props;
    return (
      //return item
      <div id={id} onClick={() => crossOff(id)}>
        <p>{name}</p>
      </div>
    );
  }
}
