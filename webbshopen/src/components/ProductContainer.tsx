import ProductContainerProps from "../types/ProductContainerProps";

export default function ProductContainer(props: ProductContainerProps) {
  return (
    <>
      <p>ProductContainer: {props.query}</p>
    </>
  );
}
