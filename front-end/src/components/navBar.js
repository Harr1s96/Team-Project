import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

class NavBar extends React.Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="/">REDSHIFT</Navbar.Brand>
                <Navbar.Toggle aria-controls="collapse"/>
                    <Navbar.Collapse id="collapse">
                        <Nav className='ml-auto'>
                            <Nav.Link href="/">HOME</Nav.Link>
                            <Nav.Link href="/help">HELP</Nav.Link>
                            <Nav.Link href="/login">SIGN OUT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;

