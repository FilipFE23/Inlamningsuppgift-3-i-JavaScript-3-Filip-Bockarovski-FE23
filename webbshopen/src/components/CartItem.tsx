import CartItemProps from "../types/CartItemProps";

export default function CartItem(props: CartItemProps) {
  const totalPrice = props.price * props.amount;
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>Amount: {props.amount}</p>
        <p>Price: {totalPrice}kr</p>
      </div>
    </>
  );
}
