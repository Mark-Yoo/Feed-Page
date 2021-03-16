import React from 'react';
import './scss/detailComment.scss'

function DetailComment({ comment }) {
  const {id, contents, created_at, user} = comment;
  return(
    <section className="comment_container" key={id}>
      <div>{user.name}</div>
      <p>{contents}</p>
      <span>{created_at.substr(0, 10)}</span>
    </section>
    );
}

export default DetailComment;