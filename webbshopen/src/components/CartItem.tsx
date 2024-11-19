import { ExtendedCartItemProps } from "../types/CartItemProps";

export default function CartItem(props: ExtendedCartItemProps) {
  const totalPrice = props.price * props.amount;
  return (
    <>
      <div className="cartItemCard container separate">
        <div className="titleImgContainer">
          <p>{props.name}</p>
          <img className="cartImgSize" src={props.img} alt="" />
        </div>
        <div>
          <p>Amount: {props.amount}</p>
          <p>Price: {totalPrice}kr</p>
          <button onClick={() => props.removeItem(props.id)}>remove</button>
        </div>
      </div>
    </>
  );
}
