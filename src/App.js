import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import "./styles/main.scss";
import Login from "./views/Login";
import Main from "./views/Main";
import Edit from "./views/Edit";
import Create from "./views/Create";
import Header from "./components/Header"
import MainContainer from "./components/Main"
function App() {
  return (
    <Router>
      <Switch>
        <div className={"container"}>
          <Header />
          <MainContainer>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/main" component={Main}></Route>
            <Route exact path="/edit" component={Edit}></Route>
            <Route exact path="/create" component={Create}></Route>
          </MainContainer>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
