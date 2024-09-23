import { useContext } from "react";
import { ProductContext } from "../context/context";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("Outside of context");
  }
  const { state, dispatch } = context;
  return (
    <>
      <h3>Product List</h3>
      {state.products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </>
  );
};
