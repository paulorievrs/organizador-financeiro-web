import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("modal render is ok", () => {
  const modalText = "modal text";
  const modalHeaderText = "modal header text";

  render(
    <Modal headerText={modalHeaderText} isOpen>
      {modalText}
    </Modal>
  );

  const linkTextElement = screen.getByText(modalText);
  expect(linkTextElement).toBeInTheDocument();

  const linkHeaderTextElement = screen.getByText(modalHeaderText);
  expect(linkHeaderTextElement).toBeInTheDocument();
});

test("is a closable modal", () => {
  const modalText = "modal text";

  render(<Modal isOpen={false}>{modalText}</Modal>);

  const linkTextElement = screen.queryByText(modalText);
  expect(linkTextElement).toBeNull();
});
