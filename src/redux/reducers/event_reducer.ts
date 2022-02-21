import axios from "axios";
import { AppDispatch } from "./../index";
import { IUser } from "./../../models/IUser";
import {
  EventAction,
  EventActionEnum,
  EventState,
  setEventsAction,
  setGuestAction,
} from "./types";
import React from "react";
import { IEvent } from "../../hooks/IEvent";
import UsersService from "../../api/api";

const initialState: EventState = {
  guests: [],
  events: [],
};

const eventReducer = (
  state = initialState,
  action: EventAction
): EventState => {
  switch (action.type) {
    case EventActionEnum.SET_EVENTS: {
      return { ...state, events: action.payload };
    }
    case EventActionEnum.SET_GUESTS: {
      return { ...state, guests: action.payload };
    }
    default:
      return state;
  }
};

export const actionsEvent = {
  setEvent: (payload: Array<IEvent>): setEventsAction => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  setGuest: (payload: Array<IUser>): setGuestAction => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = UsersService.getUsers();
      dispatch(actionsEvent.setGuest(response.data));
    } catch (e) {
      console.log(e);
    }
  },
};

export default eventReducer;
