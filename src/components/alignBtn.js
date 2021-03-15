import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOrder, getMoreList } from '../modules/listItem';
import "./scss/alignBtn.scss";

function AlignBtn() {
  const { params } = useSelector(state => state.listItem);
  const [orderNow, setOrderNow] = useState(params.ord);
  const [orderChanged, setOrderChanged] = useState(false);

  const dispatch = useDispatch();

  const onClick = ({ target }) => {
    const order = target.id;
    setOrderChanged(true);
    setOrderNow(order);
  }

  useEffect(() => {if(orderChanged)dispatch(changeOrder(orderNow))}, [orderChanged, orderNow, dispatch]);

  useEffect(() => {if(orderChanged)dispatch(getMoreList(params))}, [orderChanged, params, dispatch]);

  return(
    <div className="alignbtn_container">
      <label htmlFor="asc_btn active" onClick={onClick} id="asc">
        <input className="asc_btn active" id="asc" type="checkbox" checked={orderNow === 'asc'}/>
          오름차순
        </label>
      <label htmlFor="desc_btn" onClick={onClick} id="desc">
        <input className="desc_btn" id="desc" type="checkbox" checked={orderNow === 'desc'}/>
          내림차순
        </label>
    </div>
    )
}

export default AlignBtn;