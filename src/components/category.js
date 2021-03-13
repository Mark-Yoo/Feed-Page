import React from 'react';
import './scss/category.scss';

function Category() {
  return(
    <article className="category_container">
      <div className="category_info">
        <span className="category_name">category_name</span>
        <span className="category_id">id</span>
      </div>
      <div className="user_info">
        <span className="user_id user__inner">user_id</span>
        <span className="created_date user__inner">created_at(2020-02-02)</span>
      </div>
      <h2 className="category_title">Title</h2>
      <p className="category_content">contents</p>
    </article>
  );
}

export default Category;