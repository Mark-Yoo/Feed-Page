import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoreList } from '../modules/listItem';
import { getMoreAds } from '../modules/listAds';
import Advertise from './advertise';
import Category from './category';
import LoginBtn from './loginButton';
import './scss/index.scss';
import AlignBtn from './alignBtn';
import FilterBtn from './filterBtn';

function FeedPage() {
  const {list, listLoading} = useSelector(state => state.listItem);
  const {ads, adsLoading} = useSelector(state => state.listAds);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (list) return;
    dispatch(getMoreList({page: 1, ord: "asc", category: ["1", "2", "3"], limit: 10}));
  }, [list, dispatch]);
  

  useEffect(() => {
    if (ads) return;
    dispatch(getMoreAds({page: 1, limit: 2}))
  }, [ads, dispatch]);

  if (listLoading.GET_LIST && adsLoading.GET_ADS) return <div>로딩중...</div>
  return (
    <div className="container">
      <div className="nav_container">
        <LoginBtn />
      </div>
      <div className="content_container">
        <div className="option_container">
          <AlignBtn />
          <FilterBtn />
        </div>
        {list?.data && list.data.map(item => <Category key={item.id} item={item}/>)}
        {ads?.data && ads.data.map(ad => <Advertise key={ad.id}/>)}
      </div>
    </div>
  );
}

export default FeedPage;
