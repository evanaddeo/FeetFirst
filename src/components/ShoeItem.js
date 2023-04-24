import React from 'react';
import './ShoeItem.css';

const ShoeItem = ({ shoe, updateShoe, deleteShoe }) => {
  const { id, name, price, image } = shoe;

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedShoe = {
      ...shoe,
      name: event.target.name.value,
      price: event.target.price.value,
      image: event.target.image.value,
    };
    updateShoe(updatedShoe);
  };

  const handleDelete = () => {
    deleteShoe(id);
  };

  return (
    <div className="shoe-item">
      <img className="shoe-item-image" src={image} alt={name} />
      <h2 className="shoe-item-name">{name}</h2>
      <p className="shoe-item-price">{price}</p>
      <form onSubmit={handleUpdate}>
        <input className="shoe-item-input" type="text" name="name" defaultValue={name} />
        <input className="shoe-item-input" type="text" name="price" defaultValue={price} />
        <input className="shoe-item-input" type="text" name="image" defaultValue={image} />
        <button className="shoe-item-button" type="submit">Update</button>
      </form>
      <button className="shoe-item-button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default ShoeItem;