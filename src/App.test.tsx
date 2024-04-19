import { render, fireEvent, screen } from "@testing-library/react";
import Todo from "./Pages/Todo";

describe("TodoListApp component", () => {
  it("the input field for new tasks", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    expect(inputElement).toBeInTheDocument();
  });

  it("a new task is added when you press enter", () => {
    render(<Todo />);
    const inputElement = screen.getByPlaceholderText("What needs to be done?");
    const addButton = screen.getByTestId("add-task-button");

    fireEvent.change(inputElement, { target: { value: "Test task" } });
    fireEvent.keyPress(inputElement, { key: "Enter", code: 13, charCode: 13 });

    expect(addButton).toBeInTheDocument();
  });
});
