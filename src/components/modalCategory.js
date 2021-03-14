import React from 'react';

function ModalCategory({item}) {
  const {id, name} = item;
  console.log(item);

  return(
    <div>
      <input type="checkbox" id="category_item" id={id}/>
      <label htmlFor="category_item">{name}</label>
    </div>
  );
}

export default ModalCategory;