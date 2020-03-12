import React, { useState } from "react";
import {
  Container,
  Grid,
  Form,
  TextArea,
  Label,
  Input,
  Button,
} from "semantic-ui-react";
import axios from "axios";
import { cities } from "../state-cities";
import {
  dogtype,
  cattype,
  birdtype,
  rabbittype,
  monkeytype,
  animals
} from "../arrayOfPets";

const base_url = process.env.REACT_APP_BASE_URI
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET

const AddPet = () => {
  const [name, setPet] = useState("");
  const [breed, setBreed] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [stock, setStock] = useState("");
  const [file, setFile] = useState("");

  
  // function checkFullName(name) {
    //   let splittedName = name.split(" ");
  //   let validateName = splittedName[1];
  //   return validateName;
  // }
  
  const handlePets = ({ target: { value } }) => setPet(value);
  const handleTypes = ({ target: { value } }) => setBreed(value);
  const handleDescription = ({ target: { value } }) => setDescription(value);
  const handlePrice = ({ target: { value } }) => setPrice(value);
  const handleAge = ({ target: { value } }) => setAge(value);
  const handleLocation = e => setLocation(e.target.value);
  const handlePhone = e => setPhone(e.target.value);
  const handleStock = e => setStock(e.target.value);
  
  const handleFile = e => {
      const formData = new FormData()
      formData.append('file', e.target.files[0])
      formData.append('upload_preset', upload_preset)
      axios.post(base_url, formData).then(image => setFile(image.data.secure_url)).catch(err => console.log(err))
    };
    
    const handleSubmit = e => {
      e.preventDefault();
      const data = {
        name,
        breed,
        description,
        price,
        age,
        location,
        image_url: file,
        phone,
        stock
      }
    const token = localStorage.getItem('x-auth')
    axios.post(`https://pet-shopify.herokuapp.com/animals`, data, {
        headers: {
          "Content-Type": "application/json",
          "x-auth": `${token}`
        }
      }).then(response => {
        
      }).catch(err => console.log(err));
      // window.location.reload()
  };

  return (
    <Container style={{ margin: "2rem 2%" }}>
      <h1 style={{ fontSize: "3rem" }}>Sell Your Pet</h1>
      <hr style={{ marginBottom: "2rem" }} />
      <Form onSubmit={handleSubmit}>
        <div>
          <h1>Add Your Pets</h1>
          <select onChange={handlePets} style={style}>
            <option unselectable='true'>Select A Pet</option>
            {animals.map(animal => (
              <option key={animal} value={animal.toLowerCase()}>
                {animal}
              </option>
            ))}
          </select>
        </div>
        <hr style={{ margin: "1rem 0" }} />

        <Grid columns='three' divided>
          <Grid.Row>
            <Grid.Column>
              <div>
                <h2>Add Your Dog Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Dog Type</option>
                  {dogtype.map(dog => (
                    <option key={dog} value={dog}>
                      {dog}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Cat Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Cat Type</option>
                  {cattype.map(cat => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Birds Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Pet Type</option>
                  {birdtype.map(bird => (
                    <option key={bird} value={bird}>
                      {bird}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h2>Add Your Rabbit | Squirel Type</h2>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Pet Type</option>
                  {rabbittype.map(rabbit => (
                    <option key={rabbit} value={rabbit}>
                      {rabbit}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <h1>Add Your Monkey Type</h1>
                <select onChange={handleTypes} style={style}>
                  <option unselectable='true'>Select A Pet Type</option>
                  {monkeytype.map(monkey => (
                    <option key={monkey} value={monkey}>
                      {monkey}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <hr style={{ margin: "1rem 0" }} />

        <Grid>
          <Grid.Row>
            <Grid.Column>
              <div>
                <h1>Add Your Location</h1>
                <select onChange={handleLocation} style={style}>
                  <option unselectable='true'>Select Your Location</option>
                  {cities.map(city => (
                    <option key={city.state} value={city.state}>
                      {city.state}
                    </option>
                  ))}
                </select>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <hr style={{ margin: "1rem 0" }} />

        <Label
          content='Price'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='price'
          onChange={handlePrice}
          icon='money'
          iconPosition='left'
          placeholder='Price...'
        />

        <br />
        <Label
          content='Phone Number'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='Phone Number'
          onChange={handlePhone}
          icon='phone'
          iconPosition='left'
          placeholder='Phone Number...'
        />

        <br />
        <Label
          content='Numbers of pets to sell'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='Stocks'
          onChange={handleStock}
          icon=''
          iconPosition='left'
          placeholder='Stock Availability...'
        />

        <br />
        <hr style={{ margin: "1rem 0" }} />
        <Label
          content='Pet Description'
          as='h1'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.2rem" }}
        />
        <TextArea
          name='description'
          onChange={handleDescription}
          placeholder='Short Description of the pet and breed'
        />

        <hr style={{ margin: "1rem 0" }} />
        <Label
          content='Age Of Pet'
          style={{ padding: "10px", margin: "1% 0", fontSize: "1.3rem" }}
        />
        <br />
        <Input
          name='age'
          onChange={handleAge}
          type='number'
          icon='amilia'
          iconPosition='left'
          placeholder='Age of pet...'
        />
        <hr style={{ margin: "1rem 0" }} />
        <Input
          type='file'
          name='file'
          onChange={handleFile}
          loading
          icon='user'
          placeholder='Upload image...'
        />
        {file && <Button type='submit' primary style={{marginLeft: "30px"}}>Submit {file && <i className="fas fa-cog fa-spin"></i>}</Button>}
        {/* <Modal
          style={{width: '350px', height: '200px', position: 'absolute', left: '50%', transform: 'translateX(-50%'}}
          trigger={}
          header='Reminder!'
          content='Call Benjamin regarding the reports.'
          actions={['Snooze', { key: 'done', content: 'Done', positive: false }]}
  /> */}
      </Form>
    </Container>
  );
};

const style = {
  margin: "1rem 0",
  padding: "1rem 2rem",
  outline: "none",
  border: "1px solid teal",
  borderRadius: "5px",
  color: "teal",
  fontSize: "1.2rem"
};

export default AddPet;
