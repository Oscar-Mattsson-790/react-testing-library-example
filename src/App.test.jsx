import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display four todos at rendering", () => {
    render(<App />);

    const listItems = screen.getAllByRole("listitem");
    const todoNames = listItems.map((item) => item.textContent);

    expect(todoNames).toMatchInlineSnapshot(`
    [
      "Köp kaffe - Ej klar",
      "Köp kaka - Ej klar",
      "Brygg kaffe - Ej klar",
      "Drick kaffe - Ej klar",
    ]
    `);
  });

  it("should add a todo", () => {
    // Arrange
    render(<App />);

    // Act
    const todoInput = screen.getByRole("textbox");
    fireEvent.change(todoInput, {
      target: { value: "Skriver ett test" },
    });

    const addTodoButton = screen.getByRole("button");
    fireEvent.click(addTodoButton);

    screen.debug();

    // Assert
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(5);
  });
});
