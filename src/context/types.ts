import { Dispatch } from "react";

export interface IProduct {
  id: number;
  name: string;
  price: number;
  picture: string;
}

export interface IState {
  products: IProduct[];
}

export interface IAction {
  type: string;
  payload?: unknown;
}

export interface IContext {
  state: IState;
  dispatch: Dispatch<IAction>;
}
