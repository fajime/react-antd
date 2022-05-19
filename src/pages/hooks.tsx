import { useLayoutEffect, useRef } from 'react';
import { Content } from './../ant-modules';

export const Hooks = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (ref.current?.innerText) {
        ref.current.innerText = 'Texto cambiado...';
      }
    }, 5000);
  });

  return (
    <Content>
      <h1 ref={ref}>Uso de useRef</h1>
    </Content>
  );
};
