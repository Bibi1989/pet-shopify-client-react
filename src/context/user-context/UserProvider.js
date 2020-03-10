import React, { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./userReducer";
import { REGISTER_USER, LOGIN_USER, REGISTER_ERROR, LOGIN_ERROR } from "./user-types";

const initialState = {
  registerUser: [],
  loginUser: [],
  profile: [],
  register_error: {},
  login_error: {},
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const register_url = `https://pet-shopify.herokuapp.com/users/register`;
  const login_url = `https://pet-shopify.herokuapp.com/users/login`;
  // const user_url = `https://pet-shopify.herokuapp.com/users/profile`;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleRegister = async (body, history) => {
    try {
      const response = await axios.post(register_url, body);
      localStorage.setItem("x-auth", response.data.token);
      localStorage.setItem("users", JSON.stringify(response.data.data));
      sessionStorage.setItem("pet-users", JSON.stringify(response.data.data));
      history.push('/')
      dispatch({ type: REGISTER_USER, payload: response.data.data });
    } catch (error) {
      dispatch({ type: REGISTER_ERROR, payload: error.response.data.error });
    }
  };
  
  const handleLogin = async (body, history) => {
    try {
      const response = await axios.post(login_url, body);
      localStorage.setItem("x-auth", response.data.token);
      localStorage.setItem("users", JSON.stringify(response.data.data));
      sessionStorage.setItem("pet-users", JSON.stringify(response.data.data));
      history.push('/')
      dispatch({ type: LOGIN_USER, payload: response.data.data });
    } catch (error) {
      dispatch({type: LOGIN_ERROR, payload: error.response.data.error });
    }
  };

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        users: state.registerUser,
        register_error: state.register_error,
        login_error: state.login_error,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
