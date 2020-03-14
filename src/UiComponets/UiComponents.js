import React from "react";
import { Rating, Button, Pagination, Card } from "semantic-ui-react";
import {Image, Cart, Price} from '../StyleComponent'
import moment from 'moment'
import {Link} from 'react-router-dom'

export const RatingComponent = () => (
  <Rating
    style={{ marginTop: "20px" }}
    size='mini'
    icon='star'
    defaultRating={3}
    maxRating={5}
  />
);

export const RatingExampleStar = () => (
  <Rating icon='star' defaultRating={3} maxRating={5} />
);

export const Quantity = ({ count }) => (
  <Pagination
    boundaryRange={0}
    defaultActivePage={count}
    firstItem={null}
    lastItem={null}
    siblingRange={0}
    totalPages={10}
  />
);

export const ButtonComponent = () => (
  <Button content='Add To Cart' size='mini' icon='cart' labelPosition='left' />
);

export const PetCardUi = ({ pet, handleCart }) => (
  <Card style={{ width: "250px" }}>
    <Image style={{ width: "100%", height: "150px", position: "relative" }}>
      <img src={pet.image_url} alt='cat2' width='100%' height='100%' />
      <div className='overlay'>
        <Link className='link' to={`/view/${pet._id}`}>
          <span onClick={() => window.scrollTo(0, 0)}>View Pet</span>
        </Link>
      </div>
    </Image>
    <Card.Content style={{ height: '100px', overflowY: 'auto', padding: '5px 10px'}}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card.Header style={{ color: "teal" }}>
          {pet.name.toUpperCase()}
        </Card.Header>
        <p>{moment(pet.createdAt).fromNow(true)}</p>
      </div>
      <Card.Meta>{pet.breed}</Card.Meta>
      <Card.Description>{pet.description.slice(0, 20)}</Card.Description>
    </Card.Content>
    <Card.Content style={{padding: '5px 10px'}}>
      <Price>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <div className='sub-price'>
            <span>&#8358;</span> <span>{pet.price}</span>
            <div>
              <i>-</i>
              <span>&#8358;</span>{" "}
              <span
                style={{ textDecoration: "line-through", color: "orangered" }}
              >
                {parseInt(pet.price) + 1000}
              </span>
            </div>
          </div>
          <p>{pet.location}</p>
        </div>
      </Price>
      <Cart>
        <RatingComponent />
        <Button
          content='Add To Cart'
          size='mini'
          icon='cart'
          labelPosition='left'
          onClick={() => handleCart(pet)}
        />
      </Cart>
    </Card.Content>
  </Card>
);

