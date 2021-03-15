import React from 'react';
import './scss/detailContent.scss';

function DetailContent({content}) {
  const {id, title, contents, created_at} = content;
  console.log(content);
  return(
    <article className="detail_container" key={id}>
      <h2>{title}</h2>
      <p>{contents}</p>
      <span>{created_at}</span>
    </article>
    );
}

export default DetailContent;