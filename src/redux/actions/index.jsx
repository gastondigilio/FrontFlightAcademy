import axios from "axios";
import {
GET_ALL_USERS,
GET_USER_LOGIN,
GET_USER_HOURS,
GET_USER_TURNS
} from "./actionTypes";

export const getAllUsers = payload => {
  return async dispatch => {
    try {
      let res = await axios.get(`http://localhost:3001/users`);
      return dispatch({
        type: GET_ALL_USERS,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postCreateUser = payload => {
  console.log(payload, "soy el payload")
  return async () => {
    try {
      let res = await axios.post(`http://localhost:3001/users/create`, payload);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const loginUser = payload => {

  return async dispatch => {
    try {
      let res = await axios.post(`http://localhost:3001/users/login`, payload);

      return dispatch({
        type: GET_USER_LOGIN,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const modifyUser = payload => {
  console.log(payload);
  return async () => {
    try {
      let res = await axios.patch(`http://localhost:3001/users/upload`, payload);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserHoursById = id => {
  console.log(id, "soy el id");
  return async dispatch => {
    try {
      let res = await axios.get(`http://localhost:3001/hours?id=${id}`);
      console.log(res.data, "resoyesta")
      return dispatch({
        type: GET_USER_HOURS,

        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserTurnsById = id => {
  return async dispatch => {
    try {
      let res = await axios.get(`http://localhost:3001/nextHours?userId=${id}`);
      return dispatch({
        type: GET_USER_TURNS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postUploadUserTurns = payload => {
  return async () => {
    try {
      let res = await axios.post(`http://localhost:3001/nextHours/upload`, payload);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
};