import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "../display/display";
import Dashboard from "./dashboard";

describe("dashboard component", () => {
  const props = {
    balls: 2,
    strikes: 1
  };
  const display = render(<Display {...props} />);
  const dash = render(<Dashboard />);
  describe("ball button", () => {
    const ball = dash.getByTestId("ball-button");
    it("increases balls by 1", () => {
      const counter = display.getByTestId("balls-count");
      const count = counter.innerHTML;
      fireEvent.click(ball);
      expect(counter).toHaveTextContent(Number(count) + 1);
    });
  });
  describe("strike button", () => {
    const strike = dash.getByTestId("strike-button");
    it("increases strikes by 1", () => {
      const counter = display.getByTestId("strikes-count");
      const count = counter.innerHTML;
      fireEvent.click(strike);
      expect(counter).toHaveTextContent(Number(count) + 1);
    });
  });
  describe("foul button", () => {
    const foul = dash.getByTestId("foul-button");
    it("increases strikes by 1", () => {
      const counter = display.getByTestId("strikes-count");
      const count = counter.innerHTML;
      fireEvent.click(foul);
      expect(counter).toHaveTextContent(Number(count) + 1);
    });
  });
  describe("hit button", () => {
    const hit = dash.getByTestId("hit-button");
    it("resets strikes and balls to 0", () => {
      const ballsCounter = display.getByTestId("balls-count");
      const strikesCounter = display.getByTestId("strikes-count");
      fireEvent.click(hit);
      expect(ballsCounter).toHaveTextContent("0");
      expect(strikesCounter).toHaveTextContent("0");
    });
  });
});
