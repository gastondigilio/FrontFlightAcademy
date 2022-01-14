import axios from "axios";
import {
GET_ALL_USERS,
GET_USER_LOGIN
} from "./actionTypes";

export const getAllUsers = payload => {
  return async dispatch => {
    try {
      let res = await axios(`http://localhost:3001/users`);
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
  console.log(payload, "soy el payload")
  return async () => {
    try {
      let res = await axios.post(`http://localhost:3001/users/login`, payload);
      return res.data;
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

// export const postUserLogin = payload => {
//   console.log(payload);
//   return async dispatch => {
//     return await axios
//       .post(`http://localhost:3001/users/create`, payload)
//       .then(user =>
//         dispatch({
//           type: GET_USER_LOGIN,
//           payload: user.data,
//         })
//       )
//       .catch(error => {
//         alert("Usuario o contraseña incorrectos");
//         return dispatch({
//           type: GET_USER_LOGIN,
//           payload: {},
//         });
//       });
//   };
// };