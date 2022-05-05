
import React, {useState} from "react";
import "./Calcu.scss";






export default function Calcu() {
  const [display, setDisplay] = useState("0");

  
  
  function handleDisplay(val){

    if(display === "0" && val !== "."){
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


  function handleClear(){
    setDisplay("0");
  }

  return (
   <>
    <div className="container">
        <div className = "display">{display}</div>
        <button className="func c" onClick = {handleClear}>C</button>
        <button className="func masmenos">⁺∕₋</button>
        <button className="func porciento">%</button>
        <button className="oper division">/</button>
        <button className="keyboard siete" onClick = {() => handleDisplay('7')}>7</button>
        <button className="keyboard ocho" onClick = {() => handleDisplay('8')}>8</button>
        <button className="keyboard nueve" onClick = {() => handleDisplay('9')}>9</button>
        <button className="oper por">x</button>
        <button className="keyboard cuatro" onClick = {() => handleDisplay('4')}>4</button>
        <button className="keyboard cinco" onClick = {() => handleDisplay('5')}>5</button>
        <button className="keyboard seis" onClick = {() => handleDisplay('6')}>6</button>
        <button className="oper menos">-</button>
        <button className="keyboard uno" onClick = {() => handleDisplay('1')}>1</button>
        <button className="keyboard dos" onClick = {() => handleDisplay('2')}>2</button>
        <button className="keyboard tres" onClick = {() => handleDisplay('3')}>3</button>
        <button className="oper mas">+</button>
        <button className="keyboard cero" onClick = {() => handleDisplay('0')}>0</button>
        <button className="keyboard punto" onClick = {() => handleDisplay('.')}>.</button>
        <button className="keyboard igual">=</button>
        
        
    </div>

   </>
  );
}
