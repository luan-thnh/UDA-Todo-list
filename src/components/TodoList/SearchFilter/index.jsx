import React from 'react';
import PropTypes from 'prop-types';
import { Button, Nav } from 'react-bootstrap';

const SearchFilter = (props) => {
  return (
    <Nav justify variant="pills" defaultActiveKey="1" className="mt-3">
      <Nav.Item>
        <Nav.Link eventKey="1">All</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2">Done</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3">In-process</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

SearchFilter.propTypes = {};

export default SearchFilter;
