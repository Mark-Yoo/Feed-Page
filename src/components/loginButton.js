import React, { memo } from "react";
import "./scss/loginButton.scss";

function LoginBtn() {
  return <button className="login_btn">로그인</button>;
}

export default memo(LoginBtn);
