import { Dispatch, SetStateAction } from "react";

export default CartContextType;

interface CartContextType {
  productId: number | undefined;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
}
