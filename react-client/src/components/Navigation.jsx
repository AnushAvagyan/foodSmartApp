import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
  return (
    <Nav className="justify-content-center" defaultActiveKey="/">
      <Nav.Item>
        <Link to={'/'} >
          <span className="nav">Home</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={'add_new_recipe'} >
          <span className="nav">Add a New Recipe</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={'weight'} >
          <span className="nav">Weight Trends</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to={'explore'} >
          <span className="nav">Explore Ideas</span>
        </Link>
      </Nav.Item>
      <NavDropdown title="Select a meal" className="nav-dr">
        <NavDropdown.Item eventKey="4.1">
          <Link to={'breakfast'} >
           <span>Breakfast </span>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={'lunch'} >
           <span>Lunch </span>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">
          <Link to={'dinner'} >
           <span>Dinner </span>
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">
          <Link to={'snack'} >
           <span>Snacks </span>
          </Link></NavDropdown.Item>
        </NavDropdown>
    </Nav>
  );
};

export default Navigation;



