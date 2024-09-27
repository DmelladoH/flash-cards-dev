import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Page from "./page";

it("should not render nothing once is loaded", () => {
  render(
    <Page params={{ category: "JavaScript", id: "primitive-types-in-JS" }} />,
  );
  expect(
    screen.queryByText("In JavaScript, is everything an object?"),
  ).toBeNull();
});
