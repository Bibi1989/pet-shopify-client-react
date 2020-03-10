import React, { useContext } from "react";
import {PetCardUi} from "../../UiComponets/UiComponents";
import { DogContext } from "../../context/dog-context/DogProvider";

const BirdProduct = ({ pet }) => {
  const { addToCart, getCart } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];
  const handleCart = (pet) => {
    const pet_body = {
      ...pet,
      quantity: "1"
    }
    let order = JSON.parse(localStorage.getItem("orders")) || []
    order.push(pet_body)
    localStorage.setItem("orders", JSON.stringify(order))
    getCart();
    getCart(id);
  };
  return (
    <div>
      <PetCardUi pet={pet} handleCart={handleCart} />
    </div>
  );
};

export default BirdProduct;

