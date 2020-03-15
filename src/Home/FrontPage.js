import React, { useContext } from "react";
import { Button, Menu, Dropdown } from "semantic-ui-react";
import { Slider } from "infinite-react-carousel";
import styled from "styled-components";
import Products from "../Home/Products";
import dog1 from "../images/shepherd1.jpg";
import dog2 from "../images/dog2.jpg";
import cat2 from "../images/cat2.jpg";
import monkey1 from "../images/monkey1.jpg";
import {
  dogtype,
  cattype,
  birdtype,
  rabbittype,
  monkeytype
} from "../arrayOfPets";
import { DogContext } from "../context/dog-context/DogProvider";
import { animated, useSpring } from "react-spring";

const FrontPage = () => {
  const { handlePets, handleBreed } = useContext(DogContext);
  const users = JSON.parse(localStorage.getItem("users"));

  const props = useSpring({config: {duration: 2000}, opacity: 1, from: {opacity: 0}})

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000
  };
  return (
    <animated.div style={props}>
      <h3 style={{paddingLeft: '10%', color: 'teal', paddingBottom: '1rem',  paddingTop: '1rem'}}>{users ? `Welcome ${users.name}` : null}</h3>
      <Parent>
        <div className='child-one'>
          <Menu vertical style={{ width: "90%" }}>
            <Menu.Item style={{ cursor: "pointer" }}>
              <h4
                onClick={() => {
                  handlePets("");
                  handleBreed("");
                }}
              >
                All Categories
              </h4>
            </Menu.Item>
            <Dropdown
              onClick={() => handlePets("dogs")}
              style={{ fontSize: "1.2em" }}
              item
              text='Dogs'
            >
              <Dropdown.Menu style={{ width: "130%" }}>
                {dogtype.map(dog => (
                  <Dropdown.Item key={dog}>
                    <span onClick={() => handleBreed({ name: dog })}>
                      {dog}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onClick={() => handlePets("cats")}
              style={{ fontSize: "1.2em" }}
              item
              text='Cats'
            >
              <Dropdown.Menu style={{ width: "130%" }}>
                {cattype.map(cat => (
                  <Dropdown.Item key={cat}>
                    <span onClick={() => handleBreed({ name: cat })}>
                      {cat}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onClick={() => handlePets("birds")}
              style={{ fontSize: "1.2em" }}
              item
              text='Birds'
            >
              <Dropdown.Menu style={{ width: "130%" }}>
                {birdtype.map(bird => (
                  <Dropdown.Item key={bird}>
                    <span onClick={() => handleBreed({ name: bird })}>
                      {bird}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onClick={() => handlePets("rabbits")}
              style={{ fontSize: "1.2em" }}
              item
              text='Rabbits'
            >
              <Dropdown.Menu style={{ width: "130%" }}>
                {rabbittype.map(rabbit => (
                  <Dropdown.Item key={rabbit}>
                    <span onClick={() => handleBreed({ name: rabbit })}>
                      {rabbit}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown
              onClick={() => handlePets("monkeys")}
              style={{ fontSize: "1.2em" }}
              item
              text='Monkeys'
            >
              <Dropdown.Menu style={{ width: "130%" }}>
                {monkeytype.map(monkey => (
                  <Dropdown.Item key={monkey}>
                    <span onClick={() => handleBreed({ name: monkey })}>
                      {monkey}
                    </span>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </div>
        {/* <div> */}
        <div className='child-two'>
          <div className='overlay'>
            <h1>Shop For Your Favorite Pet</h1>
            <div className='shop'>
              <Button>
                <span>Shop Now</span>
              </Button>
            </div>
          </div>
          <Slider
            style={{
              position: "relative",
              padding: "0",
              margin: "0"
            }}
            {...settings}
          >
            <div>
              <img src={dog1} alt={dog1} />
            </div>
            <div>
              <img src={dog2} alt={dog2} />
            </div>
            <div>
              <img src={cat2} alt={cat2} />
            </div>
            <div>
              <img src={monkey1} alt={monkey1} />
            </div>
          </Slider>
        </div>
        {/* </div> */}
      </Parent>
      <Products />
    </animated.div>
  );
};

const Parent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  padding: 0 10%;
  height: 70vh;

  @media(max-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    padding: 0 2%;
    height: 70vh;
  }

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 0 2%;
    height: 120vh;
  }

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 2%;
    height: 120vh;
  }

  .child-one {
    ul {
      list-style: none;
      padding: 1% 5%;
      li {
        color: #eee;
        border-bottom: 1px solid #bbb;
        padding: 5% 0;
        font-size: 1.3em;
        cursor: pointer;
        .fas {
          color: teal;
          font-size: 1.5rem;
          padding: 0 1.5rem;
        }
      }
    }
  }
  .child-two {
    color: orangered;
    position: relative;
    height: 70vh;
    img {
      width: 100%;
      height: 70vh;
    }
    .overlay {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #222222a9;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 3;
    }
    h1 {
      font-size: 3rem;
    }
  }
`;

export default FrontPage;
