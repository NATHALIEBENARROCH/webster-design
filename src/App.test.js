import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders every portfolio star as a link", () => {
  render(<App />);
  expect(screen.getAllByRole("link", { name: /view on behance/i })).toHaveLength(12);
});
