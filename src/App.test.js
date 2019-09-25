import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
