import CartItem from "./CartItem";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductData from "../products.json";

export default function CartContainer() {
  const [ cartList, setCartList ] = useState()
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("CartContainer must be used inside CartContext.Provider");
  }
  const { productId } = cartState;

  return (
    <>
      <h2>Shopping Cart</h2>
      <div>
        <CartItem />
      </div>
      <p>Total: </p>
    </>
  );
}
