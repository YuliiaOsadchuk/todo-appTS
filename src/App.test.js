import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("renders title message", () => {
  render(<App />);
  expect(screen.getByText("Add todo")).toBeInTheDocument;
});
