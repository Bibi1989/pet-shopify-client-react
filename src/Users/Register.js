import React, { useState, useContext } from "react";
import { Form, Button, Label } from "semantic-ui-react";
import { UserContext } from "../context/user-context/UserProvider";
import { useHistory } from "react-router-dom";
import './Register.style.css'

const Register = () => {
  const { handleRegister, register_error } = useContext(UserContext);
  const history = useHistory();
  const [bool, setBool] = useState("");
  const [error, setError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    password: ""
  });
  const handleInput = ({ target: { value, name } }) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  const handleUser = e => {
    const value = e.target.value;
    setBool(value);
  };

  const data = {
    name: values.name,
    phone: values.phone,
    email: values.email,
    password: values.password,
    isSeller: bool
  };

  const onSubmit = e => {
    e.preventDefault();
    if (confirmPassword !== values.password) {
      return setError("Password do not match")
    }
    handleRegister(data, history);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Register</h1>
      <Form onSubmit={onSubmit} style={{ padding: "5% 10%" }}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label={register_error.name ? (<p className="error">Full Name field is empty, please fill in this field</p>) : (<p>Full Name...</p>)}
            name='name'
            onChange={handleInput}
            placeholder='Full names'
          />
          <Form.Input
            fluid
            label={register_error.phone ? (<p className="error">Phone Number field is empty, please fill in this field</p>) : (<p>Phone Number...</p>)}
            name='phone'
            onChange={handleInput}
            placeholder='Phone Number'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            type='email'
            fluid
            label={register_error.email ? (<p className="error">{register_error.email}</p>) : (<p>Email Address...</p>)}
            name='email'
            onChange={handleInput}
            placeholder='Email Address'
          />
          <Form.Input
            fluid
            label={register_error.password ? (<p className="error">{register_error.password}</p>) : (<p>Password...</p>)}
            name='password'
            onChange={handleInput}
            placeholder='Password'
          />
        </Form.Group>
        <Label><p className="error">{typeof register_error === 'string' ? register_error : ""}</p></Label>
        <Form.Input
          fluid
          label={error ? (<p className="error">{error}</p>) : (<p>Confirm Password...</p>)}
          name='confirmPassword'
          placeholder='Confirm Password'
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <select style={{ margin: "2% 0" }} onChange={handleUser}>
          <option value='' selected='false'>
            Select User Type
          </option>
          <option value='buyer'>Buyer</option>
          <option value='seller'>Seller</option>
        </select>
        <Button type='submit'>Register</Button>
      </Form>
    </div>
  );
};

export default Register;
