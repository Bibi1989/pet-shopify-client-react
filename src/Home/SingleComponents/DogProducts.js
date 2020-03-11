import React, { useContext, useEffect, useState } from "react";
import { DogContext } from "../../context/dog-context/DogProvider";
import {PetCardUi} from '../../UiComponets/UiComponents'

const DogProducts = ({ pet }) => {
  const { addToCart, getCart, loading } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];
  const [state, setState] = React.useState(false)

  useEffect(() => {
    getCart()
    console.log(loading)
  }, [state, loading])
  const handleCart = pet => {
    const pet_body = {
      ...pet,
      quantity: "1"
    }
    setState(!state)
    addToCart(pet_body, id);
  };
  return (
    <div>
      <PetCardUi pet={pet} handleCart={handleCart} />
    </div>
  );
};

export default DogProducts;
