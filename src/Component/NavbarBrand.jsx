import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Images/coin.png'

const Brand = () => {
    return (<><NavLink exact className="navbar-brand" to="/"><img src={Logo} alt="Logo" className="mx-1 mb-1" /><h4 className="d-inline">SafeGold</h4></NavLink></>);
}

export default Brand;