import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoreList } from '../modules/listItem';
import { getMoreAds } from '../modules/listAds';
import Advertise from '../components/advertise';
import Category from '../components/category';
import LoginBtn from '../components/loginButton';
import AlignBtn from '../components/alignBtn';
import FilterBtn from '../components/filterBtn';
import "../components/scss/index.scss";

function FeedPage() {
  const {list, listLoading, params, totalArray} = useSelector(state => state.listItem);
  const {ads, adsLoading} = useSelector(state => state.listAds);
  // count를 변경하면 광고의 배치를 바꿀 수 있습니다.
  // 광고는 현재 4번째 Category와 함께 렌더링 되므로 순서대로 5번째에 위치합니다. 
  const count = useRef(3);
  const currentPage = useRef(null);
  const lastPage = useRef(null);

  const dispatch = useDispatch();

  const scrollHandler = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    currentPage.current = list?.current_page;
    lastPage.current = list?.last_page;
    if (scrollTop + clientHeight >= scrollHeight && !listLoading.GET_LIST && !adsLoading.GET_ADS) {
      console.log('success!', scrollTop, clientHeight);
      console.log('currentPage:', currentPage, "lastPage: ", lastPage);
      dispatch(getMoreList({...params, page: currentPage.current + 1}));
    }
  }
  
  useEffect(() => {
    if (list) return;
    dispatch(getMoreList(params));
  }, [params, list, dispatch]);
  

  useEffect(() => {
    if (ads) return;
    dispatch(getMoreAds({page: 1, limit: Math.floor(10 / count.current)}))
  }, [ads, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () =>{
      window.removeEventListener('scroll', scrollHandler);
    }
  })

  
  if (listLoading.GET_LIST && adsLoading.GET_ADS) return <div>로딩중...</div>
  return (
    <div className="container" >
      <div className="nav_container">
        <LoginBtn />
      </div>
      <div className="content_container">
        <div className="option_container">
          <AlignBtn />
          <FilterBtn />
        </div>
        {list?.data && ads?.data && list?.data.map((item, index) => index % count.current !== count.current - 1 ? <Category id={item.id} item={item} /> : <><Category id={item.id} item={item}/><Advertise id={'ad'+item.id} index={index} count={count.current} /></>)}
      </div>
    </div>
  );
}

export default FeedPage;
