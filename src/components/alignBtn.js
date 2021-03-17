import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrder, emptyArray, getMoreList } from '../modules/listItem';
import "./scss/alignBtn.scss";

function AlignBtn() {
  const { params } = useSelector(state => state.listItem);
  const [orderNow, setOrderNow] = useState(params.ord);

  const dispatch = useDispatch();

  const onClick = ({ target }) => {
    const order = target.id;
    setOrderNow(order);
  }

  useEffect(() => {
    dispatch(emptyArray());
    dispatch(changeOrder(orderNow));
  }, [orderNow, dispatch]);

  useEffect(() => {
      dispatch(getMoreList(params));
  }, [params, dispatch]);

  return(
    <div className="alignbtn_container">
      <div className="asc_wrapper wrapper">
        <label htmlFor="asc_btn" onClick={onClick} id="asc">
          <input className="asc_btn active" id="asc" type="checkbox" checked={orderNow === 'asc'}/>
          <div className="customCheck"></div>
            오름차순
        </label>
      </div>
      <div className="desc_wrapper wrapper">
        <label htmlFor="desc_btn" onClick={onClick} id="desc">
          <input className="desc_btn" id="desc" type="checkbox" checked={orderNow === 'desc'}/>
          <div className="customCheck"></div>
            내림차순
        </label>
      </div>
    </div>
    )
}

export default AlignBtn;