import React, { useContext } from "react";
import { DogContext } from "../../context/dog-context/DogProvider";
import {PetCardUi} from '../../UiComponets/UiComponents'

const DogProducts = ({ pet }) => {
  const { addToCart, getCart } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];
  const handleCart = pet => {
    const pet_body = {
      ...pet,
      quantity: "1"
    }
    addToCart(pet_body, id);
    getCart(id);
  };
  return (
    <div>
      <PetCardUi pet={pet} handleCart={handleCart} />
    </div>
  );
};

export default DogProducts;
