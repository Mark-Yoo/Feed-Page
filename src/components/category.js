import React from 'react';
import { Link } from 'react-router-dom';
import './scss/category.scss';

function Category({item, id, match}) {
  const {category_id, user_id, created_at, title, contents} = item;

  return(
    <Link to={`/${id}`} test={"test"}>
      <article className="category_container" key={id}>
        <div className="category_info">
          <span className="category_name">category_name</span>
          <span className="category_id">{category_id}</span>
        </div>
        <div className="user_info">
          <span className="user_id user__inner">{user_id}</span>
          <span className="created_date user__inner">{created_at}</span>
        </div>
        <div className="category_post">
          <h2 className="category_title">{title}</h2>
          <p className="category_content">{contents}</p>
        </div>
      </article>
    </Link>
  );
}

export default Category;