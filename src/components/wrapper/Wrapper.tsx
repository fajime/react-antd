type WrapperType = {
  component: any;
};

export const Wrapper = ({ component: Component, ...rest }: WrapperType) => {
  return (
    <>
      <Component {...rest} />
    </>
  );
};
