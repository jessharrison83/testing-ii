import React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";
import "jest-dom/extend-expect";
import App from "./App";

it("renders without crashing", () => {
  render(<App />);
});

describe("button functionality", () => {
  const app = render(<App />);
  describe("ball button", () => {
    const ball = app.getByTestId("ball-button");
    it("increases balls by 1", () => {
      const counter = app.getByTestId("balls-count");
      fireEvent.click(ball);
      expect(counter).toHaveTextContent("1");
    });
  });
  describe("strike button", () => {
    const strike = app.getByTestId("strike-button");
    it("increases strikes by 1", () => {
      const counter = app.getByTestId("strikes-count");
      fireEvent.click(strike);
      expect(counter).toHaveTextContent("1");
    });
  });
  describe("foul button", () => {
    const foul = app.getByTestId("foul-button");
    it("increases fouls by 1", () => {
      const counter = app.getByTestId("fouls-count");
      fireEvent.click(foul);
      expect(counter).toHaveTextContent("1");
    });
  });
  describe("hit button", () => {
    const hit = app.getByTestId("hit-button");
    it("resets all displays to 0", () => {
      const ballsCounter = app.getByTestId("balls-count");
      const strikesCounter = app.getByTestId("strikes-count");
      const foulsCounter = app.getByTestId("fouls-count");
      fireEvent.click(hit);
      expect(ballsCounter).toHaveTextContent("0");
      expect(strikesCounter).toHaveTextContent("0");
      expect(foulsCounter).toHaveTextContent("0");
    });
  });
});
