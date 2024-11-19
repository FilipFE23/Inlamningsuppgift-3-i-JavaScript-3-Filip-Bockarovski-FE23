export interface CartItemProps {
  amount: number;
  id: number;
  name: string;
  price: number;
  img: string;
}

export interface ExtendedCartItemProps extends CartItemProps {
  removeItem: (id: number) => void;
}
