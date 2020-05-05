import { IAction } from "./actions";
import { AppConstants } from "./constants";
import { Map, fromJS } from "immutable";

interface IReducer<T> {
  (state: T, action: IAction): T;
}

const initialState = fromJS({
  isLoading: false,
});

export const AppReducer: IReducer<Map<string, any>> = (
  state: Map<string, any> = initialState,
  action: IAction
) => {
  switch (action.type) {
    case AppConstants.SHOW_LOADER:
      return state.set("isLoading", action.payload);
    case AppConstants.SET_ASTRONAUTS:
      return state.set("astronauts", action.payload);
    default:
      return state;
  }
};
