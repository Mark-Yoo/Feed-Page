import React from 'react';

function ModalCategory({item, onChange, categoryChange}) {
  const {id, name} = item;

  return(
    <div>
      <input type="checkbox" className="category_item" onChange={() => onChange(id+'')} id={id} defaultChecked={categoryChange.includes(id + '')}/>
      <label htmlFor="category_item">{name}</label>
    </div>
  );
}

export default ModalCategory;