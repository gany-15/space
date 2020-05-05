import { Injectable } from "@angular/core";
import { AppConstants } from "./constants";
import { AllApiService } from "../all-api.service";

export interface IAction {
  type: string;
  payload?: any;
}

interface IActionCreator {
  (...args: any[]): IAction;
}

@Injectable()
export class AppActions {
  constructor(private _allApiService: AllApiService) {}

  setAstronauts: IActionCreator = (data) => {
    return {
      type: AppConstants.SET_ASTRONAUTS,
      payload: data,
    };
  };

  setLoader: IActionCreator = (data) => {
    return {
      type: AppConstants.SHOW_LOADER,
      payload: data,
    };
  };

  getAstronauts() {
    return (dispatch) => {
      dispatch(this.setLoader(true));
      this._allApiService
        .getAstronauts()
        .subscribe((res) => dispatch(this.setAstronauts(res)));
      dispatch(this.setLoader(false));
    };
  }

  isLoading() {
    return (dispatch) => {};
  }
}
