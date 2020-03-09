import React, { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";
import reducer from "./reducer";
import decode from "jwt-decode";
import {
  FETCH_PET,
  ADD_DOG,
  SINGLE_PET,
  ERRORS,
  GET_CART,
  HANDLE_BREED_FILTER,
  HANDLE_PET_FILTER,
  SEARCH,
  DELETE_CART
} from "./types";

const initialState = {
  animals: [],
  view_pet: [],
  add_cart: [],
  cart: [],
  dogs: [],
  breeds: [],
  search_pets: [],
  delete_msg: ""
};
const arrayOfOrders = JSON.parse(localStorage.getItem("orders")) || [];

export const DogContext = createContext();

export const DogProvider = ({ children }) => {
  const url = `https://pet-shopify.herokuapp.com/animals`;
  const [state, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");

  // all pets
  const fetchPets = async () => {
    try {
      const response = await axios.get(url);
      dispatch({ type: FETCH_PET, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  const fetchSinglePet = async id => {
    try {
      const response = await axios.get(`https://pet-shopify.herokuapp.com/animals/${id}`);
      dispatch({ type: SINGLE_PET, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  const handlePets = text => {
    setName(text);
    const filteredDogs = state.animals.filter(pet => pet.name === text);
    dispatch({ type: HANDLE_PET_FILTER, payload: filteredDogs });
  };

  const handleBreed = text => {
    setBreed(text.name);
    const filteredBreed = state.animals.filter(pet => pet.breed === text.name);
    dispatch({ type: HANDLE_BREED_FILTER, payload: filteredBreed });
  };

  const onSearch = value => {
    const filtered = state.animals.filter(
      animal => animal.breed.toLowerCase().includes(value.toLowerCase()) > 0
    );
    dispatch({ type: SEARCH, payload: filtered });
  };

  const addToCart = async (body, id) => {
    try {
      const data = {
        id: body._id,
        name: body.name,
        breed: body.breed,
        image_url: body.image_url,
        description: body.description,
        price: body.price,
        category_id: body._id,
        user_id: id,
        quantity: body.quantity,
      };
      let check = arrayOfOrders.filter(order => order.id === body._id)
      const token = localStorage.getItem("x-auth");
      if(check.length > 0) {
        return arrayOfOrders.map(order => {
          if(order.id === data.id) {
            order.quantity = parseInt(data.quantity) + parseInt(order.quantity)
            return localStorage.setItem("orders", JSON.stringify(arrayOfOrders))
            
          }
        })
      }
      arrayOfOrders.push(data)
      localStorage.setItem("orders", JSON.stringify(arrayOfOrders))
      const response = await axios.post(`https://pet-shopify.herokuapp.com/orders`, data, {
        headers: {
          "content-type": "application/json",
          "x-auth": `${token}`
        }
      });
      dispatch({ type: ADD_DOG, payload: response.data.data });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  const getCart = async id => {
    try {
      id = id !== undefined ? id : "";
      const token = localStorage.getItem("x-auth");
      const response = await axios.get(`https://pet-shopify.herokuapp.com/orders`, {
        headers: {
          "content-type": "application/json",
          "x-auth": token
        }
      });
      const user = decode(token);
      let { data } = response.data;
      dispatch({
        type: GET_CART,
        payload: data.filter(res => res.user_id === user.id)
      });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  const deleteCart = async id => {
    try {
      const token = localStorage.getItem("x-auth");
      await axios.delete(`https://pet-shopify.herokuapp.com/orders/${id}`, {
        headers: {
          "content-type": "application/json",
          "x-auth": token
        }
      });
      dispatch({
        type: DELETE_CART,
        payload: "Item deleted"
      });
    } catch (error) {
      dispatch({ type: ERRORS, payload: error.message });
    }
  };

  useEffect(() => {
    fetchPets();
    getCart();
    // eslint-disable-next-line
  }, [url]);

  return (
    <DogContext.Provider
      value={{
        pets: state.animals,
        get_single_pet: fetchSinglePet,
        view_pet: state.view_pet,
        addToCart,
        carts: state.cart,
        getCart,
        handlePets,
        handleBreed,
        dogs: state.dogs,
        breeds: state.breeds,
        name,
        breed,
        onSearch,
        search_pets: state.search_pets,
        deleteCart
      }}
    >
      {children}
    </DogContext.Provider>
  );
};
