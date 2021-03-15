import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategory, getMoreList } from '../modules/listItem';
import ModalCategory from './modalCategory';
import "./scss/filterModal.scss";

function FilterModal(props) {
  const {visible, canClose, overlayClose, onClose, categoryList} = props;
  const { params } = useSelector(state => state.listItem);
  const [categoryChange, setCategoryChange] = useState(params.category);
  const dispatch = useDispatch();
  
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

  const onChange = (id) => {
    if (categoryChange.includes(id)) setCategoryChange(categoryChange.filter(categoryId => categoryId !== id));
    else setCategoryChange(categoryChange.concat(id));
  }

  const onSave = (e) => {
    dispatch(getMoreList(params));
    onClose(e);
  }
  
  useEffect(() => {dispatch(changeCategory(categoryChange))}, [categoryChange]);

  return(
    <div className="modal_overlay" style={{display: visible}}>
      <div className="modal_wrapper"tabIndex="-1" style={{display: visible}} onClick={overlayClose ? onOverlayClick : null}>
        <div className="modal_category" tabIndex="0">
          {canClose && <button className="modal__close" onClick={close}></button>}
          <div className="category_wrapper">
            <h2>필터</h2>
            {categoryList?.category && categoryList.category.map(item => <ModalCategory item={item} onChange={onChange} categoryChange={categoryChange}/>)}
          </div>
          <button onClick={onSave}>저장</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;