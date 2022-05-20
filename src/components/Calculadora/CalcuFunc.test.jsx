/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import {
  render, screen, fireEvent,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"
// eslint-disable-next-line import/extensions
import Calcu from "./Calcu.jsx"

// Buttons work and display correct values on screen
it("Test display button", () => {
  render(<Calcu />)
  const b = screen.getByTestId("Testuno")
  const d = screen.getByTestId("Testdisplay")
  fireEvent.click(b)
  fireEvent.click(b)
  expect(d).toHaveTextContent("11")
})

// Clear button works properly
it("Test clear button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testuno")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("TestC")
  fireEvent.click(b1)
  expect(d).toHaveTextContent("1")
  fireEvent.click(b2)
  expect(d).toHaveTextContent("0")
})

// Sum button and function works properly
it("Test sum button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testuno")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("Testsuma")
  fireEvent.click(b1)
  fireEvent.click(b2)
  fireEvent.click(b1)
  fireEvent.click(b2)
  expect(d).toHaveTextContent("2")
})

// Minus button and function works properly
it("Test minus button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testcinco")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("Testmenos")
  const b3 = screen.getByTestId("Testdos")
  fireEvent.click(b1)
  fireEvent.click(b2)
  fireEvent.click(b3)
  fireEvent.click(b2)
  expect(d).toHaveTextContent("3")
})

// Multiplication button and function works properly
it("Test multiplicacion button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testcinco")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("Testmultiplicacion")
  const b3 = screen.getByTestId("Testtres")
  fireEvent.click(b1)
  fireEvent.click(b2)
  fireEvent.click(b3)
  fireEvent.click(b2)
  expect(d).toHaveTextContent("15")
})

// Division button and function works properly
it("Test Division button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testcinco")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("Testdivision")
  fireEvent.click(b1)
  fireEvent.click(b1)
  fireEvent.click(b2)
  fireEvent.click(b1)
  fireEvent.click(b2)
  expect(d).toHaveTextContent("11")
})

// Module button and function works properly
it("Test Module button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testuno")
  const b2 = screen.getByTestId("Testcero")
  const b3 = screen.getByTestId("Testigual")
  const b4 = screen.getByTestId("Testmodulo")
  const b5 = screen.getByTestId("Testtres")
  const d = screen.getByTestId("Testdisplay")
  fireEvent.click(b1) // 1
  fireEvent.click(b2) // 10
  fireEvent.click(b4) // 10 %
  fireEvent.click(b5) // 10 % 3
  fireEvent.click(b3) // 10 % 3 =
  expect(d).toHaveTextContent("1")// 10 % 3 = 1
})

// plus-minus button and function works properly
it("Test Module button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testuno")
  const b2 = screen.getByTestId("Testmasmenos")
  const b3 = screen.getByTestId("Testigual")
  const d = screen.getByTestId("Testdisplay")
  fireEvent.click(b1) // 1
  fireEvent.click(b2) // +/-
  fireEvent.click(b3) // =
  expect(d).toHaveTextContent("-1")// -1
})

// Equal button and function works properly
it("Test Equal button", () => {
  render(<Calcu />)
  const b1 = screen.getByTestId("Testcinco")
  const d = screen.getByTestId("Testdisplay")
  const b2 = screen.getByTestId("Testdivision")
  const b3 = screen.getByTestId("Testigual")
  fireEvent.click(b1)
  fireEvent.click(b1)
  fireEvent.click(b2)
  fireEvent.click(b1)
  fireEvent.click(b3)
  expect(d).toHaveTextContent("11")
})
