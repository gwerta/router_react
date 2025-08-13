import { useState } from "react";

function Contador(){

      const [contador, setContador] = useState(0);

    const add = () => {
        setContador(contador + 1);
    };

    return (
        <div className="app-content">
            <p>Valor: {contador}</p>
            <button className="btn" onClick={add}>+</button>
        </div>
    );
}



export default Contador;