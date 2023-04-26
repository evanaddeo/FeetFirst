import React, { useState } from 'react';
import ShoeItem from './ShoeItem';
import './ShoeList.css';

const ShoeList = () => {
  const [shoes, setShoes] = useState([
    
  ]);

  const addShoe = (newShoe) => {
    const updatedShoes = [...shoes, newShoe];
    setShoes(updatedShoes);
  };

  const updateShoe = (updatedShoe) => {
    const updatedShoes = shoes.map((shoe) => {
      if (shoe.id === updatedShoe.id) {
        return updatedShoe;
      } else {
        return shoe;
      }
    });
    setShoes(updatedShoes);
  };

  const deleteShoe = (shoeId) => {
    const updatedShoes = shoes.filter((shoe) => shoe.id !== shoeId);
    setShoes(updatedShoes);
  };

  return (
    <div className="shoe-list-container">
      <h2 style={{color: "white"}}>Add a new listing</h2>
      <form className="shoe-list-form" onSubmit={(event) => {
          event.preventDefault();
          const newShoe = {
            id: shoes.length + 1,
            name: event.target.name.value,
            price: event.target.price.value,
            image: event.target.image.value,
          };
          addShoe(newShoe);
          document.getElementById("n").value="";
          document.getElementById("p").value="";
          document.getElementById("i").value="";
        }}>
        <input id="n" type="text" name="name" placeholder="Name" />
        <input id="p" type="text" name="price" placeholder="Price" />
        <input id="i" type="text" name="image" placeholder="Image URL" />
        <button type="submit">Add Shoe</button>
      </form>
      <div className="shoe-list">
        {shoes.map((shoe) => (
          <ShoeItem
            key={shoe.id}
            shoe={shoe}
            updateShoe={updateShoe}
            deleteShoe={deleteShoe}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoeList;