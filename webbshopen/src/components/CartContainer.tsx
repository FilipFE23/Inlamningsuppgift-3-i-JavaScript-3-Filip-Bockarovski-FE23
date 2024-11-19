import CartItem from "./CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import ProductData from "../products.json";
import { CartItemProps } from "../types/CartItemProps";

export default function CartContainer() {
  const [cartList, setCartList] = useState<CartItemProps[]>([]);
  const cartState = useContext(CartContext);
  if (!cartState) {
    throw new Error("CartContainer must be used inside CartContext.Provider");
  }
  const { productId, setProductId } = cartState;

  useEffect(() => {
    if (productId) {
      const selectedProduct = ProductData.find(
        (product) => product.id === productId
      );
      if (selectedProduct) {
        const productInCartIndex = cartList.findIndex(
          (product) => product.id === selectedProduct.id
        );
        if (productInCartIndex >= 0) {
          const updatedCartList = [...cartList];
          updatedCartList[productInCartIndex].amount += 1;
          setCartList(updatedCartList);
        } else {
          const addNewProduct: CartItemProps = {
            ...selectedProduct,
            amount: 1,
          };
          setCartList((prevCartList) => [...prevCartList, addNewProduct]);
        }
      }
      setProductId(undefined);
    }
  }, [productId, setProductId, cartList]);

  const totalPrice = cartList.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  const removeItem = (id: number) => {
    setCartList((prevCartList) =>
      prevCartList.filter((item) => item.id !== id)
    );
  };

  return (
    <>
      <h2>Shopping Cart</h2>
      <div className="cartList">
        {cartList &&
          cartList.length > 0 &&
          cartList.map((product) => (
            <CartItem key={product.id} {...product} removeItem={removeItem} />
          ))}
      </div>
      <div className="totalPrice separate">
        <p>Total:</p>
        <p>{totalPrice}kr</p>
      </div>
    </>
  );
}
