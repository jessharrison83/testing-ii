import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./display.js";

describe("displays balls and strikes", () => {
  const component = render(<Display />);
  const balls = component.getByTestId("balls");
  const strikes = component.getByTestId("strikes");
  expect(balls).toHaveTextContent(/balls/i);
  expect(strikes).toHaveTextContent(/strikes/i);
});
