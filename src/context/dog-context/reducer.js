//
import {
  FETCH_PET,
  ADD_DOG,
  SINGLE_PET,
  GET_CART,
  HANDLE_PET_FILTER,
  HANDLE_BREED_FILTER,
  SEARCH,
  DELETE_CART
} from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_PET:
      return {
        ...state,
        animals: action.payload
      };
    case GET_CART:
      return {
        ...state,
        cart: action.payload
      };
    case SINGLE_PET:
      return {
        ...state,
        view_pet: action.payload
      };
    case ADD_DOG:
      state.anim = true
      return {
        ...state,
        add_cart: [action.payload, ...state.cart]
      };
    case HANDLE_PET_FILTER:
      return {
        ...state,
        dogs: action.payload
      };
    case HANDLE_BREED_FILTER:
      return {
        ...state,
        breeds: action.payload
      };
    case SEARCH:
      return {
        ...state,
        search_pets: action.payload, 
        value: action.value
      };
    case DELETE_CART:
      return {
        ...state,
        delete_msg: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
