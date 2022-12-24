import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LinkText from "./LinkText";
import TextWithLines from "./TextWithLines";
import TitleText from "./TitleText";

test("link text receiving correct properties", () => {
  const linkText = "link text";

  render(
    <Router>
      <LinkText to={"/"} label={linkText} />
    </Router>
  );

  const linkTextElement = screen.getByText(linkText);
  expect(linkTextElement).toBeInTheDocument();
});

test("text with lines receiving correct properties", () => {
  const text = "link text";

  render(<TextWithLines>{text}</TextWithLines>);

  const linkTextElement = screen.getByText(text);
  expect(linkTextElement).toBeInTheDocument();
});

test("title with lines receiving correct properties", () => {
  const text = "link text";

  render(<TitleText>{text}</TitleText>);

  const linkTextElement = screen.getByText(text);
  expect(linkTextElement).toBeInTheDocument();
});
