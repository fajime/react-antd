import React from 'react';
import { Button } from './components/Button';
import './App.css';

function App() {
  const suma = (a: number, b: number): number => {
    const resultado = a + b;
    console.log(resultado);
    return resultado;
  };

  return (
    <div className="App">
      <Button nombre="Pepe" edad={5} sumar={suma} />
    </div>
  );
}

export default App;
