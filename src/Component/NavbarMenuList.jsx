import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarMenu from './NavbarMenu';

const menu = NavbarMenu.map(item => {
    return (<><li key={item.id} className="nav-item mx-3"><NavLink key={item.id} activeClassName="activePage" className="nav-link" exact to={item.path}><i className={item.icon}></i>{item.PName}</NavLink></li></>)
})

const NavbarMenuList = () => {
    return (<>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {menu}
            </ul>
        </div>
    </>);
}

export default NavbarMenuList;