import { ExtendedCartItemProps } from "../types/CartItemProps";

export default function CartItem(props: ExtendedCartItemProps) {
  const totalPrice = props.price * props.amount;
  return (
    <>
      <div className="cartItemCard">
        <p>{props.name}</p>
        <p>Amount: {props.amount}</p>
        <p>Price: {totalPrice}kr</p>
        <button onClick={() => props.removeItem(props.id)}>remove</button>
      </div>
    </>
  );
}
