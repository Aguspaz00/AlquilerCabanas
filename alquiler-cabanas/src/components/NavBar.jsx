import house from './assets/house.svg'
import CartWidget from './CartWidget'
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import Button from 'react-bootstrap/Button';

function Links () {
  return (
    <Navbar style={{marginRight:"0", marginLeft:"0"}}>
      <Container style={{margin:"0", maxWidth:"100%"}}>
        <NavLink to= '/' className='Link'>
            <img
              alt=""
              src={house}
              width="50"
              height="50"
            />{' '}
            Alquiler de Cabañas
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Button variant="dark" style={{marginRight:"10px"}}>
        <NavLink to='/' className='Link1'>Inicio</NavLink></Button>

        <Button variant="dark" style={{marginRight:"10px"}}>
        <NavLink to='/categoria/Familiar' className='Link1'>Para Familias</NavLink>
        </Button>

        <Button variant='dark'>
        <NavLink to='/categoria/Parejas' className={'Link1'}>Para Parejas</NavLink>
        </Button>
          <NavLink>
            <CartWidget/>
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Links;
