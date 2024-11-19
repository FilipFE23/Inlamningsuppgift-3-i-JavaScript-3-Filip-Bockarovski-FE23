import AddToCartButton from "./AddToCartButton";
import ProductProps from "../types/ProductProps";
import ModalPopup from "./ModalPopup";

export default function Product(props: ProductProps) {
  return (
    <div className="productCard">
      <h3>{props.name}</h3>
      <img className="productImgSize" src={props.img} alt="" />
      <p>Price: {props.price}kr</p>
      <div className="separate">
        <ModalPopup
          name={props.name}
          description={props.description}
          img={props.img}
        />
        <AddToCartButton id={props.id} />
      </div>
    </div>
  );
}
