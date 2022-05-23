import React, { FC } from "react";
import { MdShoppingCart } from "react-icons/md";
import { Nav } from "../styles/Navbar_styled";
import { CartItemType } from "../type/Type";

interface Props {
  getTotalItems: (items: CartItemType[]) => void;
  cartItems: CartItemType[];
}

const Navbar: FC<Props> = ({ getTotalItems, cartItems }: Props) => {
  return (
    <Nav>
      <h1>Shopping Cart</h1>
      <button onClick={() => getTotalItems(cartItems)}>
        <MdShoppingCart />
      </button>
      {cartItems.length < 1 ? null : <span>{cartItems.length}</span>}
    </Nav>
  );
};

export default Navbar;
