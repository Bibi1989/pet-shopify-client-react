import React, { useContext, useEffect } from "react";
import {
  Input,
  Menu,
  Icon,
  Button,
  Popup,
  Image,
} from "semantic-ui-react";
import { DogContext } from "../context/dog-context/DogProvider";
import { useHistory, Link } from "react-router-dom";
import decode from "jwt-decode";
import '../App.css'
import DropDownMenu from "./DropDownMenu";
import BurgerMenu from "./BurgerMenu";

export const NavBar = () => {
  const { getCart, onSearch, handlePets, handleBreed } = useContext(DogContext);
  const token = localStorage.getItem("x-auth");
  const carts = JSON.parse(localStorage.getItem("orders"));
  const history = useHistory();
  const [toggle, setToggle] = React.useState(false)
  const [state, setstate] = React.useState(false)
  
  useEffect(() => {
    getCart();
    // eslint-disable-next-line
  }, [history]);

  const user = token ? decode(localStorage.getItem("x-auth")) : "";
  const handleLogout = () => {
    localStorage.removeItem("x-auth");
    localStorage.removeItem("users");
    history.push("/login");
  };

  const handleSearch = e => {
    onSearch(e.target.value);
  };

  const handleToggle = () => {
    setstate(true)
    setToggle(!toggle)
  }

  return (
    <div>
      <Menu pointing style={sticky} secondary className="navbar">
        <div className="mobile-nav">
          <Link to='/'>
            <Menu.Item
              name='pet-shopify'
              size='max'
              color='teal'
              as='h1'
              style={{ color: "teal", fontSize: "1.3rem" }}
              onClick={() => {
                onSearch("")
                handlePets("");
                handleBreed("");
              }}
            />
          </Link>
          <BurgerMenu handleToggle={handleToggle} />
        </div>
        
        <Menu.Menu position='right' className="nav">
          {/* <CSSTransition> */}
          <Menu.Item>
            <Popup
              trigger={
                <Input
                  icon='search'
                  placeholder='Search...'
                  onChange={handleSearch}
                />
              }
              header='Pets Search'
              content='You may search by pet breed'
              on='focus'
            />
          </Menu.Item>
          {token && (
            <Button>
              <Icon name='users' size='large' color='teal' />
              <span style={{ padding: "0 5px" }}>My Wishlist</span>
            </Button>
          )}
          <Link to={`/cart`}>
            <Button icon>
              <Icon name='cart' size='big' color='teal' />{" "}
              <sup style={{ fontSize: "1rem", color: "orangered" }}>
                {carts === null ? 0 : carts.length}
              </sup>
            </Button>
          </Link>
          {token ? (
            <>
              {user.isSeller &&
                <Button style={{ margin: "0 10px" }} icon>
                  <Link to="/seller">
                    <Icon name='plus' size='large' color='teal' />
                    <span style={{ padding: "5px 5px 0 5px" }}>Sell Pet</span>
                  </Link>
                </Button>
              }
              <Button onClick={handleLogout} style={{ margin: "0 10px" }} icon>
                <Icon name='user' size='large' color='teal' />
                <span style={{ padding: "0 5px" }}>Logout</span>
              </Button>
              <div style={{ marginTop: "10px" }}>
                <Popup
                  trigger={
                    <Image
                      src='https://res.cloudinary.com/bibi198916/image/upload/c_scale,w_151/v1582566718/pet/dzclfvzd8pic46ltikqb.jpg'
                      avatar
                    />
                  }
                  on='click'
                  hideOnScroll
                  position='bottom center'
                  content={user.phone}
                  header={user.name}
                />
              </div>
            </>
          ) : (
              <>
                <Button style={{ margin: "0 10px" }} icon>
                  <Link to="/login">
                    <Icon name='user' size='large' color='teal' />
                    <span style={{ padding: "0 5px" }}>Login</span>
                  </Link>
                </Button>
                <Button icon>
                  <Link to="/register">
                    <Icon name='users' size='large' color='teal' />
                    <span style={{ padding: "0 5px" }}>Register</span>
                  </Link>
                </Button>
              </>
            )}
          {/* </CSSTransition> */}
        </Menu.Menu>
      </Menu>
      {toggle && <DropDownMenu token={token} user={user} handleSearch={handleSearch} handleLogout={handleLogout} carts={carts} state={state} setstate={setstate} />}
    </div>
  );
};

const sticky = {
  padding: "0.5% 10%",
  background: "#fff",
  position: "-webkit-sticky",
  position: "sticky",
  top: "0",
  zIndex: "10"
};

// const account = {
//   width: "40px",
//   height: "40px",
//   borderRadius: "50%",
//   fontSize: "1.5rem",
//   border: "1px solid #999",
//   textAlign: "center",
//   paddingTop: "5px",
//   marginTop: "1vh"
// };
