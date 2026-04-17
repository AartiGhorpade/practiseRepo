import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ToDo from "./ToDo";

test("test react app", () => {
  render(<ToDo />);

  const inputBox = screen.getByRole("textbox");
  expect(inputBox).toBeInTheDocument();
});
