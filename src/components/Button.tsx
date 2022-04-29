import React, { useEffect, useState } from 'react';
import { ButtonType } from '../models/models';

export const Button = ({ nombre, edad, sumar }: ButtonType) => {
  const [comida, setComida] = useState<string>('patata');

  useEffect(() => {
    console.log('dentro effect');
    return () => {
      console.log('dentro effect');
    };
  }, []);

  const sumatorio = () => {
    sumar(5, 5);
  };

  return (
    <>
      <span>Edad: {edad}</span>
      <button onClick={sumatorio}>{nombre}</button>
      <button onClick={() => setComida('naranja')}>{comida}</button>
    </>
  );
};
