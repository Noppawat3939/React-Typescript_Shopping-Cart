import React, { FC } from "react";
import { Container, Image, Info } from "../../styles/CartItem_styled";
import { CartItemType } from "../../type/Type";

type Props = {
  item: CartItemType;
  handleAddtoCart: (addItem: CartItemType) => void;
  handleRemovefromCart: (id: number) => void;
};

const CartItem: FC<Props> = ({
  item,
  handleAddtoCart,
  handleRemovefromCart,
}: Props) => {
  return (
    <Container>
      <h3>{item.title}</h3>
      <Info>
        <Image src={item.image} alt={item.image} />
        <span>
          <div>
            <p>
              <b>Price:</b> ${item.price}
            </p>
            <p>
              <b>Total Price:</b> ${(item.amount * item.price).toFixed(2)}
            </p>
          </div>
          <div>
            <button onClick={() => handleRemovefromCart(item.id)}>-</button>
            <p>{item.amount}</p>
            <button onClick={() => handleAddtoCart(item)}>+</button>
          </div>
        </span>
      </Info>
    </Container>
  );
};

export default CartItem;
