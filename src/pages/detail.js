import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailComment from '../components/detailComment';
import DetailContent from '../components/detailContent';
import LoadingSpinner from '../components/loading';
import { getViews } from '../modules/listDetail';
import '../components/scss/detailPage.scss';

function DetailPage({ match, history }) {
  const { view } = useSelector(state => state.listDetail);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const backward = () => {
    history.goBack();
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, []);

  useEffect(() => {
    dispatch(getViews({id: +match.params.id}));
  }, []);

  return(
    <>
    {!loading ?
      (
      <><div className="go_back_btn">
        <button onClick={backward}><span></span></button>
      </div>
      <div className="detail_wrapper">
        {view?.data && <DetailContent content={view.data}/>}
        <div className="comments_total">{view?.data && '답변'}  
          <span className="comments_number">
          {view?.data.reply && view?.data.reply.length}
          </span>
        </div>
        {view?.data.reply && view?.data.reply.map(comment => <DetailComment comment={comment}/>)}
      </div></>
      ) : (
        <LoadingSpinner />
      )}
    </>
  )
}

export default DetailPage;