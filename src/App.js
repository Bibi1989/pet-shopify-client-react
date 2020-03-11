import React, { Suspense, lazy } from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Home/NavBar";
// import FrontPage from "./Home/FrontPage";
import AddPet from "./sellers/AddPet";
import SinglePet from "./Home/SinglePet";
import CartComponent from "./Home/CartComponent";
import Register from "./Users/Register";
import { UserProvider } from "./context/user-context/UserProvider";
import Login from "./Users/Login";
import Footer from "./Home/Footer";

const FrontPage = lazy(() => import("./Home/FrontPage"))

function App() {
  return (
    <div className='App'>
      <Router>
        <DogProvider>
          <NavBar />
          <Switch>
            <UserProvider>
              <Route exact path='/register'>
                <Register />
              </Route>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/' >
                <Suspense fallback={<div style={{textAlign: 'center', padding: '5%'}}><img src={"./image/loader.gif"} alt="loader" /></div>}>
                  <FrontPage />
                </Suspense>
              </Route>
              <Route exact path='/view/:id' component={SinglePet} />
              <Route exact path='/cart' component={CartComponent} />
              <Route exact path='/seller' component={AddPet}/>
            </UserProvider>
          </Switch>
          <Footer />
        </DogProvider>
      </Router>
    </div>
  );
}

export default App;
