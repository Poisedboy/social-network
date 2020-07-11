import React from 'react';
import preloader from '../../Image/preloader.gif';
import sasha from './preloader.module.css';

let Preloader = props =>  {
    return <div className={sasha.box}>
        <img src={preloader} alt="ava" />
        <p></p>
    </div>
}

export default Preloader;