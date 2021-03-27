import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
//import '../styles/navigation.css'

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse className='navbar_collapse'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/projects'>Projects</Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/samuli-schroderus-a82880125/'>Linkedin</Nav.Link>
                            <Nav.Link href='https://github.com/onkkis'>Github</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> 
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation