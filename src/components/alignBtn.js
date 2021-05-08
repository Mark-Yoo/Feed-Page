import React, { memo, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeOrder, emptyArray, getMoreList } from "../modules/listItem";
import "./scss/alignBtn.scss";

function AlignBtn() {
  const { params } = useSelector((state) => state.listItem);
  const [orderChanged, setOrderChanged] = useState(false);
  const [orderNow, setOrderNow] = useState(params.ord);

  const dispatch = useDispatch();

  const onClick = useCallback(({ target }) => {
    const order = target.id;
    setOrderChanged(true);
    setOrderNow(order);
  }, []);

  useEffect(() => {
    if (orderChanged) {
      dispatch(emptyArray());
      dispatch(changeOrder(orderNow));
    }
  }, [dispatch, orderChanged]);

  useEffect(() => {
    if (orderChanged) {
      dispatch(getMoreList(params));
      setOrderChanged(false);
    }
  }, [params, dispatch]);

  return (
    <div className="alignbtn_container">
      <div className="asc_wrapper wrapper">
        <label htmlFor="asc_btn" id="asc">
          <input
            className="asc_btn active"
            id="asc"
            type="checkbox"
            checked={orderNow === "asc"}
            readOnly
          />
          <div className="customCheck"></div>
          오름차순
        </label>
        <div className="cover_btn" id="asc" onClick={onClick}></div>
      </div>
      <div className="desc_wrapper wrapper">
        <label htmlFor="desc_btn" id="desc">
          <input
            className="desc_btn"
            id="desc"
            type="checkbox"
            checked={orderNow === "desc"}
            readOnly
          />
          <div className="customCheck"></div>
          내림차순
        </label>
        <div className="cover_btn" id="desc" onClick={onClick}></div>
      </div>
    </div>
  );
}

export default memo(AlignBtn);
