import React, { useState } from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import "./styles/main.scss";
import Login from "./views/Login";
import Main from "./views/Main";
import Focus from "./views/Focus";
import Edit from "./views/Edit";
import Create from "./views/Create";
import Header from "./components/Header"
import MainContainer from "./components/Main"
import { AuthProvider } from "./services/firebase/Auth"
import ProtectedRoute from "./components/ProtectedRoute"
function App() {
  return (
      <AuthProvider>
        <Router>
          <Switch>
            <div className={"container"}>
              <Header />
              <MainContainer>
                <Route exact path="/" component={Login}></Route>
                <ProtectedRoute exact path="/main" component={Main} ></ProtectedRoute>
                <ProtectedRoute exact path="/edit" component={Edit} ></ProtectedRoute>
                <ProtectedRoute exact path="/create" component={Create} ></ProtectedRoute>
                <ProtectedRoute exact path="/focus" component={Focus} ></ProtectedRoute>
              </MainContainer>
            </div>
          </Switch>
        </Router>
      </AuthProvider >
  );
}

export default App;
