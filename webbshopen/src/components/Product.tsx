import AddToCartButton from "./AddToCartButton";
import ProductProps from "../types/ProductProps";

export default function Product(props: ProductProps) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <AddToCartButton id={props.id} />
    </div>
  );
}
