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
      <div className="display">{display}</div>
      <button className="func c" type="button" onClick={handleClear}>C</button>
      <button className="func masmenos" type="button" onClick={() => handleOperacion("⁺∕₋")}>⁺∕₋</button>
      <button className="func porciento" type="button" onClick={() => handleOperacion("%")}>%</button>
      <button className="oper division" type="button" onClick={() => handleOperacion("/")}>/</button>
      <button className="keyboard siete" type="button" onClick={() => handleDisplay("7")}>7</button>
      <button className="keyboard ocho" type="button" onClick={() => handleDisplay("8")}>8</button>
      <button className="keyboard nueve" type="button" onClick={() => handleDisplay("9")}>9</button>
      <button className="oper por" type="button" onClick={() => handleOperacion("*")}>x</button>
      <button className="keyboard cuatro" type="button" onClick={() => handleDisplay("4")}>4</button>
      <button className="keyboard cinco" type="button" onClick={() => handleDisplay("5")}>5</button>
      <button className="keyboard seis" type="button" onClick={() => handleDisplay("6")}>6</button>
      <button className="oper menos" type="button" onClick={() => handleOperacion("-")}>-</button>
      <button className="keyboard uno" type="button" onClick={() => handleDisplay("1")}>1</button>
      <button className="keyboard dos" type="button" onClick={() => handleDisplay("2")}>2</button>
      <button className="keyboard tres" type="button" onClick={() => handleDisplay("3")}>3</button>
      <button className="oper mas" type="button" onClick={() => handleOperacion("+")}>+</button>
      <button className="keyboard cero" type="button" onClick={() => handleDisplay("0")}>0</button>
      <button className="keyboard punto" type="button" onClick={() => handleDisplay(".")}>.</button>
      <button className="keyboard igual" type="button" onClick={() => handleOperacion("")}>=</button>

    </div>
  )
}
