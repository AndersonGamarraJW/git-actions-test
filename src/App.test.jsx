import { render, screen } from "@testing-library/react";
import App from "./App";
import { describe, expect, test } from "vitest";
describe("App component", () => {
  test("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toEqual("Our First Test");
     expect(screen.getByRole("heading")).toBeEnabled();
  });
});
