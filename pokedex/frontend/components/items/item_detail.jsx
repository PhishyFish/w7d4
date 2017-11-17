import React from 'react';

const ItemDetail = ( {item} ) => (
  <ul>
    {console.log(item)}
    <li><h3>{item.name}</h3></li>
    <li>Happiness: {item.happiness}</li>
    <li>Price: ${item.price}</li>
  </ul>
);

export default ItemDetail;
