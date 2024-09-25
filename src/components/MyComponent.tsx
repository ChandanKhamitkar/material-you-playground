type ComponentProps = {
  txt: string;
  backgroundColor?: string;
};

const MyComponent = (props: ComponentProps) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor || "green" }}>
      Hello, {props.txt}
    </div>
  );
};

export default MyComponent;
