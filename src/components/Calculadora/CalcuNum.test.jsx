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

// Renders correctly
it("Renders calcu", () => {
  render(<Calcu />)
})

// Buttons work correctly and have the values applied to them
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

test("Test B5 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testcinco")
  const button5 = screen.getByText("5")
  userEvent.click(button5)
  expect(testElement).toBeInTheDocument()
  expect(button5).toHaveTextContent("5")
})

test("Test B6 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testseis")
  const button6 = screen.getByText("6")
  userEvent.click(button6)
  expect(testElement).toBeInTheDocument()
  expect(button6).toHaveTextContent("6")
})

test("Test B7 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testsiete")
  const button7 = screen.getByText("7")
  userEvent.click(button7)
  expect(testElement).toBeInTheDocument()
  expect(button7).toHaveTextContent("7")
})

test("Test B8 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testocho")
  const button8 = screen.getByText("8")
  userEvent.click(button8)
  expect(testElement).toBeInTheDocument()
  expect(button8).toHaveTextContent("8")
})

test("Test B9 ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testnueve")
  const button9 = screen.getByText("9")
  userEvent.click(button9)
  expect(testElement).toBeInTheDocument()
  expect(button9).toHaveTextContent("9")
})

test("Test Punto ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testpunto")
  const button9 = screen.getByText(".")
  fireEvent.click(button9)
  expect(testElement).toBeInTheDocument()
  expect(button9).toHaveTextContent(".")
})

test("Test Cero ", () => {
  render(<Calcu />)
  const testElement = screen.getByTestId("Testcero")
  const button9 = screen.getAllByText("0")[1]
  fireEvent.click(button9)
  expect(testElement).toBeInTheDocument()
  expect(button9).toHaveTextContent("0")
})
