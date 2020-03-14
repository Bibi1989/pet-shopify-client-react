import React, { useState, useContext, useEffect } from "react";
import { Button, Menu } from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
import { useParams } from "react-router-dom";
import { RatingExampleStar } from "../UiComponets/UiComponents";
import { SingleParent, Select } from "../StyleComponent";
import Products from "./Products";
import FilteredComponent from "./SingleComponents/FilteredComponent";
import '../App.css'
import Loader from "../UiComponets/Loader";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SinglePet = () => {
  const {
    view_pet,
    get_single_pet,
    addToCart,
    getCart,
    dogs,
    handlePets,
  } = useContext(DogContext);
  const [quan, setQuan] = useState("")
  const handleSelect = ({ target: { value } }) => {
    setQuan(value)
  }
  const handleCart = pet => {
    const pet_body = {
      ...pet,
      quantity: quan
    }
    addToCart(pet_body);
    getCart();
  };
  const { id } = useParams();
  useEffect(() => {
    get_single_pet(id);

    // eslint-disable-next-line
  }, [id]);

  if(view_pet.length === 0) return (<div style={{padding: "10%", textAlign: "center"}}><Loader /></div>)

  return (
    <>
      <SingleParent>
        <div className='first'>
          <div className='first-sub-child'>
            <img
              src={view_pet.image_url}
              alt={view_pet.image_url}
              width='70%'
              height='50%'
            />
          </div>
          <div className='second-sub-child'>
            <h2>{view_pet.name}</h2>
            <h3>{view_pet.breed}</h3>
            <p className='brand'>{view_pet.description}</p>
            <RatingExampleStar />
            <div className='price'>
              <div>
                <span>&#8358;</span> <span>{view_pet.price}</span>
              </div>
              <div style={{ color: "orangered" }}>
                <span>&#8358;</span>{" "}
                <span style={{ textDecoration: "line-through" }}>
                  {parseInt(view_pet.price) + 1000}
                </span>
              </div>
              <Button
                content='Add To Cart'
                size='mini'
                icon='cart'
                labelPosition='left'
                onClick={() => handleCart(view_pet)}
              />
            </div>

            <div>
              <h2>Quantity</h2>
              {/* <Quantity handleIncrement={handleIncrement} count={count} /> */}
              <Select onChange={handleSelect}>
                <option selected='false'> Select unit</option>
                {array.map(a => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Select>
            </div>
          </div>
        </div>

        <div className='second'>
          <Menu vertical style={{ width: "90%" }}>
            <Menu.Item style={{ cursor: "pointer" }}>
              <h4
                onClick={() => {
                  handlePets("");
                }}
              >
                All Categories
              </h4>
            </Menu.Item>
            <Menu.Item link onClick={() => handlePets("dogs")}>
              Dogs
            </Menu.Item>
            <Menu.Item link onClick={() => handlePets("cats")}>
              Cats
            </Menu.Item>
            <Menu.Item link onClick={() => handlePets("birds")}>
              Birds
            </Menu.Item>
            <Menu.Item link onClick={() => handlePets("rabbits")}>
              Rabbits
            </Menu.Item>
            <Menu.Item link onClick={() => handlePets("monkeys")}>
              Monkeys
            </Menu.Item>
          </Menu>
        </div>
      </SingleParent>
      {!dogs ? <FilteredComponent dogs={dogs} /> : <Products />}
    </>
  );
};

export default SinglePet;
