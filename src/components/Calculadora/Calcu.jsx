/* eslint-disable no-alert */
import React, { useState } from "react"
import "./Calcu.scss"

export default function Calcu() {
  const [display, setDisplay] = useState("0")
  const [operacion, setOperacion] = useState("")
  const [operandos, setOperandos] = useState([])

  function handleDisplay(val) {
    if (Number.isInteger(operandos[0])) {
      if ((display === "0" && val !== ".") || parseInt(display, 10) === operandos[0]) {
        setDisplay(val.slice(0, 9))
      } else if ((display + val).length <= 9) {
        setDisplay((display + val).slice(0, 9))
      } else {
        alert("Cantidad de cáracteres excedida")
      }
    } else if ((display === "0" && val !== ".") || parseFloat(display) === operandos[0]) {
      setDisplay(val.slice(0, 9))
    } else if ((display + val).length <= 9) {
      setDisplay((display + val).slice(0, 9))
    } else {
      alert("Cantidad de cáracteres excedida")
    }
  }

  // Función que retorna el resultado dependiendo de la operación hecha
  // se verifica si se tiene un punto para indicar que es un float

  function Resultado(val) {
    if (operandos.length === 1) {
      if (display.toString().includes(".")) {
        if (operacion === "+") {
          setOperandos([operandos[0] + parseFloat(display)])
          setDisplay(operandos[0] + parseFloat(display))
        } else if (operacion === "-") {
          setOperandos([operandos[0] - parseFloat(display)])
          setDisplay(operandos[0] - parseFloat(display))
        } else if (operacion === "*") {
          setOperandos([operandos[0] * parseFloat(display)])
          setDisplay(operandos[0] * parseFloat(display))
        } else if (operacion === "/") {
          setOperandos([operandos[0] / parseFloat(display)])
          setDisplay(operandos[0] / parseFloat(display))
        } else if (operacion === "%") {
          setOperandos([operandos[0] % parseFloat(display)])
          setDisplay(operandos[0] % parseFloat(display))
        } else if (operacion === "⁺∕₋") {
          setOperandos([0 - operandos[0]])
          setDisplay(0 - operandos[0])
        }
      } else if (operacion === "+") {
        setOperandos([operandos[0] + parseFloat(display)])
        setDisplay(operandos[0] + parseFloat(display))
      } else if (operacion === "-") {
        setOperandos([operandos[0] - parseFloat(display)])
        setDisplay(operandos[0] - parseFloat(display))
      } else if (operacion === "*") {
        setOperandos([operandos[0] * parseFloat(display)])
        setDisplay(operandos[0] * parseFloat(display))
      } else if (operacion === "/") {
        setOperandos([operandos[0] / parseFloat(display)])
        setDisplay(operandos[0] / parseFloat(display))
      } else if (operacion === "%") {
        setOperandos([operandos[0] % parseFloat(display)])
        setDisplay(operandos[0] % parseFloat(display))
      } else if (operacion === "⁺∕₋") {
        setOperandos([0 - operandos[0]])
        setDisplay(0 - operandos[0])
      }
    } else if (operacion === "⁺∕₋") {
      if (display.toString().includes(".")) {
        setOperandos([-parseFloat(display)])
        setDisplay(-parseFloat(display))
      } else {
        setOperandos([-parseInt(display, 10)])
        setDisplay(-parseInt(display, 10))
      }
    }
    setOperacion(val)
  }

  function handleClear() {
    setDisplay("0")
    setOperacion("")
    setOperandos([])
  }

  function handleOperacion(val) {
    if (operacion !== "") {
      Resultado(val)
    } else {
      if (display.toString().includes(".")) {
        setOperandos([parseFloat(display)])
      } else {
        setOperandos([parseInt(display, 10)])
      }
      setOperacion(val)
    }
  }

  return (
    <div className="container">
      <div className="display" data-testid="Testdisplay">{display}</div>
      <button className="func c" type="button" onClick={handleClear} data-testid="TestC">C</button>
      <button className="func masmenos" type="button" onClick={() => handleOperacion("⁺∕₋")} data-testid="Testmasmenos">⁺∕₋</button>
      <button className="func porciento" type="button" onClick={() => handleOperacion("%")} data-testid="Testmodulo">%</button>
      <button className="oper division" type="button" onClick={() => handleOperacion("/")} data-testid="Testdivision">/</button>
      <button className="keyboard siete" type="button" onClick={() => handleDisplay("7")} data-testid="Testsiete">7</button>
      <button className="keyboard ocho" type="button" onClick={() => handleDisplay("8")} data-testid="Testocho">8</button>
      <button className="keyboard nueve" type="button" onClick={() => handleDisplay("9")} data-testid="Testnueve">9</button>
      <button className="oper por" type="button" onClick={() => handleOperacion("*")} data-testid="Testmultiplicacion">x</button>
      <button className="keyboard cuatro" type="button" onClick={() => handleDisplay("4")} data-testid="Testcuatro">4</button>
      <button className="keyboard cinco" type="button" onClick={() => handleDisplay("5")} data-testid="Testcinco">5</button>
      <button className="keyboard seis" type="button" onClick={() => handleDisplay("6")} data-testid="Testseis">6</button>
      <button className="oper menos" type="button" onClick={() => handleOperacion("-")} data-testid="Testmenos">-</button>
      <button className="keyboard uno" type="button" onClick={() => handleDisplay("1")} data-testid="Testuno">1</button>
      <button className="keyboard dos" type="button" onClick={() => handleDisplay("2")} data-testid="Testdos">2</button>
      <button className="keyboard tres" type="button" onClick={() => handleDisplay("3")} data-testid="Testtres">3</button>
      <button className="oper mas" type="button" onClick={() => handleOperacion("+")} data-testid="Testsuma">+</button>
      <button className="keyboard cero" type="button" onClick={() => handleDisplay("0")} data-testid="Testcero">0</button>
      <button className="keyboard punto" type="button" onClick={() => handleDisplay(".")} data-testid="Testpunto">.</button>
      <button className="keyboard igual" type="button" onClick={() => handleOperacion("")} data-testid="Testigual">=</button>

    </div>
  )
}
