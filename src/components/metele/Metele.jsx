import React from "react";
import Nav from "../nav/Nav";

class MyComponent extends React.Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div className="metele">
        <button className="arroconqueso" onClick={() => onSearch("random")}>
          random character
        </button>
        <Nav onSearch={onSearch} />
      </div>
    );
  }
}

export default MyComponent;
