import {
  GET_ALL_USERS,
  GET_USER_LOGIN
  } from "../actions/actionTypes";
  
  const initialState = {
    users: [],
    userLogin: []
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_USERS:
        return {
          ...state,
          users: action.payload
        };
        case GET_USER_LOGIN:
          return {
            ...state,
            userLogin: action.payload
          };
      default:
        return state;
    }
  }
  