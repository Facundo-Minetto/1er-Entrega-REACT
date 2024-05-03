import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);

    if (exist) {
      let newArray = cart.map((elemento) => {
        if (elemento.id === product.id) {
          //modificacion
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      }); //map retorna un []

      setCart(newArray);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const clearCartAlert = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      position: "center",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Si, quiero",
      denyButtonText: "No, volver atras",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        clearCart();
        Swal.fire({
          title: "Carrito borrado",
          icon: "success",
        });
      } else if (resultado.isDenied) {
        Swal.fire({
          title: "El carrito queda como estaba",
          icon: "info",
        });
      }
    });
  };

  const deleteById = (id) => {
    const newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
  };

  const isInCart = (id) => {
    let bool = cart.some((product) => product.id === id); //devuelve un booleano
    return bool;
  };

  const getQuantityById = (id) => {
    let product = cart.find((elemento) => elemento.id === id);
    return product?.quantity;
  };

  const getTotalPrice = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return total;

    // let total = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   total += cart[i].quantity * cart[i].price;
    // }
    // return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    clearCartAlert,
    deleteById,
    getQuantityById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
