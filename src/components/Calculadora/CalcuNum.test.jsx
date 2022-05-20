/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react"
import ReactDOM from "react-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import "@testing-library/jest-dom/extend-expect"
// eslint-disable-next-line import/extensions
import Calcu from "./Calcu.jsx"

test("Test B1 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testuno")
  const button1 = screen.getByText("1")
  userEvent.click(button1)

  expect(testElement).toBeInTheDocument()
  expect(button1).toHaveTextContent("1")
})

test("Test B2 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testdos")
  const button2 = screen.getByText("2")
  userEvent.click(button2)

  expect(testElement).toBeInTheDocument()
  expect(button2).toHaveTextContent("2")
})

test("Test B3 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testtres")
  const button3 = screen.getByText("3")
  userEvent.click(button3)

  expect(testElement).toBeInTheDocument()
  expect(button3).toHaveTextContent("3")
})

test("Test B4 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testcuatro")
  const button4 = screen.getByText("4")
  userEvent.click(button4)
  expect(testElement).toBeInTheDocument()
  expect(button4).toHaveTextContent("4")
})
