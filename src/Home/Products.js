import React, { useContext, useEffect } from "react";
import DogProducts from "./SingleComponents/DogProducts";
import CatProducts from "./SingleComponents/CatProducts";
import { DogContext } from "../context/dog-context/DogProvider";
import MonkeyProduct from "./SingleComponents/MonkeyProducts";
import BirdProduct from "./SingleComponents/BirdProducts";
import { Container, FilteredContainer } from "../StyleComponent";
import RabbitProduct from "./SingleComponents/RabbitProduct";

const Products = () => {
  let { pets, dogs, breeds, name, breed, search_pets } = useContext(
    DogContext
  );
  useEffect(() => {
    pets = pets
  }, [pets, search_pets])
  // let animals = pets
  pets = search_pets ? pets : search_pets;
  console.log(search_pets)
  return (
    <>
      {name || breed ? (
        <>
          <div style={line}>
            {breed && (
              <>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "3.2rem",
                    color: "#777"
                  }}
                >
                  {breed}
                </h1>
                <FilteredContainer>
                  {breeds !== undefined &&
                    breeds.map(pet => {
                      return (
                        pet.name === name && (
                          <DogProducts key={pet._id} pet={pet} />
                        )
                      );
                    })}
                </FilteredContainer>
              </>
            )}
            {dogs && (
              <>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: "3.2rem",
                    color: "#777"
                  }}
                >
                  All {name}
                </h1>
                <FilteredContainer>
                  {dogs.map(pet => {
                    return (
                      pet.name === name && (
                        <DogProducts key={pet._id} pet={pet} />
                      )
                    );
                  })}
                </FilteredContainer>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div style={line}>
            <h1
              style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}
            >
              Dogs Categories
            </h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "dogs" && <DogProducts key={pet._id} pet={pet} />
                );
              })}
            </Container>
          </div>

          <div style={line}>
            <h1
              style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}
            >
              Cats Categories
            </h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "cats" && <CatProducts key={pet._id} pet={pet} />
                );
              })}
            </Container>
          </div>

          <div style={line}>
            <h1
              style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}
            >
              Monkeys Categories
            </h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "monkeys" && (
                    <MonkeyProduct key={pet._id} pet={pet} />
                  )
                );
              })}
            </Container>
          </div>

          <div style={line}>
            <h1
              style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}
            >
              Birds Categories
            </h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "birds" && (
                    <BirdProduct key={pet._id} pet={pet} />
                  )
                );
              })}
            </Container>
          </div>

          <div style={line}>
            <h1
              style={{ textAlign: "center", fontSize: "3.2rem", color: "#777" }}
            >
              Rabbit Categories
            </h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "rabbits" && (
                    <RabbitProduct key={pet._id} pet={pet} />
                  )
                );
              })}
            </Container>
          </div>
        </>
      )}
    </>
  );
};

const line = {
  borderTop: "1px solid #999",
  padding: "2% 0"
};

export default Products;
