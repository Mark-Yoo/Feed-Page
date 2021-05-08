import React, { memo } from "react";
import "./scss/loadSpinner.scss";

function LoadingSpinner() {
  return <div className="loader"></div>;
}

export default memo(LoadingSpinner);
