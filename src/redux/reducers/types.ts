import { IEvent } from "./../../hooks/IEvent";
import { IUser } from "../../models/IUser";

export type AuthState = {
  isAuth: boolean;
  user: IUser;
  isLoading: boolean;
  error: string;
};

export enum AuthActionsEnum {
  SET_AUTH = "SET_AUTH",
  SET_USER = "SET_USER",
  SET_LOADING = "SET_LOADING",
  SET_ERROR = "SET_ERROR",
}

export type SetAuthAction = {
  type: AuthActionsEnum.SET_AUTH;
  payload: boolean;
};

export type SetUserAction = {
  type: AuthActionsEnum.SET_USER;
  payload: IUser;
};

export type SetLoadingAction = {
  type: AuthActionsEnum.SET_LOADING;
  payload: boolean;
};

export type SetErrorAction = {
  type: AuthActionsEnum.SET_ERROR;
  payload: string;
};

export type AuthAction =
  | SetAuthAction
  | SetUserAction
  | SetLoadingAction
  | SetErrorAction;

export type EventState = {
  guests: Array<IUser>;
  events: Array<IEvent>;
};

export enum EventActionEnum {
  SET_GUESTS = "SET_GUESTS",
  SET_EVENTS = "SET_EVENTS",
}

export type setGuestAction = {
  type: EventActionEnum.SET_GUESTS;
  payload: Array<IUser>;
};

export type setEventsAction = {
  type: EventActionEnum.SET_EVENTS;
  payload: Array<IEvent>;
};

export type EventAction = setEventsAction | setGuestAction;
