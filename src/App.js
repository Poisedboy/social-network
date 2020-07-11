import React from "react";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Nav from "./components/Navbar/navbar.jsx";
import { Route, withRouter } from "react-router-dom";
import UsersContainer from './components/Users/UsersConatiner';
import { connect } from "react-redux";
import { initializeApp } from './Redux/app-reducer.js';
import { compose } from "redux";
import Preloader from "./components/Common/Preloader/Preloader";
import { withSuspense } from './components/HOC/withSuspense';

const DialogsContainer = React.lazy( () => import('./components/Dialogs/dialogs-container.jsx') );
const ProfileContainer = React.lazy( () => import('./components/Profile/ProfileContainer.jsx') );
const Login = React.lazy( () => import('./components/Login/Login.jsx') );


class App extends React.Component {
  
  componentDidMount () {
    this.props.initializeApp();
  }
  
  render () {
    if(!this.props.initialized) {
      return <Preloader  />
    }

    return(
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" 
            render={withSuspense(DialogsContainer)} />
          <Route path="/profile/:userId?" 
            render={withSuspense(ProfileContainer)} />
          <Route path="/users" 
            render = { () => <UsersContainer />} />
          <Route path="/login" 
            render={() => {
              return <React.Suspense fallback={<div>Loading...</div>}>
              <Login />
              </React.Suspense>
            }} />
        </div>
      </div>
    );
  };
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter, 
  connect(mapStateToProps, {initializeApp})) (App);
