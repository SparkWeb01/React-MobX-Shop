import React, { useContext } from 'react';
import {Context} from "../index";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap'
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
  const navigate = useNavigate()
  const {user} = useContext(Context)
  const userSetter = () =>{
      user.setIsAuth(true)
  }
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white'}} className='text-decoration-none' to={SHOP_ROUTE}>Tech-Shop</NavLink>
            {user.isAuth
            ?
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={'outline-light'} onClick={()=>navigate(ADMIN_ROUTE)} >Админ панель</Button>
                <Button variant={'outline-light'} onClick={()=>navigate(LOGIN_ROUTE)} className="ms-3">Выйти</Button>
            </Nav>
            :
            <Nav className="ml-auto" style={{color:'white'}}>
                <Button variant={'outline-light'} onClick = {()=>userSetter()}>Авторизация</Button>
            </Nav>
            }
            
        </Container>
    </Navbar>
  )
})

export default NavBar