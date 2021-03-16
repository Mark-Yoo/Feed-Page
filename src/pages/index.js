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
import { InitInfiniteScroll } from '../util/intersectionObserver';

function FeedPage() {
  const {list, listLoading, params, totalArray} = useSelector(state => state.listItem);
  const {ads, adsLoading} = useSelector(state => state.listAds);
  // count를 변경하면 광고의 배치를 바꿀 수 있습니다.
  // 광고는 현재 4번째 Category와 함께 렌더링 되므로 순서대로 5번째에 위치합니다. 
  const count = useRef(3);

  const rootRef = useRef(null);
  const targetRef = useRef(null);
  const currentPage = useRef(null);
  const lastPage = useRef(null);
  const totalPage = useRef(null);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (list) return;
    dispatch(getMoreList(params));
  }, [params, list, dispatch]);
  

  useEffect(() => {
    if (ads) return;
    dispatch(getMoreAds({page: 1, limit: Math.floor(10 / count.current)}))
  }, [ads, dispatch]);

  useEffect(() => {
    if (listLoading.GET_LIST) return;
    currentPage.current = list?.current_page;
    lastPage.current = list?.last_page;
    totalPage.current = list?.total;
    console.log(currentPage.current, lastPage.current, totalPage.current)
  }, [listLoading.GET_LIST]);

  
  InitInfiniteScroll({
    root: rootRef.current,
    target: targetRef.current,
    onIntersect: ([{isIntersecting}]) => {
      console.log({isIntersecting});
      console.log(currentPage.current);
      console.log(totalPage.current);
      if(
        isIntersecting &&
        !listLoading.GET_LIST &&
        !adsLoading.GET_ADS &&
        currentPage.current < totalPage.current
      ) {
        dispatch(getMoreList({...params, page: currentPage + 1}));
      }
    }
  });

  if (listLoading.GET_LIST && adsLoading.GET_ADS) return <div>로딩중...</div>
  return (
    <div className="container" >
      <div className="nav_container">
        <LoginBtn />
      </div>
      <div className="content_container" ref={rootRef}>
        <div className="option_container">
          <AlignBtn />
          <FilterBtn />
        </div>
        {list?.data && ads?.data && totalArray.map((item, index) => index % count.current !== count.current - 1 ? <Category id={item.id} item={item} /> : <><Category id={item.id} item={item}/><Advertise id={'ad'+item.id} index={index} count={count.current} /></>)}
        {!listLoading.GET_LIST && !adsLoading.GET_ADS && <div ref={targetRef} style={{height: '100px', width: '100px', backgroundColor: 'green'}}></div>}
      </div>
    </div>
  );
}

export default FeedPage;
