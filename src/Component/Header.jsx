import React from 'react';
import Brand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavbarMenuList from './NavbarMenuList';
import './Header.css';

const Header = () => {
    return (<>
        <header className="shadow-sm">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 col-md-11 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <Brand />
                                <NavbarToggler />
                                <NavbarMenuList />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    </>)
}

export default Header;