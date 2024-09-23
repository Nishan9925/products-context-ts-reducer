import { IAction, IState } from "./types";


export const reducer = (state: IState, action:IAction):IState => {
    switch (action.type) {

        default:
            return state;
    }
}