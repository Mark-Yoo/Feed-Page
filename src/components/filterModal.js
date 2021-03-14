import React from 'react';
import ModalCategory from './modalCategory';
import "./scss/filterModal.scss";

function FilterModal(props) {
  const {visible, canClose, overlayClose, onClose, categoryList} = props;
  
  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }
  const close = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose(e);
    }
  }

  return(
    <div className="modal_overlay" style={{display: visible}}>
      <div className="modal_wrapper"tabIndex="-1" style={{display: visible}} onClick={overlayClose ? onOverlayClick : null}>
        <div className="modal_category" tabIndex="0">
          {canClose && <button className="modal__close" onClick={close}></button>}
          <div className="category_wrapper">
            <h2>필터</h2>
            {categoryList?.category && categoryList.category.map(item => <ModalCategory item={item}/>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;