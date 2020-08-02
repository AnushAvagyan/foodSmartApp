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
  <Nav.Item><Link to={'explore'} >
           <span className="nav" >
             Home
           </span>
           </Link>
  </Nav.Item>
  <Nav.Item>
  <Link to={'add_new_recipe'} >
           <span className="nav">

             Add a New Recipe
           </span>
           </Link>
  </Nav.Item>
  <Nav.Item>
  <Link to={'explore'} >
           <span className="nav" >
             Explore Ideas
           </span>
           </Link>
  </Nav.Item>
</Nav>
  );
};




// const Navigation = (props) => (

// <nav className="navbar navbar-expand-sm bg-light">
// <a className="navbar-brand" href="#">Home</a>
// <ul className="navbar-nav">
//   <li className="nav-item">
//   <Link to={'add_new_recipe'} >
//           <span className="new">

//             Add a New Recipe
//           </span>
//           </Link>
//   </li>
//   <li className="nav-item">
//   <Link to={'explore'} >
//           <span className="explore" >
//             Explore
//           </span>
//           </Link>
//   </li>

// </ul>

// </nav>


// )

export default Navigation;



