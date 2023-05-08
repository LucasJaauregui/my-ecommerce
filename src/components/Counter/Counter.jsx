import React, { useState, useEffect} from "react";
import "./Counter.css";

const Counter = ({initial,stock,onAdd}) => {
  const [number, setNumber] = useState(parseInt(initial));

 
  const restar = () => {
    setNumber(number - 1);
  };
 const sumar = () => {
    setNumber(number + 1);
  };
  useEffect(()=>{
    setNumber(parseInt(initial));
  }, [initial])
  return (
    <div className="counter">
      <button disabled={number <= 1} onClick={restar}>-</button>
      <span> {number}</span>
      <button disabled={number >=stock} onClick={sumar}>+</button>
      <div>
        <button disabled={stock <=0} onClick={() =>onAdd(number)}>Agregar al Carrito</button>
      </div>
    </div>
  );
};

export default Counter;
