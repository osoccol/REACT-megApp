import React from "react";
import ReactDOM from "react-dom";
import Memory from "../../srcMemory/App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Memory/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
