import React, { useState, useEffect, useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNewCategory } from "../modules/listCategory";
import FilterModal from "./filterModal";
import "./scss/filterBtn.scss";

function FilterBtn() {
  const [visible, setVisible] = useState(false);
  const { categoryList, categoryLoading } = useSelector(
    (state) => state.categoryItem
  );
  const dispatch = useDispatch();

  const onOpen = useCallback(() => {
    setVisible(true);
  }, []);

  const onClose = useCallback(() => {
    setVisible(false);
  }, []);

  useEffect(() => {
    if (visible) dispatch(getNewCategory());
  }, [visible, dispatch]);

  return (
    <>
      <button className="btn_filter" onClick={onOpen}>
        필터
      </button>
      {categoryLoading && visible && (
        <FilterModal
          visible={visible}
          canClose={true}
          overlayClose={true}
          onClose={onClose}
          categoryList={categoryList}
        />
      )}
    </>
  );
}

export default memo(FilterBtn);
