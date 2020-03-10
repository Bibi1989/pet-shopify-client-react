import React, { useContext, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../context/user-context/UserProvider";
import { useHistory } from "react-router-dom";

const Login = () => {
  const { handleLogin, login_error } = useContext(UserContext);
  console.log(login_error)
  const history = useHistory();
  const [values, setValues] = useState({
    email: "",
    password: ""
  });
  const handleInput = ({ target: { value, name } }) => {
    setValues({
      ...values,
      [name]: value
    });
  };
  const onSubmit = e => {
    e.preventDefault();
    handleLogin(values, history);
  };
  return (
    <div>
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Login</h1>
      <Form onSubmit={onSubmit} style={{ padding: "5% 30%" }}>
        <Form.Field>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
            />
            <label>{login_error.email ? (<i className="error">{login_error.email}</i>) : null}</label>
        </Form.Field>
        <Form.Field>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
            />
            <label>{login_error.password ? (<p className="error">{typeof login_error === 'string' ? login_error : login_error.password}</p>) : null}</label>
        </Form.Field>
        <Button type='submit' style={{ display: "block", margin: "auto" }}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
