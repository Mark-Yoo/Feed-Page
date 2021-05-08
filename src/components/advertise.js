import React, { useState, memo } from "react";
import { useSelector } from "react-redux";
import "./scss/advertise.scss";

function Advertise({ index, count, id }) {
  const { totalAds } = useSelector((state) => state.listAds);
  const [adIndex] = useState(Math.floor(index / count));
  const [adsNow] = useState(totalAds[adIndex]);
  const [imgRoute] = useState("https://cdn.comento.kr/assignment/");

  return (
    <>
      {adsNow && (
        <article className="sponsor_container" id={adsNow.id}>
          <div className="sponsor">Sponsored</div>
          <div className="sponsor_inner">
            <div className="sponsor_img">
              <img src={imgRoute + adsNow.img} alt="광고 이미지" />
            </div>
            <section className="ads_content">
              <h2>{adsNow.title}</h2>
              <p>{adsNow.contents}</p>
            </section>
          </div>
        </article>
      )}
    </>
  );
}

export default memo(Advertise);
