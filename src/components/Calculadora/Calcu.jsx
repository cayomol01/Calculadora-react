
import React, {useState} from "react";
import "./Calcu.scss";






export default function Calcu() {
  const [display, setDisplay] = useState("0");
  const [operacion, setOperacion] = useState("");
  const [operandos, setOperandos] = useState([]);

  
  
  function handleDisplay(val){
    if(Number.isInteger(operandos[0])){
      if((display === "0" && val !== ".") || parseInt(display)===operandos[0]){
        setDisplay(val);

      }
      else{
        if ((display+val).length <=9){
          setDisplay(display + val);
        }
        else{
          alert('Cantidad de cáracteres excedida');
        } 
      }
    }
    else{
      if((display === "0" && val !== ".") || parseFloat(display)===operandos[0]){
        setDisplay(val);

      }
      else{
        if ((display+val).length <=9){
          setDisplay(display + val);
        }
        else{
          alert('Cantidad de cáracteres excedida');
        } 
      }
    }

  }

  function handleClear(){
    setDisplay("0");
    setOperacion("");
    setOperandos([]);
  }

  function handleOperacion(val){
    if (operacion !== ""){
      console.log("Se está haciendo un resultado");
      Resultado(val);
    }
    else{
      console.log("Se está empezando la operación")
      if(display.toString().includes(".")){
        setOperandos([parseFloat(display)]);
      }
      else{
        setOperandos([parseInt(display)]);
      }
      setOperacion(val);
    }

     
  }
  


  function Resultado(val){
    if (operandos.length === 1){
      if(display.toString().includes(".")){
        if (operacion === "+"){
          setOperandos([operandos[0] + parseFloat(display)]);
          setDisplay(operandos[0] + parseFloat(display));
        }
        else if (operacion === "-"){
          setOperandos([operandos[0] - parseFloat(display)]);
          setDisplay(operandos[0] - parseFloat(display));
        }
        else if (operacion === "*"){
          setOperandos([operandos[0] * parseFloat(display)]);
          setDisplay(operandos[0] * parseFloat(display));
        }
        else if (operacion === "/"){
          setOperandos([operandos[0] / parseFloat(display)]);
          setDisplay(operandos[0] / parseFloat(display));
        }
        else if (operacion === "%"){
          setOperandos([operandos[0] % parseFloat(display)]);
          setDisplay(operandos[0] % parseFloat(display));
        }
        else if (operacion === "⁺∕₋"){
          setOperandos([0-operandos[0]]);
          setDisplay(0-operandos[0]);
        }
      }
      else{
        if (operacion === "+"){
          setOperandos([operandos[0] + parseFloat(display)]);
          setDisplay(operandos[0] + parseFloat(display));
        }
        else if (operacion === "-"){
          setOperandos([operandos[0] - parseFloat(display)]);
          setDisplay(operandos[0] - parseFloat(display));
        }
        else if (operacion === "*"){
          setOperandos([operandos[0] * parseFloat(display)]);
          setDisplay(operandos[0] * parseFloat(display));
        }
        else if (operacion === "/"){
          setOperandos([operandos[0] / parseFloat(display)]);
          setDisplay(operandos[0] / parseFloat(display));
        }
        else if (operacion === "%"){
          setOperandos([operandos[0] % parseFloat(display)]);
          setDisplay(operandos[0] % parseFloat(display));
        }
        else if (operacion === "⁺∕₋"){
          setOperandos([0-operandos[0]]);
          setDisplay(0-operandos[0]);
        }
      } 
    }
    else{
      if(operacion === "⁺∕₋"){
        if (display.toString().includes(".")){
          setOperandos([-parseFloat(display)]);
          setDisplay(-parseFloat(display));
        }
        else{
          console.log("Es un número entero");
          setOperandos([-parseInt(display)]);
          setDisplay(-parseInt(display));
        }
      }
    }
    setOperacion(val);
  }



  return (
   <>
    <div className="container">
        <div className = "display">{display}</div>
        <button className="func c" onClick = {handleClear}>C</button>
        <button className="func masmenos" onClick = {() => handleOperacion('⁺∕₋')}>⁺∕₋</button>
        <button className="func porciento" onClick = {() => handleOperacion('%')}>%</button>
        <button className="oper division" onClick = {() => handleOperacion('/')}>/</button>
        <button className="keyboard siete" onClick = {() => handleDisplay('7')}>7</button>
        <button className="keyboard ocho" onClick = {() => handleDisplay('8')}>8</button>
        <button className="keyboard nueve" onClick = {() => handleDisplay('9')}>9</button>
        <button className="oper por" onClick = {() => handleOperacion('*')}>x</button>
        <button className="keyboard cuatro" onClick = {() => handleDisplay('4')}>4</button>
        <button className="keyboard cinco" onClick = {() => handleDisplay('5')}>5</button>
        <button className="keyboard seis" onClick = {() => handleDisplay('6')}>6</button>
        <button className="oper menos" onClick = {() => handleOperacion('-')}>-</button>
        <button className="keyboard uno" onClick = {() => handleDisplay('1')}>1</button>
        <button className="keyboard dos" onClick = {() => handleDisplay('2')}>2</button>
        <button className="keyboard tres" onClick = {() => handleDisplay('3')}>3</button>
        <button className="oper mas" onClick = {() => handleOperacion('+')}>+</button>
        <button className="keyboard cero" onClick = {() => handleDisplay('0')}>0</button>
        <button className="keyboard punto" onClick = {() => handleDisplay('.')}>.</button>
        <button className="keyboard igual" onClick = {() => handleOperacion("")}>=</button>
        
        
    </div>

   </>
  );
}

