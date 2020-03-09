import React from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Home/NavBar";
import FrontPage from "./Home/FrontPage";
import AddPet from "./sellers/AddPet";
import SinglePet from "./Home/SinglePet";
import CartComponent from "./Home/CartComponent";
import Register from "./Users/Register";
import { UserProvider } from "./context/user-context/UserProvider";
import Login from "./Users/Login";
import PrivateRoute from "./privateroute/PrivateRoute";

function App() {
  return (
    <div className='App'>
      <Router>
        <DogProvider>
          <NavBar />
          <Switch>
            <UserProvider>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/' component={FrontPage}/>
              <Route exact path='/view/:id' component={SinglePet} />
              <Route exact path='/cart' component={CartComponent} />
              <Route exact path='/seller' component={AddPet}/>
            </UserProvider>
          </Switch>
        </DogProvider>
      </Router>
    </div>
  );
}

export default App;
