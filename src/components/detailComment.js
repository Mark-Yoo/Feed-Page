import React from "react";
import "./scss/detailComment.scss";
import CopyPreventModal from "./copyPreventModal";

function DetailComment({ comment }) {
  const { id, contents, created_at, user } = comment;
  return (
    <section className="comment_container" key={id}>
      <div className="user_name">{user.name}</div>
      <p>{contents}</p>
      <div className="sub_info">
        <span>{created_at.substr(0, 10)}</span>
        <span className="user_email">{user.email}</span>
      </div>
      <CopyPreventModal />
    </section>
  );
}

export default DetailComment;
