import React, { useState } from "react";
import { PintadonImg } from "./PintadonImg";

export const InputImg = () => {
  const [valorInput, setValorInput] = useState("perros");
  const captura = (e) => {
    e.preventDefault();
    let input = document.querySelector("input");
    setValorInput(input.value);
  };

  return (
    <div>
      <form action="" style={{ display: 'flex', justifyContent: 'center' }}>        
        <input style={{ marginRight: '2rem', width: '16rem', display: 'block', height: '1.5rem' }} className="input" type="text" />
        <button style={{ backgroundColor: 'green', width: '7rem' }} onClick={captura}>Buscar</button>
      </form>
      <PintadonImg valor={valorInput} />
    </div>
  );
};
