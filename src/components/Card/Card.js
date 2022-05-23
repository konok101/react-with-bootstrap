import React from 'react';
import { Spinner } from 'react-bootstrap';

const Card = () => {
    return (
        <div>
            <h1>welcome to react bootstrap</h1>
            <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
        </div>
    );
};

export default Card;