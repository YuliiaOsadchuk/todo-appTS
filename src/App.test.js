import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("Should_Render_Without_Crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

it("Should_Title_Message_Be_In_The_Document_When_Rendered", () => {
  render(<App />);
  expect(screen.getByText("Add todo")).toBeInTheDocument;
});
