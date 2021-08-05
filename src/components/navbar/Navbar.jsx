import React, { Component } from 'react';
import { Nav, NavLink, NavIcon, Bars, Cart } from './NavbarElements'



class Navbar extends Component {
    state = {}
    render() {
        return (
            <>
                <Nav>
                    <NavLink to='/'>
                        Products
                    </NavLink>
                    <NavIcon >
                        <p>Menu</p>
                        <Bars onClick={this.props.handleClick} />
                        <p>Cart</p>
                        <Cart />
                    </NavIcon>

                </Nav>
            </>
        );
    }
}

export default Navbar;

// const Navbar = ({ toggle, cartToggle }) => {
//     return (

    // <Bars onClick={toggle} />
    // <p>Cart</p>
    // <Cart onClick={cartToggle} />
//     )
// }

// export default Navbar
