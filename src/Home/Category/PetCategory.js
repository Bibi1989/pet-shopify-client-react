import React, { useContext } from 'react'
import styled from 'styled-components'
import {useParams, useHistory} from 'react-router-dom'
import {useSpring, animated} from 'react-spring'
import Loader from '../../UiComponets/Loader'
import { PetCardUi } from '../../UiComponets/UiComponents'
import { DogContext } from '../../context/dog-context/DogProvider'

const DogCategory = () => {
    const { addToCart, getCart, pets } = useContext(DogContext);
    const { id } = JSON.parse(localStorage.getItem("users")) || [];
    const [state, setState] = React.useState(false)
    const {name} = useParams()
    const history = useHistory()

    const props = useSpring({config: {duration: 2000}, opacity: 1, from: {opacity: 0}})

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

    const handleBack = () => {
        history.goBack()
    }

    if(pets.length === 0) return (<div style={{padding: "15% 10%", textAlign: "center"}}><Loader /></div>)

    return (
        <animated.div style={props}>
            <div style={header}>
                <i className="fas fa-arrow-left" style={back} onClick={handleBack}></i>
                <h1>All {name}</h1>
            </div>
            <Grid>
                {pets.map(pet => pet.name === `${name}` && <PetCardUi key={pet._id} pet={pet} handleCart={handleCart} />)}
            </Grid>
        </animated.div>
    )
}

export default DogCategory

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    padding: 3% 10%;
`

const header = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: "5% 10%",
    textAlign: "center",
    textTransform: 'capitalize'
}

const back = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2.5rem',
    width: '4rem',
    height: '4rem',
    border: '1px solid ',
    borderRadius: '50%',

}
