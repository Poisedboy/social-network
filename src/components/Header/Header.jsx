import React from "react";
import h from './header.module.css';
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <header className={h.header}>
      <img src="https://pngimage.net/wp-content/uploads/2018/06/flower-logo-png-2.png" alt='logo'></img>
      <div className={h.loginBlock}>
        {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> 
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
