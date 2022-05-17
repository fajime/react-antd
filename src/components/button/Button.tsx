import { Button } from './../../ant-modules';

export type ButtonType = {
  nombre: string;
};

export const DlButton = ({ nombre = 'Boton' }: ButtonType) => {
  return (
    <>
      <Button className="button" onClick={() => console.log('Click en button...')}>
        {nombre}
      </Button>
    </>
  );
};
