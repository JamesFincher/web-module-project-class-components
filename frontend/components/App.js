import React from "react";
import TodoList from "./TodoList";
const itemz = [
  {
    name: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    name: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: itemz,
      formValue: "",
    };
    console.log("State from App", this.state.items);
  }
  render() {
    return <TodoList items={this.state.items} />;
  }
}
