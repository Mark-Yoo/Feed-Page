import React from "react";
import "./scss/detailContent.scss";
import CopyPreventModal from "./copyPreventModal";

function DetailContent({ content }) {
  const { id, title, contents, created_at } = content;
  return (
    <article className="detail_container" key={id}>
      <h2>{title}</h2>
      <p>{contents}</p>
      <span>{created_at.substr(0, 10)}</span>
      <CopyPreventModal />
    </article>
  );
}

export default DetailContent;
