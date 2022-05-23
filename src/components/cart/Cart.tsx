import React, { FC } from "react";
import { Container, CloseButton, Content } from "../../styles/Cart_styled";
import { CartItemType } from "../../type/Type";
import { MdOutlineClose, MdOutlineMonetizationOn } from "react-icons/md";
import CartItem from "../cartItem/CartItem";

type Props = {
  cartOpen: boolean;
  setCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItemType[];
  handleAddtoCart: (addItem: CartItemType) => void;
  handleRemovefromCart: (id: number) => void;
};

const Cart: FC<Props> = ({
  cartOpen,
  setCartOpen,
  cartItems,
  handleAddtoCart,
  handleRemovefromCart,
}: Props) => {
  const total = (items: CartItemType[]) => {
    return items.reduce(
      (acc: number, item) => (acc + item.price) * item.amount,
      0
    );
  };

  return (
    <Container cartOpen={cartOpen}>
      <Content>
        <h2>
          Your shopping cart
          {cartItems.length > 0 && (
            <span>
              <MdOutlineMonetizationOn />
              Total: ${total(cartItems).toFixed(2)}
            </span>
          )}
        </h2>
        <CloseButton onClick={() => setCartOpen(false)}>
          <MdOutlineClose />
        </CloseButton>
        {cartItems.length === 0 ? "No item in cart." : null}
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            handleAddtoCart={handleAddtoCart}
            handleRemovefromCart={handleRemovefromCart}
          />
        ))}
      </Content>
    </Container>
  );
};

export default Cart;
