import { useContext } from "react";
import AddToCartButtonProps from "../types/AddToCartButtonProps";
import { CartContext } from "../context/CartContext";

export default function AddToCartButton(props: AddToCartButtonProps) {
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("AddToCartButton must be used inside CartContext.Provider");
  }
  const { setProductId } = cartState;
  const addToCart = () => {
    setProductId(props.id);
  };

  return <button onClick={addToCart}>Add to Cart</button>;
}
