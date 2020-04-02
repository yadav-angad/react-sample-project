import React from "react";
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import "./style/style.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import User from "./components/User";
import ErrorHandling from "./exception/ErrorHandling";
import Error from "./components/Error";
import userDetails from './components/UserDetail';


function App() {
  return (
    <>
      <ErrorHandling>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/user" component={User} exact/>
          <Route path="/user/:userId" component={userDetails} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </ErrorHandling>
    </>
  );
}

export default App;
