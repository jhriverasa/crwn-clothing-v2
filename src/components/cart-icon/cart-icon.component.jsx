import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.styles";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);

  const iconNumber = cartItems.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{iconNumber}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
