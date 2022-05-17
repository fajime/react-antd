import { useState } from 'react';
import { Input } from './../../ant-modules';

export const DlInput = () => {
  const [valor, setValor] = useState<string>('');
  const manageValor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setValor(target.value);
  };

  return (
    <>
      <Input name="valor" type="text" onChange={manageValor} />
      <div>{valor}</div>
    </>
  );
};
