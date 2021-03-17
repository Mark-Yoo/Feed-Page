import React from 'react';
import { Link } from 'react-router-dom';
import './scss/category.scss';

function Category({item, id}) {
  const {category_id, user_id, created_at, title, contents} = item;

  return(
    <Link to={`/${id}`} className="link_route">
      <article className="category_container">
        <div className="category_info">
          <span className="category_name">{category_id === 1 ? "apple" : (category_id === 2 ? "banana" : "coconut")}</span>
          <span className="category_id">category ID: {category_id}</span>
        </div>
        <div className="user_info">
          <span className="user_id user__inner">{user_id}</span>
          <span className="created_date user__inner">{created_at.substr(0, 10)}</span>
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