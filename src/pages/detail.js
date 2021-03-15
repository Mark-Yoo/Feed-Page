import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailComment from '../components/detailComment';
import DetailContent from '../components/detailContent';
import { getViews } from '../modules/listDetail';
import '../components/scss/detailPage.scss';

function DetailPage({ match }) {
  const { view } = useSelector(state => state.listDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (view) return;
    dispatch(getViews({id: +match.params.id}));
  }, [view, dispatch]);

  useEffect(() => {
    console.log('match', match);
  }, [match]);

  return(
    <div className="detail_wrapper">
      {view?.data && <DetailContent content={view.data}/>}
      <div className="comments_total">답변  
        <span className="comments_number">
        {view?.data.reply && view?.data.reply.length}
        </span>
      </div>
      {view?.data.reply && view?.data.reply.map(comment => <DetailComment comment={comment}/>)}
    </div>
  )
}

export default DetailPage;