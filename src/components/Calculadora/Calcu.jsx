
import React from "react";
import "./Calcu.scss";

export default function Calcu() {

  return (
   <>
    <div className="container">
        <div className = "display">000000000</div>
        <button className="func c">C</button>
        <button className="func masmenos">⁺∕₋</button>
        <button className="func porciento">%</button>
        <button className="oper division">/</button>
        <button className="keyboard siete">7</button>
        <button className="keyboard ocho">8</button>
        <button className="keyboard nueve">9</button>
        <button className="oper por">x</button>
        <button className="keyboard cuatro">4</button>
        <button className="keyboard cinco">5</button>
        <button className="keyboard seis">6</button>
        <button className="oper menos">-</button>
        <button className="keyboard uno">1</button>
        <button className="keyboard dos">2</button>
        <button className="keyboard tres">3</button>
        <button className="oper mas">+</button>
        <button className="keyboard cero">0</button>
        <button className="keyboard punto">.</button>
        <button className="keyboard igual" >=</button>
        
        
    </div>

   </>
  );
}
