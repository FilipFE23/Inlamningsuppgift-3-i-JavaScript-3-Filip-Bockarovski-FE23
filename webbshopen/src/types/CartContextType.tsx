import { Dispatch, SetStateAction } from "react";

export default CartContextType;

type CartContextType = {
  productId: number | undefined;
  setProductId: Dispatch<SetStateAction<number | undefined>>;
};
