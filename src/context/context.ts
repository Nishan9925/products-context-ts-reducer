import { IContext, IState } from "./types";
import React from "react";

export const initialState: IState = {
  products: [
    {
      id: 101,
      name: "Psychology Big Ideas",
      price: 100,
      picture:
        "https://m.media-amazon.com/images/I/81LDP+GDKVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 102,
      name: "Psychology",
      price: 200,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFff1IxzrTTtXPBV02tDv8rv8Ks682aPIEbA&s",
    },
    {
      id: 103,
      name: "Islam",
      price: 300,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNSVmx5wcfQSj235YxA16m1VHXicwScBuyhA&s",
    },
    {
      id: 104,
      name: "Economics",
      price: 600,
      picture:
        "https://images-na.ssl-images-amazon.com/images/I/81c6E2VdT3L._AC_UL600_SR600,600_.jpg",
    },
    {
      id: 105,
      name: "Politics",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yWGtLdEt_3KM762RjFJCwbBqjfLKqWLfOg&s",
    },
    {
      id: 106,
      name: "Science",
      price: 900,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-SvCOPQsxVPkaCI3V1V6vkY_b7oJiAKe3cqlVXgg-TVDSV_4",
    },
    {
      id: 107,
      name: "History",
      price: 700,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQppO11zsg7vgn38jiwkfIPYJJpAazuKapoFg&s",
    },
    {
      id: 108,
      name: "Ecology",
      price: 600,
      picture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkBmTOeDcm2f2l_GaYDp65K8CIdJ8T89djQ&s",
    },
  ],
};

export const ProductContext = React.createContext<IContext | undefined>(
  undefined
);
