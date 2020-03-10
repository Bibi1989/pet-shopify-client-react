import React, { useContext, useEffect, useState } from "react";
import { Container, Item, Label, Button } from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
import {Select} from '../StyleComponent'
import Footer from "./Footer";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CartComponent = () => {
  const { getCart, deleteCart, addCart, cart } = useContext(DogContext);
  let carts = JSON.parse(localStorage.getItem("orders"))
  const [state, setState] = useState(false)

  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, [state]);

  const handleRemove = id => {
    deleteCart(id);
    carts = carts.filter(cart => cart.id !== id)
    localStorage.setItem("orders", JSON.stringify(carts))
  };

  const handleQuantity = (e, id) => {
    carts = carts.map(cart => {
      if(cart.id === id) {
        cart.quantity = e.target.value
      }
      return cart
    })
    setState(!state)
    localStorage.setItem("orders", JSON.stringify(carts))
  }

  const total_price = carts === null ? 0 : carts.reduce((a, v) => a += (parseInt(v.price) * parseInt(v.quantity)), 0)

  return (
    <>
    <Container>
      <h1>Your Cart</h1>
      {carts !== null &&
        carts.map(a => (
          <Item.Group key={a.id} divided style={{borderBottom: '1px solid #999'}}>
            <Item>
              <Item.Image src={a.image_url} width='200px' />

              <Item.Content>
                <Item.Header as='a'>{a.name}</Item.Header>
                <Item.Meta>
                  <span className='cinema'>{a.description}</span>
                </Item.Meta>
                <Item.Description>{a.location}</Item.Description>
                <Item.Extra>
                  <Label>
                    <span>Quantity</span>{" "}
        <span style={{ color: "teal" }}>{a.quantity}</span>
                  </Label>
                  <Label>
                    <span>&#8358;</span> {(a.price).toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2})}
                  </Label>
                  <Label>
                    <span>&#8358;</span> {(parseInt(a.price) * parseInt(a.quantity)).toLocaleString("en-GB")}
                  </Label>

                  <Button
                    onClick={() => handleRemove(a.id)}
                    color='red'
                    floated='right'
                    >
                    Remove Item
                  </Button>
                <Item.Description>
                  <Select onChange={(e) => handleQuantity(e, a.id)}>
                    {array.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </Select>
                </Item.Description>
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        ))}
        <div style={{padding: '30px 0', display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <h3 style={{color: '#555'}}>Cart Total Price</h3>
          <Button primary floated='right' style={{display: 'flex', marginBottom: '20px'}}>
          <h1>&#8358;</h1> <h1>{total_price.toLocaleString("en-US")}</h1>
          </Button>
          <Button primary floated='right'>
            <h4>Check Out</h4>
          </Button>
        </div>

    </Container>
    </>
  );
};

export default CartComponent;
