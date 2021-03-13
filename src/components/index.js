import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoreList } from '../modules/listItem';
import Advertise from './advertise';
import Category from './category';
import LoginBtn from './loginButton';
import './scss/index.scss';

function FeedPage() {
  const {list, loading} = useSelector(state => state.listItem);
  const dispatch = useDispatch();

  useEffect(() => {
    if (list) return;
    dispatch(getMoreList({page: 1, ord: "asc", category: ["1", "2", "3"], limit: 10}));
  }, [list, dispatch]);

  if (loading.GET_LIST) return <div>로딩중...</div>
  return (
    <div className="container">
      <div className="nav_container">
        <LoginBtn />
      </div>
      <div className="content_container">
        {list?.data && list.data.map(item => <Category key={item.id} item={item}/>)}
        <Advertise />
      </div>
    </div>
  );
}

export default FeedPage;
