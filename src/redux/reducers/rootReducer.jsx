import {
  GET_ALL_USERS,
  GET_USER_LOGIN,
  GET_USER_HOURS,
  GET_USER_TURNS
  } from "../actions/actionTypes";
  
  const initialState = {
    users: [],
    userLogin: [],
    userHours: {},
    userTurns: []
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_USERS:
        return {
          ...state,
          users: action.payload
        };
        case GET_USER_LOGIN:
          // console.log(action.payload, "payload reducersss")
          // console.log(state.userLogin, "stateeee")
          return {
            ...state,
            userLogin: action.payload
          };
          case GET_USER_HOURS:
          return {
            ...state,
            userHours: action.payload
          };
          case GET_USER_TURNS:
            return{
              ...state,
              userTurns: action.payload
            };
      default:
        return state;
    }
  }
  