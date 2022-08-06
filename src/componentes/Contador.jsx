import React from "react";
import '../hojas-de-estilo/Contador.css';

function Contador({ numclics }) {
  return (
    <div className="contador">
      <p>{numclics}</p>
    </div>
  );
}

export default Contador;