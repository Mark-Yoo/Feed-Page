import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNewCategory } from '../modules/listCategory';
import FilterModal from './filterModal';

function FilterBtn() {
  const [visible, setVisible] = useState(false);
  const {categoryList, categoryLoading} = useSelector(state => state.categoryItem);
  const dispatch = useDispatch();
  console.log()

  const onOpen = () => {
    dispatch(getNewCategory());
    setVisible(true);
  }
  const onClose = () => {
    setVisible(false);
  }

  return(
    <>
      <button onClick={onOpen}>필터</button>
      {
        categoryLoading && visible && <FilterModal
        visible={visible}
        canClose={true}
        overlayClose={true}
        onClose={onClose}
        categoryList={categoryList}
        />
      }
    </>
  );
}

export default FilterBtn;