import React, { useContext } from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'
import Loader from '../../UiComponets/Loader'
import { PetCardUi } from '../../UiComponets/UiComponents'
import { DogContext } from '../../context/dog-context/DogProvider'

const DogCategory = () => {
    const { addToCart, getCart, pets } = useContext(DogContext);
    const { id } = JSON.parse(localStorage.getItem("users")) || [];
    const [state, setState] = React.useState(false)
    const {name} = useParams()

    React.useEffect(() => {
        getCart()

        // eslint-disable-next-line
    }, [state])
    const handleCart = pet => {
        const pet_body = {
            ...pet,
            quantity: "1"
        }
        setState(!state)
        addToCart(pet_body, id);
    };

    if(pets.length === 0) return (<div style={{padding: "15% 10%", textAlign: "center"}}><Loader /></div>)

    return (
        <>
            <h1 style={{ padding: "5% 0 1% 0", textAlign: "center", textTransform: 'capitalize' }}>All {name}</h1>
            <Grid>
                {pets.map(pet => pet.name === `${name}` && <PetCardUi key={pet._id} pet={pet} handleCart={handleCart} />)}
            </Grid>
        </>
    )
}

export default DogCategory

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 3% 10%;
`
