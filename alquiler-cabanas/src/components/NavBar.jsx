import { Nav, NavItem } from 'reactstrap';
import house from './assets/house.svg'
import CartWidget from './CartWidget'
import React from "react";
import { NavLink } from "react-router-dom";

const imgStyles = {width:70,height:70}

const NavBar = () => {
    return(
        <Nav justified className='lista'>
            <NavItem>
                <NavLink active href="*">
                <img style={imgStyles} src={house} alt="house-img" />
                </NavLink>
            </NavItem>
            <div>
                <h3 style={{display:'flex', position:'center'}}>Alquiler de Cabañas</h3>
            </div>

            <NavItem>
                <NavLink to='/' className='Link'>
                    <h4>
                        Home
                    </h4>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <CartWidget/>
                </NavLink>
            </NavItem>
            <div className='categorias'>
                 Filtrar por : 
                 <NavLink to='/item/1' className={'Link'}> <button>Para Familias </button>  </NavLink>
                 <NavLink to='/item/2' className={'Link'}> <button>Para Parejas </button>  </NavLink>
            </div>
        </Nav>
    )
}
export default NavBar