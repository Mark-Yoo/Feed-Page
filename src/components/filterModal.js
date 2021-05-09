import React, { useState, useEffect, useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, emptyArray, getMoreList } from "../modules/listItem";
import ModalCategory from "./modalCategory";
import "./scss/filterModal.scss";

function FilterModal(props) {
  const { visible, canClose, overlayClose, onClose, categoryList } = props;
  const { params } = useSelector((state) => state.listItem);
  const [categoryChange, setCategoryChange] = useState(params.category);
  const dispatch = useDispatch();

  const onOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  }, []);

  const close = useCallback((e) => {
    e.preventDefault();
    if (onClose) {
      onClose(e);
    }
  }, []);

  const onChange = useCallback(
    (id) => {
      if (categoryChange.includes(id))
        setCategoryChange(
          categoryChange.filter((categoryId) => categoryId !== id)
        );
      else setCategoryChange(categoryChange.concat(id));
    },
    [categoryChange]
  );

  const onSave = useCallback(
    (e) => {
      if (categoryChange.length === 0)
        return alert("카테고리를 하나 이상 선택해주세요");
      dispatch(emptyArray());
      dispatch(getMoreList(params));
      onClose(e);
    },
    [dispatch, params, onClose]
  );

  useEffect(() => {
    dispatch(changeCategory(categoryChange));
  }, [categoryChange, dispatch]);

  return (
    <div className="modal_overlay" style={{ display: visible }}>
      <div
        className="modal_wrapper"
        tabIndex="-1"
        style={{ display: visible }}
        onClick={overlayClose ? onOverlayClick : null}
      >
        <div className="modal_category" tabIndex="0">
          {canClose && (
            <button className="modal__close" onClick={close}></button>
          )}
          <div className="category_wrapper">
            <h2>필터</h2>
            {categoryList?.category &&
              categoryList.category.map((item) => (
                <ModalCategory
                  key={"modal_" + item.id}
                  item={item}
                  onChange={onChange}
                  categoryChange={categoryChange}
                />
              ))}
          </div>
          <button className="button__save" onClick={onSave}>
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(FilterModal);
