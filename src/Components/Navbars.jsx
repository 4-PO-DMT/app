import React, {useState, useEffect } from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
const Navbars = () => {
    const {loginWithRedirect, isAuthenticated, user, logout, getAccessTokenSilently} = useAuth0();
    const [textButton, setTextButton] = useState('Login')
    const [Name, setName] = useState('')
    useEffect(() => {
        if(isAuthenticated){
            setTextButton('Logout')
            setName( user.name)
        }else{
            setTextButton('Login')
            setName('')
        }
    },[isAuthenticated])
    useEffect(()=>{
        const getToken = async ()=>{
            const accessToken = await getAccessTokenSilently();
            localStorage.setItem('token', accessToken)
        }
        if(isAuthenticated){
            getToken();
        }
    },[isAuthenticated, getAccessTokenSilently])
    return (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Link to='/'><Nav.Link href="#home">Home</Nav.Link></Link>
      <Link to='/features'><Nav.Link href="#features">Features</Nav.Link></Link>
      {
          isAuthenticated ?
          <NavDropdown title={Name} id="navbarScrollingDropdown">
          <NavDropdown.Item><Link to ='/dash'>Dashboard</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to ='/Ventas'>Ventas</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item >
          <Link to ='/roles'>Roles</Link>
          </NavDropdown.Item>
        </NavDropdown> :
        null
      }
    </Nav>
    </Container>
    {
        isAuthenticated ?
        <button 
        onClick={()=>logout({ returnTo: window.location.origin})} 
        className="btn btn-primary"> {textButton}</button> :
        <button onClick={() => loginWithRedirect()}
        className="btn btn-primary">{textButton}</button>
    }
    
  </Navbar>
    )
}

export default Navbars
