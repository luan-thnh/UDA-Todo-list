import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import TodoList from '../components/TodoList';
import Pizza from '../components/Pizza';
import { Container, Nav, Navbar } from 'react-bootstrap';

const AppRouter = () => {
  return (
    <Router>
      <Navbar expand="lg" className="bg-body-tertiary mb-5">
        <Container>
          <Navbar.Brand href="#home">Bài tập</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Todo list
              </Nav.Link>
              <Nav.Link as={Link} to="/pizza">
                Pizza
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route>
          <Route path="/" element={<TodoList />} />
          <Route path="/pizza" element={<Pizza />} />
        </Route>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
