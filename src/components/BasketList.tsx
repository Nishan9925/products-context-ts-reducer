import { useContext, useState } from "react";
import { ProductContext } from "../context/context";
import { BasketItem } from "./BasketItem";

export const BasketList = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Outside of context");
  }
  const { state, dispatch } = context;
  
  const [cart, setCart] = useState;
  return (
    <div>
      <h3>Basket List</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{
            {cart.map((elm) => 
            <BasketItem 
                key={elm.id}
            />)}
            }</tbody>
      </table>
    </div>
  );
};
