import React from 'react';
import { NavLink } from 'react-router-dom';
import d from './dialog-items.module.css';

const DialogItem = (props) => {
    let path = "/dialog/" + props.id; 
    return (
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;