import './App.css';
import Boton from './componentes/Boton.jsx';  // Importar el componente Boton de src/componentes/Boton.jsx
import Contador from './componentes/Contador.jsx';  // Exportar el componente App de src/App.jsx para que sea visible desde index.js
import freeCodeCampLogo from './imagenes/FreeCodeCamp-WHITE.png';  // Importar la imagen de src/imagenes/FreeCodeCamp-WHITE.png
import { useState } from 'react';  // Importar el hook useState de React

function App() {

  const [numclics, setNumclics] = useState(0);  // Declarar el estado numclics con el valor inicial 0 y la función setNumclics para actualizarlo

  const manejarClic = () => { // Declarar la función manejarClic para incrementar el contador de clics
    setNumclics(numclics + 1);  // Actualizar el contador de clics con el valor actual + 1 (numclics + 1) y llamar a la función setNumclics para actualizar el estado numclics
  }

  const reiniciarContador = () => {  // Declarar la función reiniciarContador para reiniciar el contador de clics a 0
    setNumclics(0); // Actualizar el contador de clics a 0 y llamar a la función setNumclics para actualizar el estado numclics
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}  // Importar la imagen de src/imagenes/FreeCodeCamp-WHITE.png
          alt= 'Logo de FreeCodeCamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numclics= {numclics}  // Pasar el valor del estado numclics al componente Contador
        />
        <Boton
          texto = 'Clic' // Pasar el texto 'Clic' al componente Boton para que se muestre en el botón
          esBotonDeClic = {true} // Pasar el valor true al componente Boton para que se muestre el botón de clic
          manejarClic = {manejarClic} // Pasar la función manejarClic al componente Boton para que se ejecute al hacer clic
        />
        <Boton
          texto = 'Reiniciar' // Pasar el texto 'Reiniciar' al componente Boton y llamar a la función reiniciarContador
          esBotonDeClic = {false} // Pasar el valor false al componente Boton para que el componente Boton sea un botón de reiniciar
          manejarClic = {reiniciarContador} // Pasar la función reiniciarContador al componente Boton (la función reiniciarContador se ejecuta cuando se hace click en el botón 'Reiniciar')
        />
      </div>
    </div>
  );
}

export default App;
