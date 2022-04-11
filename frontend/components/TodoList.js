import React from "react";
import Todo from "./Todo";

export default class TodoList extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { items } = this.props;
    return (
      <>
        <div>TodoList</div>{" "}
        {items.map((item) => {
          return (
            <Todo
              name={item.name}
              key={item.id}
              id={item.id}
              completed={item.completed}
            />
          );
        })}
      </>
    );
  }
}
