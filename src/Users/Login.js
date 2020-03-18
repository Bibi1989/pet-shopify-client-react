import React, { useContext, useState, useEffect, useRef } from "react";
import { Form, Button } from "semantic-ui-react";
import { UserContext } from "../context/user-context/UserProvider";
import { useHistory } from "react-router-dom";
import Loader from 'react-loader-spinner'

const Login = () => {
  const { handleLogin, login_error, loading } = useContext(UserContext);
  const history = useHistory();
  const lab1 = useRef()
  const lab2 = useRef()
  useEffect(() => {
    const time = setTimeout(() => {
      lab1.current.innerText = null
      lab2.current.innerText = null
    }, 30000)

    return () => {
      clearTimeout(time)
    }
  }, [])
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
  return (
    <div className="page">
      <h1 style={{ textAlign: "center", paddingTop: "5%" }}>Login</h1>
      <Form onSubmit={(e) => handleLogin(values, history, e)} style={{ padding: "7.1% 30%" }}>
        <Form.Field>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleInput}
            />
            <label ref={lab1}>{login_error.email ? (<i className="fas fa-exclamation-circle error"> {login_error.email}</i>) : null}</label>
        </Form.Field>
        <Form.Field>
          <input
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleInput}
            />
            <label ref={lab2}>{login_error.password ? (<i className="fas fa-exclamation-circle error">{typeof login_error === 'string' ? login_error : login_error.password}</i>) : null}</label>
        </Form.Field>
        <Button type='submit' style={{ display: "flex", margin: "auto" }}>
          <span style={{paddingRight: '10px'}}>Login</span> <span>{loading ? <Loader type="Oval" color="teal" width={14} height={14} timeout={3000} /> : null}</span>
        </Button>
      </Form>
    </div>
  );
};

export default Login;
