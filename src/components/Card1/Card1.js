import React from 'react';
import { Card } from 'react-bootstrap';

const Card1 = (props) => {
    const {name, price}= props.product;
    return (
       
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Price: {price}</small>
                </Card.Footer>
            </Card>
    
    );
};

export default Card1;