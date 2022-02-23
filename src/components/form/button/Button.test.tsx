import { render, screen } from "@testing-library/react";
import Button from "./Button";
test("button form render is ok", () => {
  const buttonLabel = "button text";

  render(<Button label={buttonLabel} />);

  const linkTextElement = screen.getByText(buttonLabel);
  expect(linkTextElement).toBeInTheDocument();
});
