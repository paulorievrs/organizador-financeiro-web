import { render, screen } from "@testing-library/react";
import Header from "./Header";
test("modal render is ok", () => {
  const headerText = "header text";

  render(<Header title={headerText} />);

  const linkTextElement = screen.getByText(headerText);
  expect(linkTextElement).toBeInTheDocument();
});
