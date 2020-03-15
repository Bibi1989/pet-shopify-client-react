import React, { useContext } from "react";
import {useSpring, animated} from 'react-spring'
import { DogContext } from "../../context/dog-context/DogProvider";
import {PetCardUi} from '../../UiComponets/UiComponents'

const RecentProduct = ({ pet }) => {
  const { addToCart, getCart, loading } = useContext(DogContext);
  const { id } = JSON.parse(localStorage.getItem("users")) || [];

  const props = useSpring({config: {duration: 600}, opacity: 1, from: {opacity: 0}})

  React.useEffect(() => {
    getCart()

    // eslint-disable-next-line
  }, [loading])
  
  const handleCart = pet => {
    const pet_body = {
      ...pet,
      quantity: "1"
    }
    addToCart(pet_body, id);
    getCart(id);
  };
  return (
    <animated.div style={props}>
      <PetCardUi pet={pet} handleCart={handleCart} />
    </animated.div>
  );
};

export default RecentProduct;
