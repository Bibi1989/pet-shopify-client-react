import React, { useContext } from "react";
import DogProducts from "./SingleComponents/DogProducts";
import CatProducts from "./SingleComponents/CatProducts";
import { DogContext } from "../context/dog-context/DogProvider";
import MonkeyProduct from "./SingleComponents/MonkeyProducts";
import BirdProduct from "./SingleComponents/BirdProducts";
import { Container, FilteredContainer } from "../StyleComponent";
import RabbitProduct from "./SingleComponents/RabbitProduct";
import RecentProduct from "./SingleComponents/RecentProducts";
import Loader from '../UiComponets/Loader'

const Products = () => {
  let { pets, dogs, breeds, name, breed, search_pets, value } = useContext(
    DogContext
  );

  // let animals = pets
  pets = search_pets.length > 0 ? search_pets : pets;
  let search = search_pets
  console.log(search)
  const recentPets = [...pets].slice(0, 5)
  if(pets.length === 0) return (<div style={{padding: "10%", textAlign: "center"}}><Loader /></div>)
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
          {!value && <div>
            <h1 style={{padding: "5% 0 1% 0", textAlign: "center"}}>Recent Pets</h1>
            <Container>
              {recentPets.map(pet => {
                return (
                  pet.name === "dogs" && <RecentProduct key={pet._id} pet={pet} />
                );
              })}
            </Container>
          </div>}
          
          <div>
            <h1 style={{padding: "5% 0 1% 0", textAlign: "center"}}>{value ? "Search Pets" : "Pets By Category"}</h1>
            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "dogs" && <DogProducts key={pet._id} pet={pet} />
                );
              })}
            </Container>

            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "cats" && <CatProducts key={pet._id} pet={pet} />
                );
              })}
            </Container>

            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "monkeys" && (
                    <MonkeyProduct key={pet._id} pet={pet} />
                  )
                );
              })}
            </Container>

            <Container>
              {pets.map(pet => {
                return (
                  pet.name === "birds" && (
                    <BirdProduct key={pet._id} pet={pet} />
                  )
                );
              })}
            </Container>

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
