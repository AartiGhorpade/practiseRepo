import { render, screen } from "@testing-library/react";
import ToDo from "./components/ToDo";

test("renders todo component", () => {
  render(<ToDo />);
  // const elem = screen.getByText("hello");
  // expect(elem).toBeInTheDocument();
});
