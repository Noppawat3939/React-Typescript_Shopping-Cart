import React, { FC } from "react";
import { Container, ImageContainer, Info } from "../styles/Item_styled";
import { CartItemType } from "../type/Type";
import { MdShoppingCart } from "react-icons/md";

interface Props {
  handleAddtoCart: (addItem: CartItemType) => void;
  item: CartItemType;
}

const Item: FC<Props> = ({ handleAddtoCart, item }: Props) => {
  return (
    <Container>
      <ImageContainer>
        <img src={item.image} alt={item.title} />
      </ImageContainer>
      <Info>
        <h1>{item.title}</h1>
        <span>
          <h3>
            <small>$</small>
            {item.price}
          </h3>
          <button onClick={() => handleAddtoCart(item)}>
            add to cart
            <MdShoppingCart />
          </button>
        </span>
      </Info>
    </Container>
  );
};

export default Item;
