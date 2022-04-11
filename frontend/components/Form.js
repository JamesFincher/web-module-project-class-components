import React from "react";

export default class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    const { itemText, formChange } = this.props;
    return (
      <div>
        <form>
          <input
            type="text"
            name="item"
            value={itemText}
            onChange={formChange}
          ></input>
        </form>
      </div>
    );
  }
}
