import React from 'react'
import {
    Input,
    Menu,
    Icon,
    Button,
    Popup,
    Image,
} from "semantic-ui-react";
import {CSSTransition} from 'react-transition-group'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const DropDownMenu = ({ token, carts, user, handleLogout, handleSearch, state, setstate }) => {
    console.log(state)
    return (
        <Div>
            <CSSTransition
                in={state}
                appear={true}
                enter={state}
                timeout={600}
                classNames="drop"
            >
            <Menu.Menu position='right' className="show-nav">
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
                    <Button style={{ marginTop: "20px" }}>
                        <Icon name='users' size='large' color='teal' />
                        <span style={{ padding: "0 5px" }}>My Wishlist</span>
                    </Button>
                )}
                {token ? (
                    <>
                        {user.isSeller &&
                            <Button style={{ margin: "20px 0" }} icon>
                                <Link to="/seller">
                                    <Icon name='plus' size='large' color='teal' />
                                    <span style={{ padding: "5px 5px 0 5px" }}>Sell Pet</span>
                                </Link>
                            </Button>
                        }
                        <Button onClick={handleLogout} style={{ margin: "0" }} icon>
                            <Icon name='user' size='large' color='teal' />
                            <span style={{ padding: "0 5px" }}>Logout</span>
                        </Button>
                        <Link to={`/cart`}>
                            <Button icon style={{ margin: "20px 0" }}>
                                <Icon name='cart' size='big' color='teal' />{" "}
                                <sup style={{ fontSize: "1rem", color: "orangered" }}>
                                    {carts === null ? 0 : carts.length}
                                </sup>
                            </Button>
                        </Link>
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
                            <Button style={{ margin: "20px 0" }} icon>
                                <Link to="/login">
                                    <Icon name='user' size='large' color='teal' />
                                    <span style={{ padding: "0 5px" }}>Login</span>
                                </Link>
                            </Button>
                            <Button style={{ margin: "20px 0" }} icon>
                                <Link to="/register">
                                    <Icon name='users' size='large' color='teal' />
                                    <span style={{ padding: "0 5px" }}>Register</span>
                                </Link>
                            </Button>
                            <Link to={`/cart`}>
                                <Button icon style={{ margin: "20px 0" }}>
                                    <Icon name='cart' size='big' color='teal' />{" "}
                                    <sup style={{ fontSize: "1rem", color: "orangered" }}>
                                        {carts === null ? 0 : carts.length}
                                    </sup>
                                </Button>
                            </Link>
                        </>
                    )}
            </Menu.Menu>
            </CSSTransition>
        </Div>
    )
}

const Div = styled.div`
    
    
`

export default DropDownMenu
