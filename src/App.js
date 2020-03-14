import React, { Suspense, lazy } from "react";
import { DogProvider } from "./context/dog-context/DogProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
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
import Loader from "./UiComponets/Loader";
import PetCategory from "./Home/Category/PetCategory";

const FrontPage = lazy(() => import("./Home/FrontPage"))

function App() {
  return (
    <div className='App'>
      <Router>
        <DogProvider>
          <NavBar />
          <div className="first-section">
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames="fade"
                >
                  <Switch>
                    <UserProvider>
                      <Route exact path='/register'>
                        <Register />
                      </Route>
                      <Route exact path='/login' component={Login} />
                      <Route exact path='/' >
                        <Suspense fallback={<div style={{padding: "10%", textAlign: "center"}}><Loader /></div>}>
                          <FrontPage />
                        </Suspense>
                      </Route>
                      <Route exact path='/view/:id' component={SinglePet} />
                      <Route exact path='/cart' component={CartComponent} />
                      <Route exact path='/category/:name' component={PetCategory} />
                      <Route exact path='/seller' component={AddPet} />
                    </UserProvider>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}>
            </Route>
          </div>
          <Footer />
        </DogProvider>
      </Router>
    </div>
  );
}

export default App;
