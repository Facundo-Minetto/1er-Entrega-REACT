import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice, clearCartAlert } =
    useContext(CartContext);
  let total = getTotalPrice();

  return (
    <Cart
      cart={cart}
      clearCart={clearCart}
      deleteById={deleteById}
      total={total}
      clearCartAlert={clearCartAlert}
    />
  );
};

export default CartContainer;
