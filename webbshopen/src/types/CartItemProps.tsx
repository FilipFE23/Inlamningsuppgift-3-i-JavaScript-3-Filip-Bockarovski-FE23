export interface CartItemProps {
  amount: number;
  id: number;
  name: string;
  price: number;
}

export interface ExtendedCartItemProps extends CartItemProps {
  removeItem: (id: number) => void;
}
