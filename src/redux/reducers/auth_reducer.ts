import { AppDispatch } from "./../index";
import { IUser } from "./../../models/IUser";
import {
  AuthState,
  AuthAction,
  AuthActionsEnum,
  SetAuthAction,
  SetErrorAction,
  SetLoadingAction,
  SetUserAction,
} from "./types";
import axios from "axios";
import UsersService from "../../api/api";

const initialState: AuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  error: "",
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case AuthActionsEnum.SET_AUTH: {
      return { ...state, isAuth: action.payload, isLoading: false };
    }
    case AuthActionsEnum.SET_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    case AuthActionsEnum.SET_LOADING: {
      return { ...state, isLoading: action.payload };
    }
    case AuthActionsEnum.SET_USER: {
      return { ...state, user: action.payload };
    }
    default:
      return state;
  }
};

export const actions = {
  setAuth: (auth: boolean): SetAuthAction => ({
    type: AuthActionsEnum.SET_AUTH,
    payload: auth,
  }),
  setError: (error: string): SetErrorAction => ({
    type: AuthActionsEnum.SET_ERROR,
    payload: error,
  }),
  setIsLoading: (isLoading: boolean): SetLoadingAction => ({
    type: AuthActionsEnum.SET_LOADING,
    payload: isLoading,
  }),
  setUser: (user: IUser): SetUserAction => ({
    type: AuthActionsEnum.SET_USER,
    payload: user,
  }),
  login:
    (username: string, password: string) => async (dispatch: AppDispatch) => {
      try {
        dispatch(actions.setIsLoading(true));
        const response = await UsersService.getUsers();
        const mockUsers = response.data.find(
          (user) => user.username === username && user.password === password
        );
        if (mockUsers) {
          localStorage.setItem("auth", "true");
          localStorage.setItem("username", mockUsers.username);
          dispatch(actions.setAuth(true));
          dispatch(actions.setUser(mockUsers));
        } else {
          dispatch(actions.setError("Некорректный логин или пароль"));
        }
        dispatch(actions.setIsLoading(false));
      } catch (e) {
        dispatch(actions.setError("Произошла ошибка"));
      }
    },
  logout: () => async (dispatch: AppDispatch) => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    dispatch(actions.setUser({} as IUser));
    dispatch(actions.setAuth(false));
  },
};

export default authReducer;
