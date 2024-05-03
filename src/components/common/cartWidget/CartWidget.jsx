import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
export const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <Link to="/cart">
      <Badge badgeContent={total} showZero color="primary">
        <BsFillCartCheckFill size="30px" color="black" />
      </Badge>
    </Link>
  );
};
