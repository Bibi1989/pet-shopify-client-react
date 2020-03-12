import React from 'react'
import styled from 'styled-components'

const BurgerMenu = ({handleToggle}) => {
    return (
        <Burger onClick={handleToggle}>
            <div></div>
            <div></div>
            <div></div>
        </Burger>
    )
}

export default BurgerMenu

const Burger = styled.div`
    padding-top: 10px;
    padding-right: 20px;
    cursor: pointer;

    @media(min-width: 1100px) {
        display: none;
    }

    div{
        width: 30px;
        height: 3px;
        margin: 4px 0;
        background: #444;
    }
`
