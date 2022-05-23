import React from 'react';
import {  CardGroup } from 'react-bootstrap';
import Card1 from '../Card1/Card1';

const CardGroup1 = () => {
    const products=[
        {id: 1, name: 'laptop hp', price: 233233},
        {id: 2, name: 'laptop dell', price: 883233},
        {id: 3, name: 'laptop lg', price: 323309},
        {id: 4, name: 'laptop asus', price: 23233}
    ]
    return (
        <div>
            <CardGroup>
              {
                  products.map(product => <Card1 product={product} key={product.id}>  </Card1>)
              }
            </CardGroup>
        </div>
    );
};

export default CardGroup1;