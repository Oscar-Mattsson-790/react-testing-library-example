import { render, screen, fireEvent } from "@testing-library/react";
import AddTodo from "./AddTodo";
import { expect } from "vitest";

describe("AddTodo", () => {
  it("should add a todo", () => {
    render(<AddTodo newTodo={() => {}} />);

    const todoInput = screen.getByRole("textbox");
    fireEvent.change(todoInput, {
      target: { value: "Skriver test" },
    });

    // expect(screen.getByText(/Skriver test/)).toBeInTheDocument();
    expect(screen.getByRole("todo-text")).toHaveTextContent(/^Skriver test$/);

    screen.debug();
  });
});
