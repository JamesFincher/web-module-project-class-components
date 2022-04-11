import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";
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
  formChange = (e) => {
    this.setState({ formValue: e.target.value });
  };
  render() {
    return (
      <>
        return <TodoList items={this.state.items} />
        <Form formValue={this.state.formValue} formChange={this.formChange} />
      </>
    );
  }
}
