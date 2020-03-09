import React, { useContext } from "react";
import {PetCardUi} from "../../UiComponets/UiComponents";
import { DogContext } from "../../context/dog-context/DogProvider";

const MonkeyProduct = ({ pet }) => {
  const { addToCart, getCart } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];
  const handleCart = pet => {
    addToCart(pet, id);
    getCart(id);
  };
  return (
    <div>
      <PetCardUi pet={pet} handleCart={handleCart} />
    </div>
  );
};

export default MonkeyProduct;
