import { FC, useState } from "react";
import { useQuery } from "react-query";
import { GlobalStyled } from "./styles/GlobalStyled";
import { CartItemType } from "./type/Type";
import { Wrapper } from "./styles/Wrapper";
import Item from "./components/Item";
import { Grid } from "./styles/Grid";
import Navbar from "./components/Navbar";
import Cart from "./components/cart/Cart";

const URL = "https://fakestoreapi.com/products";

const App: FC = () => {
  const getProducts = async (): Promise<CartItemType[]> =>
    await (await fetch(URL)).json();

  const [cartItems, setCartItems] = useState<CartItemType[]>(
    [] as CartItemType[]
  );

  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const { data, isLoading } = useQuery<CartItemType[]>("products", getProducts);

  const getTotalItems = (items: CartItemType[]) => {
    items.reduce((prevItem: number, item) => prevItem + item.amount, 0);
    setCartOpen(true);
  };

  const handleAddtoCart = (addItem: CartItemType) => {
    setCartItems((prev) => {
      const isIteminCart = prev.find((item) => item.id === addItem.id);

      if (isIteminCart) {
        return prev.map((item) =>
          item.id === addItem.id ? { ...item, amount: item.amount + 1 } : item
        );
      }
      return [...prev, { ...addItem, amount: 1 }];
    });
  };

  const handleRemovefromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((prevItem, currItem) => {
        if (currItem.id === id) {
          if (currItem.amount === 1) return prevItem;
          return [...prevItem, { ...currItem, amount: currItem.amount - 1 }];
        } else {
          return [...prevItem, currItem];
        }
      }, [] as CartItemType[])
    );
  };

  return (
    <>
      <GlobalStyled />
      <Navbar getTotalItems={getTotalItems} cartItems={cartItems} />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Wrapper>
          <Cart
            cartItems={cartItems}
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
            handleAddtoCart={handleAddtoCart}
            handleRemovefromCart={handleRemovefromCart}
          />
          <Grid>
            {data?.map((item) => (
              <Item
                key={item.id}
                handleAddtoCart={handleAddtoCart}
                item={item}
              />
            ))}
          </Grid>
        </Wrapper>
      )}
    </>
  );
};

export default App;
