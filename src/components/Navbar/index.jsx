import React from 'react'
import { Outlet } from 'react-router-dom';
import { navbar } from '../../utils/navbar';
import { Container, Link } from './style';

const active = (url)=>{
  return window.location.pathname.includes(url);
}

const Navbar = () => {
  return (
    <>
    <Container>
      {
        navbar.map ( (item)=> {
          return <Link key={item.id} to={item.path} active={active(item.path)}>{item.title}</Link>
        })
      }
    </Container>
      <Outlet />
    </>
  )
};

export default Navbar;