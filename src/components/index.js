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
    dispatch(getMoreList({page: 1, ord: "asc", category: ["1", "2", "3"], limit: 10}));
  }, [dispatch]);
  console.log(list.data);
  
  if (loading.GET_LIST) return <div>로딩중...</div>
  return (
    <div className="container">
      <div className="nav_container">
        <LoginBtn />
      </div>
      <div className="content_container">
        <Category />
        <Advertise />
      </div>
    </div>
  );
}

export default FeedPage;
