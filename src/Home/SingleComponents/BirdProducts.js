import React, { useContext, useEffect } from "react";
import {PetCardUi} from "../../UiComponets/UiComponents";
import { DogContext } from "../../context/dog-context/DogProvider";

const BirdProduct = ({ pet }) => {
  const { addToCart, getCart } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];

  const [state, setState] = React.useState(false)

  useEffect(() => {
    getCart()
  }, [state])

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

export default BirdProduct;

