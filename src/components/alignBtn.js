import React from 'react';
import "./scss/alignBtn.scss";

function AlignBtn() {
  return(
    <div className="alignbtn_container">
      <input className="asc_btn active" id="asc_btn" type="checkbox" />
      <label htmlFor="asc_btn active">오름차순</label>
      <input className="desc_btn" id="desc_btn" type="checkbox"/>
      <label htmlFor="desc_btn">내림차순</label>
    </div>
    )
}

export default AlignBtn;